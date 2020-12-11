import React, { useState } from "react";

const InputQty = (props) => {
  const {
    placeholder,
    type,
    min,
    max,
    morestyle,
    number,
    handler,
    id,
    current,
  } = props;

  // const [qty, setQty] = useState(number ? number : "");

  const handleChange = (e) => {
    // setQty(e.target.value);
    handler(e.target.value, id);
  };

  return (
    <input
      className={morestyle ? "num__input" + morestyle : "num__input"}
      type={type}
      value={current}
      min={min}
      max={max}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default InputQty;
