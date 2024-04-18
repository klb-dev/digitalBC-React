import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer() {
  return (
    <footer>
      <ul>
        <li className="list-items"><FontAwesomeIcon icon="fa-brands fa-square-twitter" size="xl" style={{color: "#918e9b",}} /></li>
        <li className="list-items"><FontAwesomeIcon icon="fa-brands fa-square-facebook" size="xl" style={{color: "#918e9b",}} /></li>
        <li className="list-items"><FontAwesomeIcon icon="fa-brands fa-square-instagram" size="xl" style={{color: "#918e9b",}} /></li>
        <li className="list-items"><FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" style={{color: "#918e9b",}} /></li>
        <li className="list-items"><FontAwesomeIcon icon="fa-brands fa-square-github" size="xl" style={{color: "#918e9b",}} /></li>
      </ul>
    </footer>
  );
}