import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function Home() {
  return (
    <div id="introHeader-container">
      <h3 id="introHeader">Create</h3>
      <h3 id="introHeader">Your</h3>
      <h3 id="introHeader">Own</h3>
      <h3 id="introHeader">Secret</h3>
      <h3 id="introHeader">Language</h3>
      <Input />
      <Button />
    </div>
  );
}
