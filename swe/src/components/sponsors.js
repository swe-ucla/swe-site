import React from "react";
import "../styles/layout.css";
import { Helmet } from 'react-helmet';

import sponsor_im from "../images/sponsors_professional.png";
import diamond from "../images/diamond_trophy.png";
import platinum from "../images/platinum_trophy.png";
import gold from "../images/gold_trophy.png";
import silver from "../images/silver_trophy.png";
import bronze from "../images/bronze_trophy.png";

import accenture from "../images/company-logos/accenture.png";
import arconic from "../images/company-logos/arconic.png";
import boeing from "../images/company-logos/boeing.png";
import chevron from "../images/company-logos/chevron.png";
import coinbase from "../images/company-logos/coinbase.png";
import facebook from "../images/company-logos/facebook.png";
import FMglobal from "../images/company-logos/FM-global.png";
import google from "../images/company-logos/google.png";
import honey from "../images/company-logos/honey.png";
import infinite from "../images/company-logos/infinite.png";
import kiewit from "../images/company-logos/kiewit.png";
import L3communications from "../images/company-logos/L3-communications.png";
import northrop from "../images/company-logos/northrop-grumman.png";
import sce from "../images/company-logos/southern-california-edison.png";
import symantec from "../images/company-logos/symantec.png";

import footer from "../images/footer.png";
import dot from "../images/dot-line.png";

import fb from "../images/foot-fb.png";
import insta from "../images/foot-insta.png";
import twitter from "../images/foot-twitter.png";

export default class sponsors extends React.Component {
    tempHandler = () => {
        window.scrollTo({
            top: 0
        })
    }

    render() {
      return (
        <div className="body">
            <Helmet>
                    <title> SWE UCLA | Sponsors</title>
                </Helmet>
            <p className="next_header" style={{top: 120, left: 0, paddingLeft: 320, paddingRight: 320, fontSize:45, lineHeight:1.3, width:800}}>
                A big thank you to all our sponsors for making what we do possible.
            </p>
            <div>
                <img style={{position: "absolute", top: 365, left: 150, width: 616, height: 400}} src = {sponsor_im}/>
            </div>
            <div className="event_caption">
                <div style={{top: 420, width: 400, position:"absolute", fontSize:34, fontWeight:"bold", lineHeight:1.3, left:850}}> Interested in supporting SWE-UCLA?</div>
                <p className="subtitle" style={{height:90, top: 520, left:850, width:410}}>SWE would like to thank you for your interest in being the driving force for women to excel as both engineers and leaders. Your company can help us reach our goals through monetary support, donation, supplies, and volunteering.</p>
            </div>

            <img style={{position: "absolute", top: 900, left: 660, width: 200, height: 150}} src = {diamond}/>
                <img style={{position: "absolute", top: 1070, left: 380, width: 250, height: 150}} src = {L3communications}/>
                <img style={{position: "absolute", top: 1070, left: 640, width: 550, height: 150}} src = {northrop}/>
            <img style={{position: "absolute", top: 1295, left: 640, width: 195, height: 135}} src = {platinum}/>
                <img style={{position: "absolute", top: 1450, left: 200, width: 270, height: 100}} src = {boeing}/>
                <img style={{position: "absolute", top: 1440, left: 550, width: 250, height: 100}} src = {accenture}/>
                <img style={{position: "absolute", top: 1550, left: 200, width: 250, height: 100}} src = {sce}/>
                <img style={{position: "absolute", top: 1550, left: 500, width: 350, height: 100}} src = {symantec}/>
                <img style={{position: "absolute", top: 1430, left: 900, width: 150, height: 240}} src = {chevron}/>
                <img style={{position: "absolute", top: 1430, left: 1100, width: 175, height: 240}} src = {FMglobal}/>
            <img style={{position: "absolute", top: 1700, left: 640, width: 200, height: 140}} src = {gold}/>
                <img style={{position: "absolute", top: 1865, left: 605, width: 270, height: 125}} src = {honey}/>
            <img style={{position: "absolute", top: 2050, left: 650, width: 180, height: 130}} src = {silver}/>
                <img style={{position: "absolute", top: 2190, left: 450, width: 310, height: 100}} src = {arconic}/>
                <img style={{position: "absolute", top: 2190, left: 805, width: 110, height: 100}} src = {facebook}/>
                <img style={{position: "absolute", top: 2300, left: 435, width: 270, height: 80}} src = {coinbase}/>
                <img style={{position: "absolute", top: 2300, left: 735, width: 270, height: 100}} src = {google}/>
            <img style={{position: "absolute", top: 2450, left: 650, width: 200, height: 130}} src = {bronze}/>
                <img style={{position: "absolute", top: 2600, left: 450, width: 330, height: 100}} src = {kiewit}/>
                <img style={{position: "absolute", top: 2575, left: 835, width: 120, height: 150}} src = {infinite}/>

            <div>
                <img src={footer} className="committee_event_pics" style={{position:"absolute", left:0, width:1440, top:2800, paddingBottom:0}}/>
                <img src={dot} style={{position:"absolute", left:120, top:2850, width:2, height:200}}/>
                <a href="#about-us" style={{position:"absolute", top:2840, left:170, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">About Us</a>
                <a href="#involved" style={{position:"absolute", top:2890, left:170, width:150}} onClick={() => {this.tempHandler()}} class="foot-button">Get Involved</a>
                <a href="#events" style={{position:"absolute", top:2940, left:155, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">Events</a>
                <a href="#sponsors" style={{position:"absolute", top:2990, left:170, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">Sponsors</a>

                <a href = "https://www.facebook.com/swe.ucla"><img src={fb} style={{height:110, width: 105, top:2900, position:"absolute", left:500}}/></a>
                <a href = "https://www.instagram.com/swe.ucla"><img src={insta} style={{height:110, width: 105, top:2900, position:"absolute", left:650}}/></a>
                <a href = "https://twitter.com/swe_ucla?lang=en"><img src={twitter} style={{height:110, width: 105, top:2900, position:"absolute", left:800}}/></a>

                <a href="#involved" style={{position:"absolute", top:2850, left:1050, width:200}} class="foot-button">Email us at swe@seas.ucla.edu</a>
                <a href="#involved" style={{position:"absolute", top:2950, left:1010, width:300}} class="foot-button">DM us on Facebook for quick inquiries</a>
            </div>

        </div>
      )
    }
}
