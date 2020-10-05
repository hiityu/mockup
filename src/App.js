import React from "react";
import "./App.css";
import FetchComments from "./FetchComments";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <FetchComments />
    </div>
  );
}

export default App;
