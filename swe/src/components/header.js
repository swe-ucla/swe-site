import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/layout.css";
import Dropdown from 'react-bootstrap/Dropdown'

import logo from "../images/swe-ucla-logo.png";

export default class header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            windowSize: "",
            buttonClass: "visible-button",
            dropDownClass: "dropdown-invisible"
        };
    }  

    handleResize = e => {
        const windowSize = window.innerWidth;
        if(windowSize <= 840){
            const buttonClass = "invisible-button";
            const dropDownClass = "dropdown-visible";
            this.setState(prevState =>{
                return{
                    windowSize,
                    buttonClass,
                    dropDownClass
                };
            });
        }
        else{
            const buttonClass = "visible-button";
            const dropDownClass = "dropdown-invisible";
            this.setState(prevState =>{
                return{
                    windowSize,
                    buttonClass,
                    dropDownClass
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
              <a href="#about-us" className={this.state.buttonClass}>About Us</a>
              <a href="#involved" className={this.state.buttonClass}>Get Involved</a>
              <a href="#events" className={this.state.buttonClass}>Events</a>
              <a href="#sponsors" className={this.state.buttonClass}>Sponsors</a>
              <Dropdown>
                 <Dropdown.Toggle variant="success" className={this.state.dropDownClass} id="dropdown-basic" style={{position: "absolute", top: 20, right: 2}}>Menu</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#about-us">About Us</Dropdown.Item>
                    <Dropdown.Item href="involved">Get Involved</Dropdown.Item>
                    <Dropdown.Item href="#events">Events</Dropdown.Item>
                    <Dropdown.Item href="#sponsors">Sponsors</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="form_button" onClick={() => {this.memberHandler()}}>Member Portal</button>
          </div>
      )
    }
}
