import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const Styles = styled.div`
  padding: 5px;
  @media (max-width: 600px) {
    .ul {
      padding-left: 0px;
    }
  }
`;

function FetchComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        console.log(res);
        setComments(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <ul>
      {comments.map(comment => (
        <Styles>
          <Card key={comment.id}>
            <Card.Header>
              <h4>
                <strong>{comment.name}</strong>
              </h4>
              <strong>{comment.email} </strong>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col>{comment.body}</Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Styles>
      ))}
    </ul>
  );
}
export default FetchComments;
