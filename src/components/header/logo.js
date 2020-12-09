import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <h2 className="logo">
      <Link to="/">{logo}</Link>
    </h2>
  );
};

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Logo;
