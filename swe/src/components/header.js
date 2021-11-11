import React from "react";
import "../styles/layout.css";

import logo from "../images/swe-ucla-logo.png";

export default class header extends React.Component {
    memberHandler = () => {
        window.location.href = "#portal";
   }

    render() {
      return (
          <div className="header">
              <a href = "#"><img src={logo} style={{height:55, width: 90, position:"absolute", left:50, top:15}}/></a>
              <a href="#about-us" class="button">About Us</a>
              <a href="#involved" class="button">Get Involved</a>
              <a href="#events" class="button">Events</a>
              <a href="#sponsors" class="button">Sponsors</a>
              <button className="form_button" onClick={() => {this.memberHandler()}}>Member Portal</button>
          </div>
      )
    }
}