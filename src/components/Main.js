import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import blue from "../assests/pane-1-icon.png";
import green from "../assests/pane-2-icon.png";
import red from "../assests/pane-3-icon.png";

const Styles = styled.div`
  text-align: center;

  padding-bottom: 15%;
  z-index: 3;
  .p {
    margin-bottom: 0px;
  }
  #box {
    text-align: center;
    background: #fff;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    padding: 40px 30px;
    width: 100%;
  }
  h4 {
    padding-top: 40px;
  }
`;

function Main() {
  return (
    <Styles>
      <Container>
        <div className="d-flex justify-content-center">
          <Row>
            <Col xs={12} md={4}>
              <div id="box">
                <img src={blue} alt="" />
                <h4>Blue</h4>
                <p>
                  Blue is the color of the sky and the sea. it is often
                  associated with depth and stability. it symbolizes trust
                  loyality, wisdom, confidence, intelligence, faith, truth, and
                  heaven
                </p>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div id="box">
                <img className="padit" src={green} alt="" />
                <h4>Green</h4>
                <p>
                  Blue is the color of the sky and the sea. it is often
                  associated with depth and stability. it symbolizes trust
                  loyality, wisdom, confidence, intelligence, faith, truth, and
                  heaven
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div id="box">
                <img src={red} alt="" />
                <h4>Red</h4>
                <p>
                  Blue is the color of the sky and the sea. it is often
                  associated with depth and stability. it symbolizes trust
                  loyality, wisdom, confidence, intelligence, faith, truth, and
                  heaven
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Styles>
  );
}

export default Main;
