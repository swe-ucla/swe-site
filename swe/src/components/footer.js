import React from "react";
import "../styles/layout.css";
import footer from "../images/footer.png";
import dot from "../images/dot-line.png";
import { Helmet } from 'react-helmet';
//import fb from "../images/foot-fb.png";
import insta from "../images/foot-insta.png";
import twitter from "../images/foot-twitter.png";
//import dev from "../images/dev.jpg";
import facebook from "../images/foot-fb.png";
export default class footer1 extends React.Component {

    render() {
      return (
        <div className="footer1">
        <img src={footer} className="committee_event_pics" style={{position:"absolute", left:0, width:1440, top:2050, bottom:0}}/>
        <img src={dot} style={{position:"absolute", left:120, top:2100, width:2, height:200}}/>
        <a href="#about-us"  class="foot-button">About Us</a>    //style={{position:"absolute", top:2090, left:170, width:120}} onClick={() => {this.tempHandler()}}
        <a href="#involved" style={{position:"absolute", top:2140, left:170, width:150}} onClick={() => {this.tempHandler()}} class="foot-button">Get Involved</a>
        <a href="#events" style={{position:"absolute", top:2190, left:155, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">Events</a>
        <a href="#sponsors" style={{position:"absolute", top:2240, left:170, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">Sponsors</a>

        <a href = "https://www.facebook.com/swe.ucla"><img src={facebook} style={{height:110, width: 105, top:2150, position:"absolute", left:500}}/></a>
        <a href = "https://www.instagram.com/swe.ucla"><img src={insta} style={{height:110, width: 105, top:2150, position:"absolute", left:650}}/></a>
        <a href = "https://twitter.com/swe_ucla?lang=en"><img src={twitter} style={{height:110, width: 105, top:2150, position:"absolute", left:800}}/></a>

        <a href="#involved" style={{position:"absolute", top:2100, left:1050, width:200}} class="foot-button">Email us at swe@seas.ucla.edu</a>
        <a href="#involved" style={{position:"absolute", top:2200, left:1010, width:300}} class="foot-button">DM us on Facebook for quick inquiries</a>
    </div>
                     
              )
            }


}
            
          
  