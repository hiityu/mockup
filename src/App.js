import React, { Component } from "react";

import "./App.css";
//Components
import { Navigationbar } from "./components/Navigationbar";
import Container from "react-bootstrap/Container";
// Main Content
import Hero from "./components/Hero";
import Main from "./components/Main";
import FetchComments from "./FetchComments";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigationbar />
        <Hero />
        <Main />
        <FetchComments />
      </React.Fragment>
    );
  }
}

export default App;
