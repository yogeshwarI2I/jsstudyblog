import React from "react";
import InputField from "../InputField";
import PrimaryButton from "../button/PrimaryButton";
import {useNavigate} from "react-router-dom";

function Form({props, formFields, onChange}) {
  const navigate = useNavigate();
  console.log("form props", props);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField props={props} formFields={formFields} onChange={onChange} />
        <PrimaryButton
          className="primary-button"
          type="submit"
          name="Login"
          disable={!props.userName || !props.password}
        />
      </form>
    </div>
  );
}

export default React.memo(Form);
