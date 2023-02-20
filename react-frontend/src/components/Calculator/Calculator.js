/*
*@Author: Uttam Keshri
*/

import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import Display from "../Display";
import ButtonGroup from "../CalculatorButtonGroup";

import API from "../../axios/API";

import "./Calculator.css";

export default class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      results: "",
      a: "", //param1: a
      b: "", //param2: b
      APIFunction: null,
      onParam1: true,
      error: false
    };

    this.resetValues = this.resetValues.bind(this);
    this.getAPIFunction = this.getAPIFunction.bind(this);
    this.performCalculation = this.performCalculation.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  resetValues(error) {
    this.setState({ 
      input: "",
      results: error ? "Error Occurred - Please Clear!" : "",
      a: "", //param1: a
      b: "", //param2: b
      APIFunction: null,
      onParam1: true,
      error: error ? true : false
    });  
  }

  getAPIFunction(value) {
    let APIFunction = null;

    if (value === "+")
      APIFunction = API.add;
    else if (value === "-") 
      APIFunction = API.subtract;
    else if (value === "*")
      APIFunction = API.multiply;
    else if (value === "/")
      APIFunction = API.divide;
    // else already initialized to null

    return APIFunction;
  }

  performCalculation(usedEqualSign, value) {
    this.state.APIFunction(this.state.a, this.state.b)
    .then(response =>
      this.setState({
        input: usedEqualSign ? "" : this.state.input + " " + value + " ",
        results: response.data.result,
        a: usedEqualSign ? "" : response.data.result,
        b: "",
        APIFunction: usedEqualSign ? null : this.getAPIFunction(value),
        onParam1: usedEqualSign ? true : false,
        error: false
      })
    )
    .catch(err => {
      console.log(err);
      this.resetValues(true);
    })
  }

  handleOnClick(event) {
    const value = event.target.value;

    switch (value) {
      case '=': {
        if (this.state.a === "" || 
            this.state.b === "" || 
            this.state.operator === "" ||
            this.state.APIFunction === null) {
          this.resetValues(true);
        }
        else {
          this.performCalculation(true, null);
        }
        break;
      }
      case "Clear": {
        this.resetValues(false);
        break;
      }
      case "Backspace": {
        var str = this.state.input;
        str = str.substr(0,str.length-1);
        this.setState({input: str});
        break;
      }
      case "%": {
        value.preventDefault();
        this.state.input.inputPercent();
        break;
      }
      case "+":
      case "-":
      case "*":
      case "/": {
        if (this.state.a === "") {
          this.resetValues(true);
        }
        else if (!this.state.onParam1) {
          this.performCalculation(false, value);
        }
        else {
          this.setState({
            input: this.state.input + " " + value + " ",
            APIFunction: this.getAPIFunction(value),
            onParam1: false
          }) 
        }
        break;
      }
      default: {
        this.setState({
          input: this.state.input + value,
          a: 
            this.state.onParam1 ? this.state.a + value : this.state.a,
          b:
            this.state.onParam1 ? this.state.b : this.state.b + value
        })
      }
    }
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col>
            <h1 id="calcTitle">Calculator</h1>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <Display value={this.state.input} />
            <Display id = "display"
              value={this.state.results}
              error={this.state.error}
            />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <ButtonGroup
              handleOnClick={this.handleOnClick}
            />
          </Col>
        </Row>
        <Row className="author">
          <Col>
            <h1 id="authTitle">Made by @Uttam Keshri</h1>
          </Col>
        </Row>
      </div>
    );
  }
}