import React, { useState, useEffect } from "react";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
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
      <Jumbotron>
        {comments.map(comment => (
          <li key={comment.id}>
            <div> User: {comment.name}</div>
            <div>Email: {comment.email}</div>
            <div>{comment.body}</div>
          </li>
        ))}
      </Jumbotron>
    </ul>
  );
}
export default FetchComments;
