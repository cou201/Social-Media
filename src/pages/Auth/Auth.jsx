import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="WebName">
          <h1>El club social</h1>
          <h6>Explora las mejores ideas del mundo</h6>
        </div>
      </div>
      <SingUp />
    </div>
  );
};

function SingUp() {
  const NavigateHomeError = useNavigate();

  const handleRedirectHomeError = () => {
    NavigateHomeError("/Home");
  };
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Registrate</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="FirstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="LastName"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="Password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="ConfirmPass"
          />
        </div>

        <div>
          <span> Si ya tienes una cuenta logeate!!</span>
        </div>
        <button
          className="button infoButton"
          type="Submit"
          onClick={handleRedirectHomeError}
        >
          {" "}
          SingUp
        </button>
      </form>
    </div>
  );
}

export default Auth;
