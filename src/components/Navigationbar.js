import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import Login from "./Login";
import Logout from "./Logout";

import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    padding-top: 30px;
  }
`;

export const Navigationbar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Login />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
