import React from "react";
import PropTypes from "prop-types";
import { OPERATORS } from "../../constants";

const style = {
  wrapper: {
    alignItems: "center",
    backgroundColor: "#ffbfc9",
    border: "1px solid black",
    borderRadius: "5px",
    display: "flex",
    height: "200px",
    justifyContent: "center",
    width: "200px",
    flexDirection: "column"
  },
  input: {
    width: "75px"
  },
  text: {
    margin: "0 auto",
    paddingTop: "20px"
  }
};

const ResultBox = ({ result = 0, operator, onOperatorChange }) => (
  <div style={style.wrapper}>
    <span style={style.input}>
      <input
        type="radio"
        checked={operator === OPERATORS.SUM}
        onChange={() => onOperatorChange(OPERATORS.SUM)}
      />
      Sum
    </span>
    <span style={style.input}>
      <input
        type="radio"
        checked={operator === OPERATORS.MULTIPLY}
        onChange={() => onOperatorChange(OPERATORS.MULTIPLY)}
      />
      Multiply
    </span>
    <p id="result" style={style.text}>
      Result: {result}
    </p>
  </div>
);

ResultBox.propTypes = {
  operator: PropTypes.oneOf([OPERATORS.SUM, OPERATORS.MULTIPLY]),
  onOperatorChange: PropTypes.func.isRequired,
  result: PropTypes.number
};

export default ResultBox;
