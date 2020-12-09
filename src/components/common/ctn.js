import React from "react";

/**
 * Call-To-Action Button
 */
const Ctn = ({ name, target, handler }) => {
  return (
    <button className="call__to__action" onClick={handler}>
      {name}
    </button>
  );
};

export default Ctn;
