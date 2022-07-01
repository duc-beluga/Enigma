import React from "react";

export default function Input() {
  return (
    <div className="input-group mb-3 encrypt-input" id="inputDiv">
      <input
        type="text"
        className="form-control"
        placeholder="Message"
        aria-label="Username"
      />
      <span className="input-group-text encrypt-input"></span>
      <input
        type="text"
        className="form-control"
        placeholder="Encryption ID"
        aria-label="Server"
      />
    </div>
  );
}
