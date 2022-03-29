import React from "react";
import "../styles/layout.css";
import { Helmet } from 'react-helmet';
import zoom from "../images/zoom.png";
import fb from "../images/fb.png";
import ewi from "../images/ewievent.png";
import qwer from "../images/qwer.png";
import ig from "../images/ig.png";
import gear from "../images/gear.png";
import wow from "../images/wow-gs.png";
import epec from "../images/epec.png";
import wesp from "../images/wesp2.png";

import footer from "../images/footer.png";
import dot from "../images/dot-line.png";

import facebook from "../images/foot-fb.png";
import insta from "../images/foot-insta.png";
import twitter from "../images/foot-twitter.png";

export default class events extends React.Component {
    tempHandler = () => {
        window.scrollTo({
            top: 0
        })
    }

    render() {
      return (
          <div className="body">
              <Helmet>
                    <title> SWE UCLA | Events</title>
                </Helmet>
              <p className="next_header" style={{top: 120, left: 0, paddingLeft: 320, paddingRight: 320, fontSize:45, lineHeight:1.3, width:800}}>
                  Our events are open to anyone and any major. Hope to see you there!
              </p>
              <div className="event_caption">
                <div style={{paddingTop:200, width: 300, position:"absolute", left:120}}> UPCOMING EVENT</div>
                <div style={{color: "#933DD7", position:"absolute",fontSize:38, fontWeight:"bold", paddingTop:250, width: 300, left: 120}}> EWI 2022 </div>
                <div style= {{paddingTop:305, lineHeight:1.4, width:550, position:"absolute", left:120}}> Seeking to land that much desired internship or job position? Come join us at SWE’s 45th annual Evening with Industry and network with various companies to achieve your dreams by landing an internship or full-time position. It is a 3 part networking event starting with casual networking, continuing with a roundtable with industry representatives from a company of your choice, and ending with access to a private career fair with various companies! Everyone is welcome, and it will be held on Thursday, January 20th from 5:30-8:30 PM PT on Zoom!</div>
                <iframe src="https://www.google.com/calendar/embed?src=m980q306mg3rfvuh7jhm43fr5s%40group.calendar.google.com&amp;ctz=America/Los_Angeles" className="gcal-events"></iframe>
                <div className="calendarthing" style={{top:720, height: 20, backgroundColor:"#933DD7"}}></div>
                <div className="calendarthing" style={{top:720}}>
                    <p style={{fontSize:18, fontWeight:"bold", lineHeight:0, display:"flex", justifyContent:"center", color:"white"}}>JAN 20</p>
                    <p style={{fontSize:15, fontWeight:"bold", lineHeight:0.7, display:"flex", justifyContent:"center", paddingTop:10}}>5:30 PM </p>
                </div>
                <a href = "https://www.facebook.com/uclaswe"><img src={fb} style={{height:60, width: 60, paddingTop: 580, position:"absolute", left:225}}/></a>
                <a href="https://tinyurl.com/swe-gen2020"><img src={zoom} style={{height:60, width: 60, paddingTop: 580, position:"absolute", left:310}}/></a>
              </div>
              <div>
                  <p style={{position: "absolute",fontSize:34, top:810, left: 120, fontWeight:"bold"}}>Special Events</p>
                  <div className="special_events">
                      <img src={ewi} className="special_event_pics"/>
                      <p style={{position:"absolute", fontWeight:"bold", left: 640, top:60, width:"100%"}}>EVENING WITH INDUSTRY</p>
                      <p style={{position:"absolute", left: 640, top:90, width: "100%"}}>Location: Virtual</p>
                      <p style={{position:"absolute", left: 640, top:120, width: "100%"}}>Evening with Industry (EWI) is one of the largest student-run networking events at UCLA attracting around 40 companies and 300 students annually. The three part event includes a networking hour, dinner with a few company representatives, and a private career fair. We’re excited to announce that this year’s 44th Evening with Industry will be entirely virtual! </p>
                      <div className="calendarthing" style={{top:340, left: 640,  width:35, height: 5, backgroundColor:"#933DD7"}}></div>
                      <div className="calendarthing" style={{top:340, left:640, width:35, height:30}}>
                         <p style={{fontSize:10, fontWeight:"bold", left:640, lineHeight:0, display:"flex", justifyContent:"center", color:"white"}}>JAN 28</p>
                         <p style={{fontSize:10, fontWeight:"bold", left:640, lineHeight:0.7, display:"flex", justifyContent:"center", paddingTop:10}}>5:30PM </p>
                      </div>
                      <a href = "https://www.facebook.com/ucla.swe.ewi/"><img src={fb} style={{height:50, width: 50, position:"absolute", left:710, top: 340}}/></a>
                  </div>
                  <div className="special_events">
                      <img src={wesp} className="special_event_pics" style={{position:"absolute", left:560, top:300, width: 800, height: 550}}/>
                      <p style={{position:"absolute", fontWeight:"bold", left: 10, top:500, width:500}}>WOMEN IN ENGINEERING STAYOVER PROGRAM</p>
                      <p style={{position:"absolute", left: 10, top:535, width: 570}}>Location: Virtual</p>
                      <p style={{position:"absolute", left: 10, top:570, width: 570}}> Women in Engineering Stayover Program (WESP) hosts newly admitted female engineering students to show them all our school as to offer. This event includes tours of the engineering department, dinner with UCLA faculty, an exciting scavenger hunt, and much more! </p>
                      <div className="calendarthing" style={{top:770, left: 10,  width:35, height: 5, backgroundColor:"#933DD7"}}></div>
                      <div className="calendarthing" style={{top:770, left:10, width:35, height:30}}>
                         <p style={{fontSize:10, fontWeight:"bold", left:10, lineHeight:0, display:"flex", justifyContent:"center", color:"white"}}>TBD</p>
                         <p style={{fontSize:10, fontWeight:"bold", left:10, lineHeight:0.7, display:"flex", justifyContent:"center", paddingTop:10}}>TBD </p>
                      </div>
                      <a href = "https://www.facebook.com/ucla.swe.ewi"><img src={fb} style={{height:50, width: 50, position:"absolute", left:80, top: 770}}/></a>
                  </div>
                  <div className="special_events">
                      <img src={qwer} className="special_event_pics" style={{position:"absolute", top:950, width:450}}/>
                      <p style={{position:"absolute", fontWeight:"bold", left: 640, top:970, width:500}}>QWERHACKS</p>
                      <p style={{position:"absolute", left: 640, top:1005, width: 570}}>Location: Virtual</p>
                      <p style={{position:"absolute", left: 640, top:1040, width: 570}}>QWER Hacks is an LGBTQ+ inclusive virtual hackathon, with the goal of bringing more awareness and support for the queer community in STEM, complete with its own workshops series and mentors to provide attendees with invaluable technical insight.  </p>
                      <div className="calendarthing" style={{top:1210, left: 640,  width:50, height: 5, backgroundColor:"#933DD7"}}></div>
                      <div className="calendarthing" style={{top:1210, left:640, width:50, height:30}}>
                         <p style={{fontSize:10, fontWeight:"bold", left:640, lineHeight:0, display:"flex", justifyContent:"center", color:"white"}}>JAN 23-24</p>
                         <p style={{fontSize:10, fontWeight:"bold", left:640, lineHeight:0.7, display:"flex", justifyContent:"center", paddingTop:10}}>all day </p>
                      </div>
                      <a href = "https://www.facebook.com/qwerhacks"><img src={fb} style={{height:50, width: 50, position:"absolute", left:725, top: 1210}}/></a>
                      <a href = "https://www.instagram.com/qwerhacks/"><img src={ig} style={{height:56, width: 55, position:"absolute", left:790, top: 1207}}/></a>
                  </div>
                  <div className="special_events">
                      <img src={wow} className="special_event_pics" style={{position:"absolute", top:1300, left:640, width:550}}/>
                      <p style={{position:"absolute", fontWeight:"bold", left: 10, top:1460, width:500}}>WOW! THAT'S ENGINEERING DAY</p>
                      <p style={{position:"absolute", left: 10, top:1490, width: 570}}>Location: Virtual</p>
                      <p style={{position:"absolute", left: 10, top:1520, width: 570}}>WOW! That's Engineering Day is a collaboration with the Girl Scouts of LA to put on a day full of engineering activities, guest speakers, and presentations for around 150 participants.   </p>
                      <div className="calendarthing" style={{top:1660, left: 10,  width:35, height: 5, backgroundColor:"#933DD7"}}></div>
                      <div className="calendarthing" style={{top:1660, left:10, width:35, height:30}}>
                         <p style={{fontSize:10, fontWeight:"bold", left:10, lineHeight:0, display:"flex", justifyContent:"center", color:"white"}}>TBD</p>
                         <p style={{fontSize:10, fontWeight:"bold", left:10, lineHeight:0.7, display:"flex", justifyContent:"center", paddingTop:10}}>TBD</p>
                      </div>
                      <a href = "https://www.facebook.com/events/126162108592218/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%7D"><img src={fb} style={{height:50, width: 50, position:"absolute", left:80, top: 1660}}/></a>
                  </div>
                  <img src={gear} style={{position:"absolute", left:1200, top: 2250, height:60, width:65}}/>
                  <div className="special_events">
                      <img src={epec} className="special_event_pics" style={{position:"absolute", top:1700, left:-80, width: 700, height:460}}/>
                      <p style={{position:"absolute", fontWeight:"bold", left: 640, top:1810, width:500}}>ENGINEERS FOR PROFESSIONAL EQUALITY CONFERENCE</p>
                      <p style={{position:"absolute", left: 640, top:1875, width: 570}}>Location: Virtual</p>
                      <p style={{position:"absolute", left: 640, top:1910, width: 570}}>The Engineers for Professional Inclusion Conference is a conference highlighting diversity across the engineering workforce. This year, we will further embrace the intersectionality of individuals in STEM through hosting a keynote speaker and panel of professionals who will speak on their experiences in academia and the workforce.  </p>
                      <div className="calendarthing" style={{top:2140, left: 640,  width:35, height: 5, backgroundColor:"#933DD7"}}></div>
                      <div className="calendarthing" style={{top:2140, left:640, width:35, height:30}}>
                         <p style={{fontSize:10, fontWeight:"bold", left:640, lineHeight:0, display:"flex", justifyContent:"center", color:"white"}}>TBD</p>
                         <p style={{fontSize:10, fontWeight:"bold", left:640, lineHeight:0.7, display:"flex", justifyContent:"center", paddingTop:10}}>TBD </p>
                      </div>
                      <a href = "https://www.facebook.com/uclaswe"><img src={fb} style={{height:50, width: 50, position:"absolute", left:710, top: 2140}}/></a>
                  </div>
              </div>
              <div>
                	<img src={footer} className="committee_event_pics" style={{position:"absolute", left:0, width:1440, top:3200, paddingBottom:0}}/>
                	<img src={dot} style={{position:"absolute", left:120, top:3250, width:2, height:200}}/>
                	<a href="#about-us" style={{position:"absolute", top:3240, left:170, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">About Us</a>
                	<a href="#involved" style={{position:"absolute", top:3290, left:170, width:150}} onClick={() => {this.tempHandler()}} class="foot-button">Get Involved</a>
                	<a href="#events" style={{position:"absolute", top:3340, left:155, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">Events</a>
                	<a href="#sponsors" style={{position:"absolute", top:3390, left:170, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">Sponsors</a>

                	<a href = "https://www.facebook.com/swe.ucla"><img src={facebook} style={{height:110, width: 105, top:3300, position:"absolute", left:500}}/></a>
            		 <a href = "https://www.instagram.com/swe.ucla"><img src={insta} style={{height:110, width: 105, top:3300, position:"absolute", left:650}}/></a>
               		 <a href = "https://twitter.com/swe_ucla?lang=en"><img src={twitter} style={{height:110, width: 105, top:3300, position:"absolute", left:800}}/></a>

                	<a href="#involved" style={{position:"absolute", top:3250, left:1050, width:200}} class="foot-button">Email us at swe@seas.ucla.edu</a>
                	<a href="#involved" style={{position:"absolute", top:3350, left:1010, width:300}} class="foot-button">DM us on Facebook for quick inquiries</a>
            	</div>
          </div>
      )
    }
}