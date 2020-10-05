import React from "react";
import styled from "styled-components";
import Login from "./Login";

const Styles = styled.div`
  background: rgb(146 146 146);
  color: white;
  text-align: center;
  padding-top: 5%;
  padding-bottom: 18%;
  z-index: 1;
  @media (min-width: 1385px) {
    margin-bottom: -183px;
  }
  @media (max-width: 1384px) {
    margin-bottom: -90px;
  }
  p {
    margin-bottom: 0px;
  }
  h1 {
    font-size: 6rem;
  }
`;

function Hero() {
  return (
    <Styles>
      <div>
        <h1>Hi User!</h1>
        <p>
          Color really isnt that difficult to get right, if you know where to
          Start.
        </p>
        <p>Learn by doing and youll be a master in no time.</p>
      </div>
    </Styles>
  );
}

export default Hero;
