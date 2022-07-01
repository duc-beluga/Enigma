import React from "react";
window.bootstrap = require("bootstrap");

export default function Button() {
  function toastTrigger() {
    const toastLiveExample = document.getElementById("liveToast");
    const toast = new window.bootstrap.Toast(toastLiveExample);

    toast.show();
  }
  return (
    <div className="d-grid gap-2" id="submitDiv">
      <button
        className="btn btn-secondary"
        type="button"
        onClick={toastTrigger}
      >
        Encode
      </button>
      <button className="btn btn-primary" type="button" onClick={toastTrigger}>
        Decode
      </button>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img
              src={require("../chatbot.png")}
              className="rounded me-2"
              alt="..."
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </div>
  );
}
