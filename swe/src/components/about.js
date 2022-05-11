import React from "react";
import "../styles/layout.css";
import { Helmet } from 'react-helmet';
import ilooklikeanengineer from "../images/ilooklikeanengineer.png";
import blob from "../images/blue-blob.png";
import dotted from "../images/dotted-line.png";
import arrowhead from "../images/arrowhead.png";
import join from "../images/joinswenational.png";
import numbers from "../images/123.png";

import national from "../images/swe_national.png";
import national_a from "../images/national_one.png";



import sweet from "../images/sweet_blue.png";
import sweet_double from "../images/sweet_blue_double.png";

import grace from "../images/officers/image 1.png";
import diya from "../images/officers/image 2.png";
import lily from "../images/officers/image 3.png";
import hannahc from "../images/officers/image 4.png";
import christine from "../images/officers/image 5.png";
import hannah from "../images/officers/image 6.png";
import karen from "../images/officers/image 7.jpeg";
import luming from "../images/officers/image 8.jpeg";
import michelle from "../images/officers/image 9.png";
import lilyg from "../images/officers/image 10.png";
import nicole from "../images/officers/image 11.png";
import lydia from "../images/officers/image 12.png";
import divya from "../images/officers/image 13.jpeg";
import christinek from "../images/officers/image 14.jpeg";
import margaret from "../images/officers/image 15.png";
import esha from "../images/officers/image 16.png";
import megan from "../images/officers/image 17.png";

import footer from "../images/footer.png";
import dot from "../images/dot-line.png";

import facebook from "../images/foot-fb.png";
import insta from "../images/foot-insta.png";
import twitter from "../images/foot-twitter.png";

