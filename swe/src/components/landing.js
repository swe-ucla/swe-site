import React from "react";
import "../styles/layout.css";
import frontimage from "../images/frontimage.png";
import arrow from "../images/arrow.png";
import eng6 from "../images/eng6.jpg";
import ewi from "../images/ewi.jpg";
import wow from "../images/wow.jpg";
import blue from "../images/blue-rect.jpg";

export default class landing extends React.Component {
    render() {
      return (
        <div className="body">
            <div style={{alignItems:"center"}}>
                <img className="front_image" src={frontimage}/>
                <div className="big_heading">
                    Aspire. Advance. Achieve.
                </div>
                <div className="subtitle">
                    Welcome to SWE at UCLA. SWE-UCLA aims to promote diversity and professional development opportunities to the UCLA engineering community.
                </div>
            </div>
            <div>
                <img className="arrow" src={arrow}/>
            </div>
            <div className="body">
                <p className="next_header">
                    Are You Ready to Get Involved?
                </p>
                <div>
                    <img className="pics" style={{left: 138, top: 837}} src={blue}/>
                    <img className="pics" src={eng6}/>
                    <p className="subtitle" style={{left: 120, top: 1200, width: 351}}>
                        Improve your professional and technical skills, and learn about how you can make an impact on diversity in engineering at UCLA and beyond.
                    </p>
                    <a href = '#events' className="pic_buttons">Learn About SWE Events</a>
                </div>
                <div>
                    <img className="pics" style={{left: 575, top: 837}} src={blue}/>
                    <img className="pics" style={{left: 557}} src={wow}/>  
                    <p className="subtitle" style={{left: 557, top: 1200, width: 351}}>
                        Get involved with SWE-UCLA by joining a committee, where you will develop important event planning, technical, and leadership skills while making life long friendships.
                    </p>
                    <a href = "#involved" className="pic_buttons">Learn About SWE Committees</a>
                </div>
                <div>
                    <img className="pics" style={{left: 1013, top: 837}} src={blue}/>
                    <img className="pics" style={{left: 995}} src={ewi}/>
                    <p className="subtitle" style={{left: 995, top: 1200, width: 351}}>
                        Are you interested in sponsoring SWE-UCLA? Find out how you can help us achieve our goal to empower those pursuing engineering to reach their full potential.
                    </p>
                    <a href = "#sponsors" className="pic_buttons">Learn About Sponsorships</a>
                </div>
            </div>
        </div>
      )
    }
}