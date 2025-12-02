import React, {useCallback, useState} from "react";
import Form from "./shared/form/Form";
import {useNavigate} from "react-router-dom";

function LoginForm() {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const formFields = [
    {
      name: "userName",
      label: "UserName",
      type: "text",
      placeHolder: "Enter UserName",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeHolder: "Enter Password",
    },
  ];
  const handleChange = (e) =>
    setUserData({...userData, [e.target.name]: e.target.value});

  return (
    <div>
      <Form props={userData} formFields={formFields} onChange={handleChange} />
    </div>
  );
}

export default LoginForm;
