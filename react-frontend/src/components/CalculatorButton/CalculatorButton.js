/*
*@Author: Uttam Keshri
*/

import React from "react";
import { Button } from "react-bootstrap";

import "./CalculatorButton.css";

const CalculatorButton = props => {
  return (
    <div className="button-label">
      <Button 
        bsStyle={props.bsStyle}
        value={props.label}
        onClick={props.handleOnClick}
      >   
        {props.label}
      </Button>
    </div>

  );
}

export default CalculatorButton;