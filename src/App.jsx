import React, { useState } from 'react';
import FormBuilder from './pages/FormBuilder';
import FormPreview from './pages/FormPreview';

const App = () => {
  const [formSchema, setFormSchema] = useState([]);
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary">Interactive Form Builder</h1>
      <div className="text-center mb-4">
        <button className="btn btn-secondary me-2" onClick={() => setPreviewMode(!previewMode)}>
          {previewMode ? 'Edit Form' : 'Preview Form'}
        </button>
      </div>
      {previewMode ? (
        <FormPreview formSchema={formSchema} />
      ) : (
        <FormBuilder formSchema={formSchema} setFormSchema={setFormSchema} />
      )}
    </div>
  );
};

export default App;