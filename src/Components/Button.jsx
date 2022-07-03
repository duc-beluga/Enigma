import React from "react";
import Toast from "./Toast";
import { encrypt, decrypt, init_num } from "../encrypt";
window.bootstrap = require("bootstrap");

export default function Button() {
  function toastTrigger() {
    const toastLiveExample = document.getElementById("liveToast");
    const encryp_input = document.getElementsByClassName("form-control");
    const toast = new window.bootstrap.Toast(toastLiveExample);
    const msg_input = encryp_input[1].value;
    const id_input = encryp_input[2].value;
    init_num(id_input);
    const msg_output = decrypt(msg_input);
    console.log(msg_output);
    toast.show();
  }

  function encode() {
    const toastLiveExample = document.getElementById("liveToast");
    const encryp_input = document.getElementsByClassName("form-control");
    const toast_body = document.getElementsByClassName("toast-body");
    const toast = new window.bootstrap.Toast(toastLiveExample);
    const msg_input = encryp_input[1].value;
    const id_input = encryp_input[2].value;
    init_num(id_input);
    const msg_output = encrypt(msg_input);
    console.log(msg_output);
    toast_body[0].textContent = "Your encrypted message is: " + msg_output;

    toast.show();
  }

  function decode() {
    const toastLiveExample = document.getElementById("liveToast");
    const encryp_input = document.getElementsByClassName("form-control");
    const toast_body = document.getElementsByClassName("toast-body");
    const toast = new window.bootstrap.Toast(toastLiveExample);
    const msg_input = encryp_input[1].value;
    const id_input = encryp_input[2].value;
    init_num(id_input);
    const msg_output = decrypt(msg_input);
    console.log(msg_output);
    toast_body[0].textContent = "Your decrypted message is: " + msg_output;
    toast.show();
  }
  return (
    <div className="d-grid gap-2" id="submitDiv">
      <button className="btn btn-secondary" type="button" onClick={encode}>
        Encode
      </button>
      <button className="btn btn-primary" type="button" onClick={decode}>
        Decode
      </button>

      <Toast />
    </div>
  );
}
