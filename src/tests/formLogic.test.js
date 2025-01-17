import { render, screen, fireEvent } from '@testing-library/react';
import FormBuilder from '../pages/FormBuilder';
import FormPreview from '../pages/FormPreview';

describe('FormBuilder Tests', () => {
  test('renders FormBuilder and adds components', () => {
    const setFormSchemaMock = jest.fn();
    render(<FormBuilder formSchema={[]} setFormSchema={setFormSchemaMock} />);

    const button = screen.getByText(/Text Input/i);
    fireEvent.click(button);
    expect(setFormSchemaMock).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ id: 'text', label: 'Text Input' }),
      ])
    );
  });

  test('handles drag-and-drop reordering', () => {
  });
});

describe('FormPreview Tests', () => {
  test('generates correct JSON schema', () => {
    const mockFormSchema = [
      { id: 'text', label: 'Text Input', component: () => <div>Text</div> },
      { id: 'select', label: 'Select Input', component: () => <div>Select</div> },
    ];

    render(<FormPreview formSchema={mockFormSchema} />);

    const jsonSchema = screen.getByText(/"type": "text"/);
    expect(jsonSchema).toBeInTheDocument();
  });
});
