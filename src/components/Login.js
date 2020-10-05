import React from "react";
import { useGoogleLogin } from "react-google-login";
import google from "../assests/google.png";
import styled from "styled-components";

// refresh token
import { refresh } from "./refesh";

const Styles = styled.div`
  .but {
    color: black;
    background: white;
    border: none;
  }
  .button-text {
    padding-left: 2px;
  }
`;

const clientId =
  "700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com";

function Login() {
  const onSuccess = res => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name}`);
    refresh(res);
  };

  const onFailure = res => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <Styles>
      <button onClick={signIn} className="but">
        <img src={google} width="30" alt="google login" className="icon"></img>

        <span className="buttonText"> Sign in with Google</span>
      </button>
    </Styles>
  );
}

export default Login;
