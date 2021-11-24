import React from "react";
import "../styles/layout.css";
import { Helmet } from 'react-helmet';
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
import annie from "../images/officers/image 73.jpeg";
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
import alyssa from "../images/officers/image 57.jpg";
import karen from "../images/officers/image 58.jpeg";
import luming from "../images/officers/image 59.jpeg";
import vaughn from "../images/officers/image 60.jpg";
import christinek from "../images/officers/image 70.jpeg";
import divya from "../images/officers/image 71.jpeg";
import leila from "../images/officers/image 72.jpeg";
import footer1 from "./footer";
import footer from "../images/footer.png";
import dot from "../images/dot-line.png";

import facebook from "../images/foot-fb.png";
import insta from "../images/foot-insta.png";
import twitter from "../images/foot-twitter.png";
import Footer1 from "./footer";

export default class about extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{ image: annie, names: "ANNIE ZHAO", position: "President", info: "Materials Engineering", year: "4th Year" },
            { image: rithika, names: "RITHIKA SRINIVASAN", position: "External Vice President", info: "Computer Science", year: "4th Year" },
            { image: allison, names: "ALLISON CHEN", position: "Internal Vice President", info: "Computer Science", year: "4th Year" },
            { image: alyssa, names: "ALYSSA SCHIMM", position: "Advocacy Director", info: "Computer Science and Engineering", year: "4th Year" },
            { image: jackie, names: "JACKLYN SUN", position: "EWI External Co-Chair", info: "Computational & Systems Biology", year: "4th Year" },
            { image: leila, names: "LEILA SALEM", position: "EWI Internal Co-Chair", info: "Aerospace Engineering", year: "4th Year" },
            { image: karen, names: "KAREN SU", position: "Historian", info: "Mechanical Engineering", year: "2nd Year" },
            { image: christine, names: "CHRISTINE YANG", position: "Outreach External Director", info: "Mechanical Engineering", year: "3rd Year" },
            { image: hannah, names: "HANNAH WANG", position: "Outreach Logistics Director", info: "Materials Science & Engineering", year: "3rd Year" },
            { image: jessica, names: "JESSICA CHEN", position: "Publicity", info: "Computational & Systems Biology", year: "4th Year" },
            { image: morgan, names: "MORGAN KOPECKY", position: "Mentorship Director", info: "Mechanical Engineering", year: "3rd Year" },
            { image: heidi, names: "HEIDI KWONG", position: "Recruitment & Alumni Relations Director", info: "Mechanical Engineering", year: "4th Year" },
            { image: luming, names: "LUMING CAO", position: "Secretary", info: "Mechanical Engineering", year: "2nd Year" },
            { image: spurthi, names: "SPURTHI RALLAPALLI", position: "Student Relations Director", info: "Computer Science", year: "4th Year" },
            { image: vaughn, names: "VAUGHN CHU", position: "Technical Internal Director", info: "Electrical Engineering", year: "2nd Year" },
            { image: christinek, names: "CHRISTINE KIM", position: "Technical External Director", info: "Computer Science", year: "2nd Year" },
            { image: kellyn, names: "KELLY NGUYEN", position: "Treasurer", info: "Mechanical Engineering", year: "4th Year" },
            { image: divya, names: "DIVYA PONNIAH", position: "Webmaster", info: "Computer Science", year: "3rd Year" }]
        }
    }

    tempHandler = () => {
        window.scrollTo({
            top: 0
        })
    }

    renderCards = (card, index) => {
        return (
            <div className="officer_img">
                <img style={{ height: 200, width: 160, padding: 0 }} src={card.image} />
                <p className="card_info" style={{ fontWeight: "bold" }}>{card.names}</p>
                <p className="card_info" style={{ width: 147 }}>{card.position}</p>
                <p className="card_info" style={{ fontSize: 14 }}>{card.info}</p>
                <p className="card_info" style={{ fontSize: 14 }}>{card.year}</p>
            </div>
        );
    }

    render() {
        return (
            <div className="body">
              
                <Helmet>
                    <title> SWE UCLA | About</title>
                </Helmet>
                <div>
                    <img className="blob" src={blob} />
                    <p className="big_heading" style={{ height: 543, left: 120, top: 90, fontSize: 120, width: 650 }}> You're in for something SWE-et.</p>
                </div>
                <div>
                    <img style={{ position: "absolute", top: 127, left: 800, width: 470, height: 410 }} src={ilooklikeanengineer} />
                    <p className="subtitle" style={{ left: 850, top: 580, fontWeight: "bold" }}>OUR MISSION</p>
                    <p className="subtitle" style={{ height: 90, top: 620, left: 850 }}>SWE-UCLA aims to bring professional development opportunities to UCLA while advocating for the creation of an equal platform for all in engineering.</p>
                </div>
                <div>
                    <img src={dotted} style={{ height: 240, width: 550, paddingTop: 390, paddingLeft: 160 }} />
                    <img src={arrowhead} style={{ position: "absolute", left: 260, height: 30, width: 50, top: 785 }} />
                    <p className="next_header" style={{ fontSize: 34, top: 810, left: -165 }}>Meet Our Board Members</p>
                    <div className="officer_grid" style={{ paddingTop: 150, left: 120 }}>{this.state.cards.map(this.renderCards)}</div>
                </div>

                <div>
                    <p className="next_header" style={{ fontSize: 34, top: 2185, left: -230 }}>Join SWE National</p>
                    <img style={{ position: "absolute", top: 2300, left: 100, height: 400, width: 630 }} src={join} />
                    <p className="subtitle" style={{ left: 280, top: 2720, width: 400, paddingBottom: 120, lineHeight: 1.4 }}>National members get discounts, special opportunities, and scholarships. Join today!</p>
                    <div>
                        <img className="numbers" src={numbers} />
                        <div className="national">
                            <p > Go to the national SWE website </p>
                            <a href="www.swe.org" style={{ fontWeight: "normal" }}>www.swe.org </a>
                            <p style={{ fontWeight: "normal" }}> Hover on Membership
                                <p>Click Join/Renew </p>
                            </p>
                        </div>
                        <div className="national" style={{ top: 2435 }}>
                            <p> Choose a package {"\n"}
                                <p style={{ fontWeight: "normal" }}> New Collegiate Membership in SWE: $20 (1 year membership)
                                    <p>Collegiate to Career Membership in SWE: $50 (Entire collegiate career membership!)</p>
                                </p>
                            </p>
                        </div>
                        <div className="national" style={{ top: 2595 }}>
                            <p> Confirm your registration {"\n"}
                                <p style={{ fontWeight: "normal" }}>
                                    Confirm your registration with our SWE secretary.
                                    <p>
                                        Email the SWE Secretary at secretary.swe.ucla@gmail.com to confirm your registration (please attach a copy of your receipt)
                                    </p>
                                </p>
                            </p>
                        </div>
            
                        
                        

                    </div>
                </div>

               
               
             {/* <div className = "footergen"> 
                <Footer1/>
                   </div>  */}

                {/* <div>
                    <img src={footer} className="committee_event_pics" style={{ position: "absolute", left: 0, width: 1440, top: 2900, paddingBottom: 0 }} />
                    <img src={dot} style={{ position: "absolute", left: 120, top: 2950, width: 2, height: 200 }} />
                    <a href="#about-us" style={{ position: "absolute", top: 2940, left: 170, width: 120 }} onClick={() => { this.tempHandler() }} class="foot-button">About Us</a>
                    <a href="#involved" style={{ position: "absolute", top: 2990, left: 170, width: 150 }} onClick={() => { this.tempHandler() }} class="foot-button">Get Involved</a>
                    <a href="#events" style={{ position: "absolute", top: 3040, left: 155, width: 120 }} onClick={() => { this.tempHandler() }} class="foot-button">Events</a>
                    <a href="#sponsors" style={{ position: "absolute", top: 3090, left: 170, width: 120 }} onClick={() => { this.tempHandler() }} class="foot-button">Sponsors</a>

                    <a href="https://www.facebook.com/swe.ucla"><img src={facebook} style={{ height: 110, width: 105, top: 3000, position: "absolute", left: 500 }} /></a>
                    <a href="https://www.instagram.com/swe.ucla"><img src={insta} style={{ height: 110, width: 105, top: 3000, position: "absolute", left: 650 }} /></a>
                    <a href="https://twitter.com/swe_ucla?lang=en"><img src={twitter} style={{ height: 110, width: 105, top: 3000, position: "absolute", left: 800 }} /></a>

                    <a href="#involved" style={{ position: "absolute", top: 2950, left: 1050, width: 200 }} class="foot-button">Email us at swe@seas.ucla.edu</a>
                    <a href="#involved" style={{ position: "absolute", top: 3050, left: 1010, width: 300 }} class="foot-button">DM us on Facebook for quick inquiries</a>
                </div> */}
                
            </div>
           
        )
    }
}