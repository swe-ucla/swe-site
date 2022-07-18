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
                <a href="#"><img src={logo} style={{ height: 55, width: 90, position: "absolute", left: 50, top: 15 }} /></a>
                <button style={{ position: "absolute", top: 20, left: 1220, width: 150 }} className="form_button" onClick={() => { this.memberHandler() }}>Member Portal</button>
                <a href="#about-us" style={{ position: "absolute", top: 0, left: 600, width: 105 }} class="button">About Us</a>
                <a href="#involved" style={{ position: "absolute", top: 0, left: 750, width: 105 }} class="button">Get Involved</a>
                <a href="#events" style={{ position: "absolute", top: 0, left: 900, width: 105 }} class="button">Events</a>
                <a href="#sponsors" style={{ position: "absolute", top: 0, left: 1050, width: 105 }} class="button">Sponsors</a>
            </div>
        )
    }
}
