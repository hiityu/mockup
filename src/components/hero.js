import React from "react";
import styled from "styled-components";

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
