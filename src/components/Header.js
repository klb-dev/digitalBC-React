import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {
  return (
    <header>
      <img src={require("./images/profileImg.png")} alt="Woman with long brown hair in beige jacket"/>
      <h1>Laura Smith</h1>
      <h2>Frontend Developer</h2>
      <p>laurasmith.website</p>
      <button href="mailto:laura.smith@email.com"><FontAwesomeIcon icon="fa-solid fa-envelope" size="lg" style={{color: "#1e1f26",}} /> Email</button>
    </header>
  );
}