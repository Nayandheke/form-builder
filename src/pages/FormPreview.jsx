import React from 'react';
const FormPreview = React.memo(({ formSchema }) => {
  const generateJSONSchema = () => {
    return formSchema.map((field) => ({
      type: field.id,
      label: field.label || 'Field',
    }));
  };

  return (
    <div>
      <h2 className="text-center text-success">Form Preview</h2>
      <form className="p-3 border bg-light rounded">
        {formSchema.map((field, index) => (
          <div key={index} className="mb-3">
            <field.component label={field.label || 'Field'} />
          </div>
        ))}
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
      <pre className="mt-4 bg-dark text-white p-3 rounded">
        {JSON.stringify(generateJSONSchema(), null, 2)}
      </pre>
    </div>
  );
});

export default FormPreview;