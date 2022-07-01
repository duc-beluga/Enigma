import React from "react";

export default function SignUp() {
  return (
    <div>
      <div className="sign-up-container">
        <div className="input-group sign-up-input">
          <span className="input-group-text">Username</span>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
          />
        </div>
        <div className="input-group sign-up-input">
          <span className="input-group-text">Password </span>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="Password"
          />
        </div>
      </div>
      <div id="sign-up-button">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </div>
  );
}
