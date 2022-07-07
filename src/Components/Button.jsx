import React, { useState } from "react";
import Toast from "./Toast";
import { Encrypt } from "../encrypt";
window.bootstrap = require("bootstrap");

export default function Button() {
  // function toastTrigger() {
  //   const toastLiveExample = document.getElementById("liveToast");
  //   const encryp_input = document.getElementsByClassName("form-control");
  //   const toast = new window.bootstrap.Toast(toastLiveExample);
  //   const msg_input = encryp_input[1].value;
  //   const id_input = encryp_input[2].value;
  //   init_num(id_input);
  //   const msg_output = decrypt(msg_input);
  //   console.log(msg_output);
  //   toast.show();
  // } 

  function toastTrigger() {
    const toastLiveExample = document.getElementById("liveToast");
    const encryp_input = document.getElementsByClassName("form-control");

    const toast = new window.bootstrap.Toast(toastLiveExample);
    const msg_input = encryp_input[1].value;
    const id_input = encryp_input[2].value;

    return [toast, msg_input, id_input];
  }

  function encode() {
    const [toast, msg_input, id_input] = toastTrigger();

    const encode = new Encrypt(id_input);
    const msg_output = encode.encrypt(msg_input);

    setOutPut_msg("Your encrypted message is: " + msg_output);

    toast.show();
  }

  function decode() {
    const [toast, msg_input, id_input] = toastTrigger();

    const encode = new Encrypt(id_input);
    const msg_output = encode.decrypt(msg_input);

    setOutPut_msg("Your decrypted message is: " + msg_output);

    toast.show();
  }

  const [output_msg, setOutPut_msg] = useState("");

  return (
    <div className="d-grid gap-2" id="submitDiv">
      <button className="btn btn-secondary" type="button" onClick={encode}>
        Encode
      </button>
      <button className="btn btn-primary" type="button" onClick={decode}>
        Decode
      </button>

      <Toast msg={output_msg} />
    </div>
  );
}
