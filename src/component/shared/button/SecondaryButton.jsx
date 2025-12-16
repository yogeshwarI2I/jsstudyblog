import React from "react";
import PrimaryButton from "./PrimaryButton";

function SecondaryButton(props) {
  return <PrimaryButton variant="ghost" {...props} />;
}

export default SecondaryButton;
