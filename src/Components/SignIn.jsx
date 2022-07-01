import React from "react";

export default function SignIn() {
  return (
    <div className="encrypt-input" id="authenticate-input">
      <form className="px-4 py-3">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail1" className="sign-in-input">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="exampleDropdownFormPassword1"
            className="sign-in-input"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="dropdownCheck"
          />
          <label className="form-check-label" htmlFor="dropdownCheck">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
      <div className="dropdown-divider"></div>
      <div>
        <a className="sign-in" href="sign-up">
          Sign up
        </a>
      </div>
      <div>
        <a className="sign-in" href="#">
          Forget Password
        </a>
      </div>
    </div>
  );
}
