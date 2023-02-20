import React from "react";
import { Col, Row } from "react-bootstrap";

/*
*@Author: Uttam Keshri
*/
import "./Display.css";

const Display = props => {
  return (
    <div>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <input
            style={{color: props.error ? "red" : "black" }}
            id="displayText" 
            type="text" 
            readOnly 
            value={props.value}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Display;
