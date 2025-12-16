import React from "react";

function InputField({
  formFields = [],
  values = {},
  onChange,
  className = "",
  inputClassName = "",
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      {formFields.map((field) => {
        const {
          name,
          label,
          type = "text",
          placeholder,
          required,
          autoComplete,
          disabled,
        } = field;

        return (
          <div key={name} className="space-y-2">
            {label ? (
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor={name}
              >
                {label}
              </label>
            ) : null}
            <input
              id={name}
              name={name}
              type={type}
              value={values?.[name] ?? ""}
              placeholder={placeholder}
              autoComplete={autoComplete}
              required={required}
              disabled={disabled}
              onChange={onChange}
              className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 ${inputClassName}`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default InputField;
