import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import InputField from "../shared/inputfield/InputField";
import PrimaryButton from "../shared/button/PrimaryButton";

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
      placeholder: "Enter UserName",
      autoComplete: "username",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter Password",
      autoComplete: "current-password",
      required: true,
    },
  ];

  const handleChange = (e) =>
    setUserData((prev) => ({...prev, [e.target.name]: e.target.value}));
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e7eeff] px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <InputField
            values={userData}
            formFields={formFields}
            onChange={handleChange}
          />
          <PrimaryButton
            className="w-full"
            type="submit"
            name="Login"
            disabled={!userData.userName || !userData.password}
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
