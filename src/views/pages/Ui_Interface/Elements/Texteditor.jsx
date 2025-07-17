import React from "react";
import DefaultEditor from "react-simple-wysiwyg";

const Texteditor = ({ value, onChange }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Editor</h5>
      </div>
      <div className="card-body">
        <DefaultEditor value={value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Texteditor;
