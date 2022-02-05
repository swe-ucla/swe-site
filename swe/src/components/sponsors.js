import React from "react";
import "../styles/layout.css";
import { Helmet } from 'react-helmet';

import sponsor_im from "../images/sponsors_professional.png";
import diamond from "../images/diamond_trophy.png";
import platinum from "../images/platinum_trophy.png";
import gold from "../images/gold_trophy.png";
import silver from "../images/silver_trophy.png";
import bronze from "../images/bronze_trophy.png";

import accenture from "../images/company-logos/Accenture-new.png";
import accenture from "../images/company-logos/eaton.png";
import accenture from "../images/company-logos/Aerospace.png";
import accenture from "../images/company-logos/blackrock.png";
import arconic from "../images/company-logos/lockhead.png";
import arconic from "../images/company-logos/OnPrem.png";
import arconic from "../images/company-logos/TI.png";
import arconic from "../images/company-logos/varda.png";
import arconic from "../images/company-logos/edison.png";
import arconic from "../images/company-logos/az.png";
import arconic from "../images/company-logos/wt.png";
import arconic from "../images/company-logos/qualcomm-logo.png";
import arconic from "../images/company-logos/ecolab.png";
import arconic from "../images/company-logos/Pimco.png";
import arconic from "../images/company-logos/PPG.png";
import arconic from "../images/company-logos/P66.png";
import boeing from "../images/company-logos/Boeing-Logo.png";
import boeing from "../images/company-logos/Oracle.png";
import boeing from "../images/company-logos/esri-silver.png";
import coinbase from "../images/company-logos/intel.png";
import sce from "../images/company-logos/southern-california-edison.png";

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
        <div >
            <Helmet>
                    <title> SWE UCLA | Sponsors</title>
                </Helmet>
            
            <div className="event_header">
                A big thank you to all our sponsors for making what we do possible.
            </div>


            <div class="flex-container">
                    <div class="flex-child-left" style={{minWidth:550}}>
                        <img style={{width: 616, height: 400}} src = {sponsor_im}/>
                    </div>

                    <div class="flex-child-left" style={{paddingLeft:50}}>
                        <div className="event_caption" style={{fontSize:34, lineHeight:1.3}}>Interested in supporting SWE-UCLA?</div>
                        <div className="event_caption_body">SWE would like to thank you for your interest in being the driving force for women to excel as both engineers and leaders. Your company can help us reach our goals through monetary support, donation, supplies, and volunteering.</div>
                    </div>
              </div>


              <div class="float-container" style={{paddingBottom:0}}>
                <div className="event_header" style={{paddingBottom:0}}>
                    <img style={{width: 350, height: 200, paddingTop: 50, paddingLeft:60}} src = {diamond}/>
                </div>
              </div>

              
            <div class="float-container">
                <div className="event_header" style={{paddingTop:0}}>
                    <img style={{width: 250, height: 150}} src = {L3communications}/>
                    <img style={{width: 550, height: 150}} src = {northrop}/>
                </div>
            </div>

            
            <div class="float-container" style={{paddingBottom:0}}>
                <div className="event_header" style={{paddingBottom:0}}>
                    <img style={{width: 350, height: 200, paddingTop: 50}} src = {platinum}/>
                </div>
            </div>
            
            <div class="float-container">
                <div className="event_header" style={{paddingBottom:0, paddingTop:0}}>
                    <img style={{width: 270, height: 100, paddingRight: 40}} src = {boeing}/>
                    <img style={{width: 350, height: 100, paddingRight: 40}} src = {symantec}/>
                    <img style={{width: 250, height: 100, paddingRight: 40}} src = {accenture}/>
                    <img style={{width: 250, height: 100, paddingRight: 40}} src = {sce}/>
                    <img style={{width: 150, height: 240, paddingRight: 40}} src = {chevron}/>
                    <img style={{width: 175, height: 240, paddingRight: 40}} src = {FMglobal}/>
                </div>
            </div>


            <div class="float-container" style={{paddingBottom:0}}>
                <div className="event_header" style={{paddingBottom:0}}>
                    <img style={{width: 370, height: 200, paddingTop: 50}} src = {gold}/>
                </div>
            </div>
            
            <div class="float-container" style={{paddingTop:0}}>
                <div className="event_header" style={{paddingBottom:0, paddingTop:0}}>
                    <img style={{width: 270, height: 125}} src = {honey}/>
                </div>
            </div>

            

            <div class="float-container" style={{paddingBottom:0}}>
                <div className="event_header" style={{paddingBottom:0}}>
                    <img style={{width: 310, height: 200, paddingTop: 50}} src = {silver}/>
                </div>
            </div>
            
            <div class="float-container" style={{paddingTop:0}}>
                <div className="event_header" style={{paddingBottom:0, paddingTop:0}}>
                    <img style={{width: 310, height: 100, paddingRight: 40}} src = {arconic}/>
                    <img style={{width: 110, height: 100, paddingRight: 40}} src = {facebook}/>
                    <img style={{width: 270, height: 80, paddingRight: 40}} src = {coinbase}/>
                    <img style={{width: 270, height: 100, paddingRight: 40}} src = {google}/>
                </div>
            </div>


            <div class="float-container" style={{paddingBottom:0}}>
                <div className="event_header" style={{paddingBottom:0}}>
                    <img style={{width: 340, height: 200, paddingTop: 50}} src = {bronze}/>
                </div>
            </div>
            
            <div class="float-container" style={{paddingTop:0}}>
                <div className="event_header" style={{paddingBottom:0, paddingTop:0}}>
                    <img style={{width: 330, height: 100, paddingRight: 40}} src = {kiewit}/>
                    <img style={{width: 120, height: 150, paddingRight: 40}} src = {infinite}/>
                </div>
            </div>
            

            
                
            {/*
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
      </div>*/}

        </div>
      )
    }
}
