import React from "react";
import Mailchimp from "react-mailchimp-form";
import "../styles/layout.css";
import { Helmet } from 'react-helmet';
import frontimage from "../images/frontimage.png";
import arrow from "../images/arrow.png";
import eng6 from "../images/eng6.jpg";
import ewi from "../images/ewi.jpg";
import wow from "../images/wow.jpg";
import blue from "../images/blue-rect.jpg";
import zoom from "../images/zoom.png";
import fb from "../images/fb.png";
import loop from "../images/loopdeloop.png";
import plane from "../images/plane.png";
import youtube from "../images/officers/youtube.png";

import footer from "../images/footer.png";
import dot from "../images/dot-line.png";

import facebook from "../images/foot-fb.png";
import insta from "../images/foot-insta.png";
import twitter from "../images/foot-twitter.png";

export default class landing extends React.Component {
	tempHandler = () => {
        window.scrollTo({
            top: 0
        })
	}

    render() {
      return (
        <div className="body">
			<Helmet>
                    <title> SWE UCLA | Home</title>
                </Helmet>
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
                    <p className="subtitle" style={{left: 120, top: 1200, width: 351, lineHeight:1.4}}>
                        Improve your professional and technical skills by attending our workshops and panels, and learn about how you can make an impact on diversity in engineering at UCLA and beyond.
                    </p>
                    <a href = '#events' className="pic_buttons" onClick={() => {this.tempHandler()}}>Learn About Our Events</a>
                </div>
                <div>
                    <img className="pics" style={{left: 570, top: 837}} src={blue}/>
                    <img className="pics" style={{left: 552}} src={wow}/>
                    <p className="subtitle" style={{left: 552, top: 1200, width: 351, lineHeight:1.4}}>
                        Get involved with SWE-UCLA by joining a committee, where you will develop important event planning, technical, and leadership skills while making life long friendships.
                    </p>
                    <a href = "#involved" className="pic_buttons" style={{left:552}} onClick={() => {this.tempHandler()}}>Learn About Our Committees</a>
                </div>
                <div>
                    <img className="pics" style={{left: 1003, top: 837}} src={blue}/>
                    <img className="pics" style={{left: 985}} src={ewi}/>
                    <p className="subtitle" style={{left: 985, top: 1200, width: 351, lineHeight:1.4}}>
                        Are you interested in sponsoring SWE-UCLA? Find out how you can help us achieve our goal to empower those pursuing engineering to reach their full potential.
                    </p>
                    <a href = "#sponsors" className="pic_buttons" style={{left:985}} onClick={() => {this.tempHandler()}}>Learn About Our Sponsorships</a>
                </div>
                <div className="body">
					<div className="event_caption">
                	<div style={{position: "absolute",fontSize:34, top:1540, left: 120, fontWeight:"bold"}}> Upcoming Event</div>
                	<div style={{color: "#933DD7", position:"absolute",fontSize:38, fontWeight:"bold", top:1620, width: 300, left: 120}}> Fall GM </div>
                	<div style= {{top:1690, lineHeight:1.4, width:550, position:"absolute", left:120}}> SWE's General Meeting for Fall Quarter will be Thursday of Week 1 (9/30) from 6-8PM in Young Hall CS24. Come to get to know other people in SWE and hear about what our organization has accomplished this past year and what we're planning for Fall Quarter! </div>
                	<div className="calendarthing" style={{top:1850, height: 20, backgroundColor:"#933DD7"}}></div>
                	<div className="calendarthing" style={{top:1850}}>
                    	<p style={{fontSize:18, fontWeight:"bold", lineHeight:0, display:"flex", justifyContent:"center", color:"white"}}>SEP 30</p>
                    	<p style={{fontSize:19, fontWeight:"bold", lineHeight:0.7, display:"flex", justifyContent:"center", paddingTop:10}}>6 PM </p>
                	</div>
                	<a href = "https://fb.me/e/YAF6QJ8M"><img src={fb} style={{height:85, width: 85, top:1850, position:"absolute", left:225}}/></a>
                	<a href="https://www.youtube.com/watch?v=fR2adYWwMhU"><img src={zoom} style={{height:85, width: 85, top:1850, position:"absolute", left:330}}/></a>
              		</div>
                </div>
				<div className="body">
					<div style={{position: "absolute",fontSize:34, top:1530, left: 840, fontWeight:"bold"}}> Join Our Mailing List</div>
					<div style= {{top:1610, lineHeight:1.4, width:550, position:"absolute", left:840, fontSize:19}}>Never miss out on SWE events, announcements, and job/internship opportunities! </div>
					<img src={loop} style={{position:"absolute",left:760, height: 280, width: 300, top: 1620}}/>
					<img src={plane} style={{position:"absolute",left:1040, height: 200, width: 200, top: 1745}}/>
					<div>
					<a href = "https://tinyurl.com/sweucla-subscribe" className="pic_buttons" style={{ top: 1690, left:840}} onClick={() => {this.tempHandler()}}>Join Our Mailing List</a>
			
					</div>
				</div>
				<div>
                	<img src={footer} className="committee_event_pics" style={{position:"absolute", left:0, width:1440, top:2050, bottom:0}}/>
                	<img src={dot} style={{position:"absolute", left:120, top:2100, width:2, height:200}}/>
                	<a href="#about-us" style={{position:"absolute", top:2090, left:170, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">About Us</a>
                	<a href="#involved" style={{position:"absolute", top:2140, left:170, width:150}} onClick={() => {this.tempHandler()}} class="foot-button">Get Involved</a>
                	<a href="#events" style={{position:"absolute", top:2190, left:155, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">Events</a>
                	<a href="#sponsors" style={{position:"absolute", top:2240, left:170, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">Sponsors</a>

                	<a href = "https://www.facebook.com/swe.ucla"><img src={facebook} style={{height:110, width: 105, top:2150, position:"absolute", left:500}}/></a>
            		 <a href = "https://www.instagram.com/swe.ucla"><img src={insta} style={{height:110, width: 105, top:2150, position:"absolute", left:650}}/></a>
               		 <a href = "https://twitter.com/swe_ucla?lang=en"><img src={twitter} style={{height:110, width: 105, top:2150, position:"absolute", left:800}}/></a>

                	<a href="#involved" style={{position:"absolute", top:2100, left:1050, width:200}} class="foot-button">Email us at swe@seas.ucla.edu</a>
                	<a href="#involved" style={{position:"absolute", top:2200, left:1010, width:300}} class="foot-button">DM us on Facebook for quick inquiries</a>
            	</div>
            </div>
        </div>
      )
    }
}