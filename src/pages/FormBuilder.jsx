import { useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';
import CheckboxInput from '../components/CheckboxInput';

const componentsLibrary = [
  { id: 'text', component: TextInput, label: 'Text Input' },
  { id: 'select', component: SelectInput, label: 'Select Input' },
  { id: 'checkbox', component: CheckboxInput, label: 'Checkbox Input' },
];

const FormBuilder = React.memo(({ formSchema, setFormSchema }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(formSchema);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFormSchema(items);
  };

  const addComponent = (component) => {
    setFormSchema([...formSchema, { ...component, id: Date.now() }]);
  };

  const memoizedFormSchema = useMemo(() => formSchema, [formSchema]);

  return (
    <div className="row">
      <div className="col-md-3">
        <h5>Component Library</h5>
        <div className="list-group">
          {componentsLibrary.map((item) => (
            <button
              key={item.id}
              className="list-group-item list-group-item-action"
              onClick={() => addComponent(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="col-md-9">
        <h5>Form Builder</h5>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="form-builder">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="border p-3 bg-light"
                style={{ minHeight: '300px' }}
              >
                {memoizedFormSchema.map((field, index) => (
                  <Draggable key={field.id} draggableId={field.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="mb-3 p-2 bg-white border rounded"
                      >
                        <field.component label={field.label || 'Field'} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
});

export default FormBuilder;