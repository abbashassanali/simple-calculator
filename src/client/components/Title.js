import React from "react";
import PropTypes from "prop-types";

const Title = ({ label }) => <p>{label}</p>;

Title.propTypes = {
  label: PropTypes.string.isRequired
};

export default Title;
