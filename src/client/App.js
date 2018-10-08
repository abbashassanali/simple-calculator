import React, { Component } from "react";
import InputBox from "./components/InputBox";
import Title from "./components/Title";
import Input from "./components/Input";
import ResultBox from "./components/ResultBox";
import { OPERATORS } from "../constants";

const style = {
  wrapper: {
    alignItems: "center",
    background: "linear-gradient(#fefefe, #ccd8e7)",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100vh",
    justifyContent: "space-around"
  }
};

class App extends Component {
  state = {
    value1: null,
    value2: null,
    value3: null,
    operator: OPERATORS.SUM,
    result: 0
  };

  calculate = () => {
    const { value1, value2, value3, operator } = this.state;
    return fetch("http://localhost:3000/api/calculate/", {
      method: "POST",
      body: JSON.stringify({
        value1,
        value2,
        value3,
        operator
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(({ result }) => this.setState({ result }));
  };

  onValueChange = key => value => {
    const number = parseInt(value);
    this.setState({ [key]: Number.isInteger(number) ? number : 0 }, () =>
      this.calculate()
    );
  };

  onOperatorChange = value => {
    this.setState({ operator: value }, () => this.calculate());
  };

  render() {
    const { result, operator } = this.state;

    return (
      <div style={style.wrapper}>
        <InputBox
          title={<Title label="Value 1:" />}
          input={<Input onChange={this.onValueChange("value1")} />}
        />
        <InputBox
          title={<Title label="Value 2:" />}
          input={<Input onChange={this.onValueChange("value2")} />}
        />
        <InputBox
          title={<Title label="Value 3:" />}
          input={<Input onChange={this.onValueChange("value3")} />}
        />
        <ResultBox
          result={result}
          operator={operator}
          onOperatorChange={this.onOperatorChange}
        />
      </div>
    );
  }
}

export default App;
