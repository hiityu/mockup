import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import blue from "../assests/pane-1-icon.png";
import green from "../assests/pane-2-icon.png";
import red from "../assests/pane-3-icon.png";

const Styles = styled.div`
  background: grey;
  color: white;
  text-align: center;
  padding-top: 10%;
  padding-bottom: 15%;
  z-index: 1;
  .p {
    margin-bottom: 0px;
  }
`;

function Main() {
  return (
    <Styles>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={green} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <img src={green} alt="" />
        </Col>
        <Col>
          <img src={red} alt="" />
        </Col>
      </Row>
    </Styles>
  );
}

export default Main;
