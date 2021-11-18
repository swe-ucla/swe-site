import React from "react";
import "../styles/layout.css";

import logo from "../images/swe-ucla-logo.png";

export default class header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            windowSize: "",
            buttonClass: "button"
        };
    }  

    handleResize = e => {
        const windowSize = window.innerWidth;
        if(windowSize <= 840){
            const buttonClass = "invisible-button";
            this.setState(prevState =>{
                return{
                    windowSize,
                    buttonClass
                };
            });
        }
        else{
            const buttonClass = "button";
            this.setState(prevState =>{
                return{
                    windowSize,
                    buttonClass
                };
            });
        }
    }

    componentDidMount(){
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
      }

    memberHandler = () => {
        window.location.href = "#portal";
    }

    render() {
      return (
          <div className="header">
              <a href = "#"><img src={logo} style={{height:55, width: 90, position:"absolute", left:50, top:15}}/></a>
              <a href="#about-us" class={this.state.buttonClass}>About Us</a>
              <a href="#involved" class={this.state.buttonClass}>Get Involved</a>
              <a href="#events" class={this.state.buttonClass}>Events</a>
              <a href="#sponsors" class={this.state.buttonClass}>Sponsors</a>
              <button className="form_button" onClick={() => {this.memberHandler()}}>Member Portal</button>
          </div>
      )
    }
}
