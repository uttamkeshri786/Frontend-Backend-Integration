/*
*@Author: Uttam Keshri
*/
import React from "react";
import { ButtonGroup, Col } from "react-bootstrap";

import CalculatorButton from "../CalculatorButton";

import "./CalculatorButtonGroup.css";

const CalculatorButtonGroup = props => {
  return (
    <div>
      <ButtonGroup justified>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="primary"
            label="1"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="primary"
            label="2"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="primary"
            label="3"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="primary"
            label="4"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="info"
            label="-"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="info"
            label="+"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
      </ButtonGroup>

      <ButtonGroup justified>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="primary"
            label="5"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="primary"
            label="6"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="primary"
            label="7"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="primary"
            label="8"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="info"
            label="*"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalculatorButton
            bsStyle="info"
            label="/"
            handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>
      </ButtonGroup>
      <Col xs={6} md={6} className="buttonCol">
        <ButtonGroup justified>
          <ButtonGroup>
            <CalculatorButton
              bsStyle="primary"
              label="9"
              handleOnClick={props.handleOnClick}
            />
          </ButtonGroup>
          <ButtonGroup>
            <CalculatorButton
              bsStyle="primary"
              label="0"
              handleOnClick={props.handleOnClick}
            />
          </ButtonGroup>
          <ButtonGroup>
            <CalculatorButton
              bsStyle="primary"
              label="."
              handleOnClick={props.handleOnClick}
            />
          </ButtonGroup>
          <ButtonGroup>
          <CalculatorButton
          bsStyle="primary"
          label="%"
          handleOnClick={props.handleOnClick}
          />
        </ButtonGroup>

        </ButtonGroup>
      </Col>
      <Col xs={6} md={6} className="buttonCol">
        <ButtonGroup justified>
          <ButtonGroup>
            <CalculatorButton
              bsStyle="warning"
              label="Clear"
              handleOnClick={props.handleOnClick}
            />
          </ButtonGroup>
          <ButtonGroup>
            <CalculatorButton
              bsStyle="danger"
              label="Backspace"
              handleOnClick={props.handleOnClick}
            />
          </ButtonGroup>
          <ButtonGroup>
            <CalculatorButton
              bsStyle="success"
              label="="
              handleOnClick={props.handleOnClick}
            />
          </ButtonGroup>
        </ButtonGroup>
      </Col>
    </div>
  );
}
export default CalculatorButtonGroup;