export default class about extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{ image: hannah, names: "HANNAH WANG", position: "President", info: "Materials Science & Engineering", year: "4th Year" },
            { image: christine, names: "CHRISTINE YANG", position: "External Vice President", info: "Mechanical Engineering", year: "4th Year" },
            { image: luming, names: "LUMING CAO", position: "Internal Vice President", info: "Mechanical Engineering", year: "3rd Year" },
            { image: grace, names: "GRACE KWAK", position: "Advocacy Director", info: "[enter]", year: "[enter]" },
            { image: karen, names: "KAREN SU", position: "EWI External Co-Chair", info: "Mechanical Engineering", year: "3rd Year" },
            { image: diya, names: "DIYA KAPUR", position: "EWI Internal Co-Chair", info: "[enter]", year: "[enter]" },
            { image: lily, names: "LILY TEBB", position: "Historian", info: "[enter]", year: "[enter]" },
            { image: hannahc, names: "HANNAH COX", position: "Outreach External Director", info: "[enter]", year: "[enter]" },
            { image: michelle, names: "MICHELLE BOGUSLAVSKY", position: "Outreach Internal Director", info: "[enter]", year: "[enter]" },
            { image: lilyg, names: "LILY GLANTZ", position: "Publicity", info: "[enter]", year: "[enter]" },
            { image: nicole, names: "NICOLE CRISCIONE", position: "Mentorship Director", info: "[enter]", year: "[enter]" },
            { image: divya, names: "DIVYA PONNIAH", position: "Recruitment & Alumni Relations Director", info: "Computer Science", year: "4th Year" },
            { image: christinek, names: "CHRISTINE KIM", position: "Student Relations Director", info: "Computer Science", year: "3rd Year" },
            { image: margaret, names: "MARGARET CAPETZ", position: "Technical External Director", info: "Computer Science", year: "2nd Year" },
            { image: megan, names: "MEGAN GO", position: "Webmaster", info: "Computer Science", year: "2nd Year" },
            { image: esha, names: "ESHA SIDHU", position: "Treasurer", info: "[enter]", year: "2nd Year" },
            { image: lydia, names: "LYDIA XU", position: "Secretary", info: "[enter]", year: "[enter]" }]
        }
    }

    tempHandler = () => {
        window.scrollTo({
            top: 0
        })
    }

    renderCards = (card, index) => {
        return (
            <div className="flex-board-image" style={{ minWidth: 190, maxWidth: 190 }}>
                <img style={{ height: 200, width: 160, padding: 0 }} src={card.image} />
                <div className="event_caption" style={{ paddingBottom: 0, paddingLeft: 0 }}>{card.names}</div>
                <p className="card_info" style={{ width: 147 }}>{card.position}</p>
                <p className="card_info" style={{ fontSize: 14 }}>{card.info}</p>
                <p className="card_info" style={{ fontSize: 14 }}>{card.year}</p>
            </div>
        );
    }

    render() {
        return (
            <div >
                <Helmet>
                    <title> SWE UCLA | About</title>
                </Helmet>


                <div class="flex-container" style={{ paddingTop: 0 }}>
                    <div class="flex-child-left" style={{ minWidth: 600, paddingTop: 0, paddingLeft: 0 }}>
                        <img className="front_image" src={sweet_double} style={{ height: 600, width: 600 }} />
                    </div>

                    <div class="flex-child-left" style={{ minWidth: 400 }}>
                        <img style={{ width: 430, height: 380, paddingLeft: 40, paddingTop: 20 }} src={ilooklikeanengineer} />
                        <div className="event_caption" style={{ paddingBottom: 0, paddingLeft: 40 }}>OUR MISSION</div>
                        <div className="event_caption_body" style={{ paddingTop: 20, maxWidth: 470, paddingLeft: 40 }}>SWE-UCLA aims to bring professional development opportunities to UCLA while advocating for the creation of an equal platform for all in engineering.</div>
                    </div>
                </div>


                <div class="flex-container" style={{ paddingTop: 50 }}>
                    <div class="flex-child-left" style={{ minWidth: 400 }}>
                        <div className="side_header" style={{ fontSize: 34 }}>
                            Meet Our Board Members
                        </div>
                    </div>

                    <div class="flex-child-left" style={{ minWidth: 400 }}></div>
                </div>


                <div class="flex-container" style={{ paddingTop: 0 }}>
                    <div class="flex-container" style={{ paddingTop: 0, maxWidth: 1250, paddingLeft: 0 }}>
                        <div className="officer_grid" style={{ paddingTop: 30, paddingLeft: 40 }}>{this.state.cards.map(this.renderCards)}</div>
                    </div>
                </div>



                <div class="flex-container" style={{ paddingTop: 50 }}>
                    <div class="flex-child-left" style={{ minWidth: 400 }}>
                        <div className="side_header" style={{ fontSize: 34 }}>
                            Join SWE National
                        </div>
                    </div>

                    <div class="flex-child-left" style={{ minWidth: 400 }}></div>
                </div>


                <div class="flex-container" style={{ paddingTop: 0 }}>
                    <div class="flex-child-left" style={{ minWidth: 600, paddingTop: 70, paddingLeft: 0 }}>
                        <img className="front_image" src={national} style={{ height: 360, width: 600 }} />
                        <div className="event_caption_body" style={{ paddingTop: 40, maxWidth: 470, paddingLeft: 90, margin: "auto" }}>National members get discounts, special opportunities, and scholarships. Join today!</div>
                    </div>

                    <div class="flex-child-left" style={{ minWidth: 400 }}>
                        <div className="event_caption" style={{ paddingLeft: 40, paddingBottom: 10 }}>1. Go to the national SWE website</div>
                        <a href="www.swe.org" style={{ fontWeight: "normal", paddingLeft: 65, fontSize: 19 }}>www.swe.org </a>
                        <div className="event_caption_body" style={{ paddingTop: 10, maxWidth: 470, paddingLeft: 65, paddingBottom: 10 }}>Hover on membership</div>
                        <div className="event_caption_body" style={{ paddingTop: 0, maxWidth: 470, paddingLeft: 65, paddingBottom: 0 }}>Click Join/Renew</div>

                        <div className="event_caption" style={{ paddingLeft: 40, paddingBottom: 10 }}>2. Choose a package</div>
                        <div className="event_caption_body" style={{ paddingTop: 10, maxWidth: 470, paddingLeft: 65, paddingBottom: 10, maxWidth: 400 }}>New Collegiate Membership in SWE: $20 (1 year membership)</div>
                        <div className="event_caption_body" style={{ paddingTop: 0, maxWidth: 470, paddingLeft: 65, maxWidth: 400, paddingBottom: 0 }}>Collegiate to Career Membership in SWE: $50 (Entire collegiate career membership!)</div>

                        <div className="event_caption" style={{ paddingLeft: 40, paddingBottom: 10 }}>3. Confirm your registration</div>
                        <div className="event_caption_body" style={{ paddingTop: 10, maxWidth: 470, paddingLeft: 65, paddingBottom: 10, maxWidth: 400 }}>Confirm your registration with our SWE secretary.</div>
                        <div className="event_caption_body" style={{ paddingTop: 0, maxWidth: 470, paddingLeft: 65, maxWidth: 400 }}>Email the SWE Secretary at secretary.swe.ucla@gmail.com to confirm your registration (please attach a copy of your receipt)</div>
                    </div>
                </div>

                {/*<div>
                    <img className="blob" src={blob} />
                    <p className="big_heading" style={{ height: 543, left: 120, top: 90, fontSize: 120, width: 650 }}> You're in for something SWE-et.</p>
                </div>*/}
                {/*<div>
                    
                    <p className="subtitle" style={{ left: 850, top: 580, fontWeight: "bold" }}>OUR MISSION</p>
                    <p className="subtitle" style={{ height: 90, top: 620, left: 850 }}>SWE-UCLA aims to bring professional development opportunities to UCLA while advocating for the creation of an equal platform for all in engineering.</p>
                </div>*/}
                {/*<div>
                    <div className="officer_grid" style={{ paddingTop: 150, left: 120 }}>{this.state.cards.map(this.renderCards)}</div>
                </div>*/}

                <div>

                    {/*<div>
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
                    </div>*/}
                </div>
                {/*<div>
                    <img src={footer} className="committee_event_pics" style={{ position: "absolute", left: 0, width: 1440, top: 2900, paddingBottom: 0 }} />
                    <img src={dot} style={{ position: "absolute", left: 120, top: 2950, width: 2, height: 200 }} />
                    <a href="#about-us" style={{ position: "absolute", top: 2940, left: 170, width: 120 }} onClick={() => { this.tempHandler() }} class="foot-button">About Us</a>
                    <a href="#involved" style={{ position: "absolute", top: 2990, left: 170, width: 150 }} onClick={() => { this.tempHandler() }} class="foot-button">Get Involved</a>
                    <a href="#events" style={{ position: "absolute", top: 3040, left: 155, width: 120 }} onClick={() => { this.tempHandler() }} class="foot-button">Events</a>
                    <a href="#sponsors" style={{ position: "absolute", top: 3090, left: 170, width: 120 }} onClick={() => { this.tempHandler() }} class="foot-button">Sponsors</a>
                    <a href="https://www.facebook.com/swe.ucla"><img src={facebook} style={{ left: 500 }} /></a>
                    <a href="https://www.instagram.com/swe.ucla"><img src={insta} style={{ height: 110, width: 105, top: 3000, position: "absolute", left: 650 }} /></a>
                    <a href="https://twitter.com/swe_ucla?lang=en"><img src={twitter} style={{ height: 110, width: 105, top: 3000, position: "absolute", left: 800 }} /></a>
                    <a href="#involved" style={{ position: "absolute", top: 2950, left: 1050, width: 200 }} class="foot-button">Email us at swe@seas.ucla.edu</a>
                    <a href="#involved" style={{ position: "absolute", top: 3050, left: 1010, width: 300 }} class="foot-button">DM us on Facebook for quick inquiries</a>
                </div>*/}
            </div>
        )
    }
}