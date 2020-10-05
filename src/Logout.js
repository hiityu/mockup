import React from "react";
import { useGoogleLogout } from "react-google-login";

const clientId =
  "700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com";

function Logout() {
  const onLogoutSuccess = res => {
    console.log("Logged out Success");
    alert("Logged out Successfully ✌");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default Logout;
