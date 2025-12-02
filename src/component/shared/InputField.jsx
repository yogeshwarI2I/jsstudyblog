import React from "react";

function InputField({props, formFields, onChange}) {
  return (
    <div>
      {formFields.map((formField) => (
        <div>
          <label>{formField.label}</label>
          <br />
          <input
            name={formField.name}
            type={formField.type}
            placeholder={formField.placeholder}
            onChange={onChange}
          ></input>
        </div>
      ))}
    </div>
  );
}

export default InputField;
