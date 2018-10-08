import React from "react";
import PropTypes from "prop-types";

const style = {
  alignItems: "center",
  backgroundColor: "#75cfff",
  border: "1px solid black",
  borderRadius: "5px",
  display: "flex",
  height: "200px",
  justifyContent: "space-around",
  width: "200px"
};

const InputBox = ({ title, input }) => (
  <div style={style}>
    {title}
    {input}
  </div>
);

InputBox.propTypes = {
  title: PropTypes.node.isRequired,
  input: PropTypes.node.isRequired,
};

export default InputBox;
