import React from "react";
import "../styles/layout.css";
import { Helmet } from 'react-helmet';
import ilooklikeanengineer from "../images/ilooklikeanengineer.png";
import national from "../images/swe_national.png";
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
            { image: christine, names: "CHRISTINE YANG", position: "External Vice President", info: "Mechanical Engineering", year: "3rd Year" },
            { image: luming, names: "LUMING CAO", position: "Internal Vice President", info: "Mechanical Engineering", year: "3rd Year" },
            { image: grace, names: "GRACE KWAK", position: "Advocacy Director", info: "Electrical Engineering", year: "3rd Year" },
            { image: karen, names: "KAREN SU", position: "EWI External Co-Chair", info: "Mechanical Engineering", year: "3rd Year" },
            { image: diya, names: "DIYA KAPUR", position: "EWI Internal Co-Chair", info: "Chemical Engineering", year: "3rd Tear" },
            { image: lily, names: "LILY TEBB", position: "Historian", info: "", year: "" },
            { image: hannahc, names: "HANNAH COX", position: "Outreach External Director", info: "Biological Engineering", year: "3rd Year" },
            { image: michelle, names: "MICHELLE BOGUSLAVSKY", position: "Outreach Internal Director", info: "Mechanical Engineering", year: "3rd Year" },
            { image: lilyg, names: "LILY GLANTZ", position: "Publicity", info: "", year: "" },
            { image: nicole, names: "NICOLE CRISCIONE", position: "Mentorship Director", info: "Mechanical Engineering", year: "3rd Year" },
            { image: divya, names: "DIVYA PONNIAH", position: "Recruitment & Alumni Relations Director", info: "Computer Science", year: "4th Year" },
            { image: christinek, names: "CHRISTINE KIM", position: "Student Relations Director", info: "Computer Science", year: "3rd Year" },
            { image: margaret, names: "MARGARET CAPETZ", position: "Technical External Director", info: "Computer Science", year: "2nd Year" },
            { image: megan, names: "MEGAN GO", position: "Webmaster", info: "Computer Science", year: "2nd Year" },
            { image: esha, names: "ESHA SIDHU", position: "Treasurer", info: "Computer Science", year: "2nd Year" },
            { image: lydia, names: "LYDIA XU", position: "Secretary", info: "Computer Science", year: "4th Year" }]
        }
    }

    tempHandler = () => {
        window.scrollTo({
            top: 0
        })
    }

    renderCards = (card, index) => {
        return (
            <div className="flex-board-image" style={{ minWidth: 190, maxWidth: 190, alignContent: "center" }}>
                <img style={{ height: 200, width: 160 }} src={card.image} />
                <p className="event_caption" style={{ width: 147 }}>{card.names}</p>
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
                        <img className="front_image" src={sweet_double} style={{ height: 600, width: 600 }} alt="you're in for something swe-et" />
                    </div>

                    <div class="flex-child-left" style={{ minWidth: 400 }}>
                        <img style={{ width: 430, height: 380, paddingLeft: 40, paddingTop: 20 }} src={ilooklikeanengineer} alt="I look like an engineer" />
                        <div className="event_caption" style={{ paddingBottom: 0, paddingLeft: 40 }}>OUR MISSION</div>
                        <div className="event_caption_body" style={{ paddingTop: 20, maxWidth: 470, paddingLeft: 40 }}>SWE-UCLA aims to bring professional development opportunities to UCLA while advocating for the creation of an equal platform for all in engineering.</div>
                    </div>
                </div>

                <div class="flex-container" style={{ paddingTop: 50, marginLeft: 20 }}>
                    <div className="side_header" style={{ fontSize: 34 }}>Meet Our Board Members</div>
                    <div className="officer_grid" style={{ paddingTop: 30, paddingLeft: 40 }}>{this.state.cards.map(this.renderCards)}</div>
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
                        <img className="front_image" src={national} style={{ height: 360, width: 600 }} alt="sweet national" />
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
            </div>
        )
    }
}