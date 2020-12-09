import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQtyPurchased } from "../../actions/add2cartAction";

const InputQty = (props) => {
  const dispatch = useDispatch();
  const { placeholder, type, min, max, morestyle, number, handler, id } = props;

  const [qty, setQty] = useState(number ? number : "");

  const handleChange = (e) => {
    setQty(e.target.value);
    handler(e.target.value, id);
  };

  return (
    <input
      className={morestyle ? "num__input" + morestyle : "num__input"}
      type={type}
      value={qty}
      min={min}
      max={max}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default InputQty;
