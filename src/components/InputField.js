import React from "react";
import "./InputField.css"

const InputField = function (props) {
  const onInputChange = (event) => {
    const { name, value } = event.target;
    props.onInputChange(name, value);
  };

  return (
    <div>
      <input
        className="input-field"
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        onChange={onInputChange}
        autoComplete="off"
      />
    </div>
  );
};

export default InputField;