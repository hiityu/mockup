import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Login from "./Login";
import Logout from "./Logout";

import styled from "styled-components";
import brand from "../assests/bytelion-logo.png";

const Styles = styled.div``;

export const Navigationbar = () => (
  <Styles>
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={brand} width="220" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Login />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </Styles>
);
