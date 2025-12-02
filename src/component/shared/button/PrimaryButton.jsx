import React from "react";

function PrimaryButton({className, type, name, disable}) {
  return (
    <div>
      <button className={className} type={type} disabled={disable}>
        {name}
      </button>
    </div>
  );
}

export default PrimaryButton;
