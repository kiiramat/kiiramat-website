import React from "react";
import "./TextArea.css"

const TextArea = function (props) {
  const onInputChange = (event) => {
    const { name, value } = event.target;
    props.onInputChange(name, value);
  };

  return (
    <div>
      <textarea
        className="textarea-field"
        name={props.name}
        onChange={onInputChange}
      />
    </div>
  );
};

export default TextArea;