import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <div>{comment.name}</div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FetchComments;
