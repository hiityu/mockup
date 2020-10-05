import React, { useState, useEffect } from "react";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
        <Jumbotron key={comment.id}>
          <Row>
            <Col md={3}>
              <h4> User: </h4>
              <h4>{comment.name}</h4>
              <h4>Email: </h4>
              <h4>{comment.email}</h4>
            </Col>
            <Col md={9}>
              <p>{comment.body}</p>
            </Col>
          </Row>
        </Jumbotron>
      ))}
    </ul>
  );
}
export default FetchComments;
