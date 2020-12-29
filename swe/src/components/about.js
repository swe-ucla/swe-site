import React from "react";
import "../styles/layout.css";
import ReactMarkdown from 'react-markdown'
import ilooklikeanengineer from "../images/ilooklikeanengineer.png";
import blob from "../images/blue-blob.png";
import dotted from "../images/dotted-line.png";
import arrowhead from "../images/arrowhead.png";
import join from "../images/joinswenational.png";
import numbers from "../images/123.png";

import isabel from "../images/officers/image 39.png";
import sharvani from "../images/officers/image 40.png";
import maddy from "../images/officers/image 41.png";
import simran from "../images/officers/image 42.png";
import spurthi from "../images/officers/image 43.png";
import allison from "../images/officers/image 44.png";
import annie from "../images/officers/image 45.png";
import kelly from "../images/officers/image 46.png";
import christine from "../images/officers/image 47.png";
import hannah from "../images/officers/image 48.png";
import jessica from "../images/officers/image 49.png";
import morgan from "../images/officers/image 50.png";
import eunice from "../images/officers/image 51.png";
import heidi from "../images/officers/image 52.png";
import jackie from "../images/officers/image 53.png";
import rithika from "../images/officers/image 54.png";
import kellyn from "../images/officers/image 55.png";
import christina from "../images/officers/image 56.png";

export default class about extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards: [{image: isabel, names: "ISABEL KETNER", position: "President", info: "Computer Engineering", year: "4th Year"}, 
        {image: sharvani, names: "SHARVANI JHA", position: "External Vice President", info: "Computer Science", year: "4th Year"}, 
        {image: maddy, names: "MADDY WESTERGAARD", position: "Internal Vice President", info: "Computer Science", year: "4th Year"},
        {image: simran, names: "SIMRAN PARKHE", position: "Internal Vice President", info: "Computer Engineering", year: "3rd Year"},
        {image: spurthi, names: "SPURTHI RALLIPALLI", position: "Advocacy Director", info: "Computer Science", year: "3rd Year"},
        {image: allison, names: "ALLISON CHEN", position: "EWI External Co-Chair", info: "Computer Science", year: "3rd Year"},
        {image: annie, names: "ANNIE CHEN", position: "EWI Internal Co-Chair", info: "Materials Science & Engineering" , year: "3rd Year"},
        {image: kelly, names: "KELLY CHENG", position: "Historian", info: "Computer Science & Engineering", year: "4th Year"},
        {image: christine, names: "CHRISTINE YANG", position: "Outreach External Director", info: "Mechanical Engineering", year: "2nd Year"},
        {image: hannah, names: "HANNAH WANG", position: "Outreach Logistics Director", info: "Materials Science & Engineering", year: "2nd Year"},
        {image: jessica, names: "JESSICA CHEN", position: "Publicity", info: "Computational & Systems Biology" , year: "3rd Year"},
        {image: morgan, names: "MORGAN KOPECKY", position: "Mentorship Director", info: "Computer Science & Engineering", year: "2nd Year"},
        {image: eunice, names: "EUNICE KAN", position: "Recruitment & Alumni Relations Director", info: "Mechanical Engineering", year: "4th Year"},
        {image: heidi, names: "HEIDI KWON", position: "Secretary", info: "Mechanical Engineering", year: "3rd Year"},
        {image: jackie, names: "JACKIE SUN", position: "Student Relations Director", info: "Computational & Systems Biology", year: "3rd Year"},
        {image: rithika, names: "RITHIKA SRINIVASAN", position: "Technical Director", info: "Computer Science", year: "3rd Year"},
        {image: kellyn, names: "KELLY NGUYEN", position: "Treasurer", info: "Mechanical Engineering", year: "3rd Year"} ,
        {image: christina, names: "CHRISTINA TONG", position: "Webmaster", info: "Computer Science & Engineering" , year: "2nd Year"}]
      } 
    }

    renderCards = (card, index) => {
        return(
            <div className="officer_img"> 
                <img style={{height: 170, width: 140, padding:0}} src={card.image}/>
                <p className="card_info" style={{fontWeight: "bold"}}>{card.names}</p>
                <p className="card_info" style={{width: 147}}>{card.position}</p>
                <p className="card_info" style={{fontSize:14}}>{card.info}</p>
                <p className="card_info" style={{fontSize:14}}>{card.year}</p>
            </div>
        );
    }

    render() {
        return(
            <div className="body">
                <div> 
                    <img className="blob" src={blob}/>
                    <p className="big_heading" style={{height: 543, left:120, top: 90, fontSize: 120, width: 650}}> You're in for something SWE-et.</p>
                </div>
                <div>
                    <img style={{position: "absolute", top: 127, left: 800, width: 470, height: 410}} src = {ilooklikeanengineer}/>
                    <p className="subtitle" style={{left:850, top:580, fontWeight:"bold"}}>OUR MISSION</p>
                    <p className="subtitle" style={{height:90, top: 620, left:850}}>SWE-UCLA aims to bring professional development opportunities to UCLA while advocating for the creation of an equal platform for all in engineering.</p>
                </div>
                <div>
                    <img src={dotted} style={{height:240, width: 550, paddingTop: 390, paddingLeft: 160}}/>
                </div>
                <div>
                    <img src={arrowhead} style={{paddingLeft:140, height: 30, width: 50}}/>
                </div>
                <div>
                    <p className="next_header" style={{fontSize:34, top:810, left: -165}}>Meet Our Board Members</p>
                </div>
                <div className="officer_grid" style={{paddingTop: 140, left: 120}}>{this.state.cards.map(this.renderCards)}</div>
                <div>
                    <p className="next_header" style={{fontSize:34, top:2120, left: -230}}>Join SWE National</p>
                    <img style={{paddingLeft:-230, paddingTop: 100, height:400, width:630}} src={join}/>
                    <p className="subtitle" style={{left:280, top: 2660, width: 400, paddingBottom: 120, lineHeight:1.4}}>National members get discounts, special opportunities, and scholarships. Join today!</p>
                    <div>
                        <img className="numbers" src={numbers}/>
                        <div className="national">
                            <p > Go to the national SWE website </p>
                            <a href="www.swe.org" style={{fontWeight:"normal"}}>www.swe.org </a> 
                            <p style={{fontWeight:"normal"}}> Hover on Membership 
                                <p>Click Join/Renew </p>
                             </p>
                        </div>
                        <div className="national" style={{top:2395}}>
                            <p> Choose a package {"\n"}
                             <p style={{fontWeight:"normal"}}> New Collegiate Membership in SWE: $20 (1 year membership) 
                                <p>Collegiate to Career Membership in SWE: $50 (Entire collegiate career membership!)</p>
                             </p>
                            </p>
                        </div>
                        <div className="national" style={{top:2555}}>
                            <p> Confirm your registration {"\n"}
                             <p style={{fontWeight:"normal"}}> 
                                Confirm your registration with our SWE secretary. 
                                <p>
                                Email the SWE Secretary at secretary.swe.ucla@gmail.com to confirm your registration (please attach a copy of your receipt)
                                </p>
                             </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}