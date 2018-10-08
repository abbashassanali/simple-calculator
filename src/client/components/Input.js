import React from "react";
import PropTypes from "prop-types";

const style = {
  height: "30px",
  width: "60px",
  border: "1px solid black"
};

const Input = ({ onChange }) => (
  <input style={style} onChange={({ target }) => onChange(target.value)} />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Input;
