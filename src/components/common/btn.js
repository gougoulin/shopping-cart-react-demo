import React from "react";
import PropTypes from "prop-types";

const Button = ({ btnName, handler }) => {
  return (
    <button onClick={handler} className="btn">
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string,
  handler: PropTypes.func,
};

export default Button;
