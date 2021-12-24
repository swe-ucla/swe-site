import React from "react";
import "../styles/layout.css";
import { Helmet } from 'react-helmet';

import committee from "../images/committee-pictures.png";
import adv from "../images/advocacy.jpg";
// import ewi from "../images/ewi-comm.JPG";
import ewi from "../images/int.jpg";
import int from "../images/int.jpg";
import mentorship from "../images/mentorship.jpg";
import wesp from "../images/wesp.jpg";
import blob from "../images/family-blob.png";
import family from "../images/family-image.png";
import blueCircle from "../images/bluecircle.png";
import blueGear from "../images/blue-gear.png";
import purpleGear from "../images/purple-gear.png";
import greyCircle from "../images/greycircle.png";
import footer from "../images/footer.png";
import dot from "../images/dot-line.png";

import fb from "../images/foot-fb.png";
import insta from "../images/foot-insta.png";
import twitter from "../images/foot-twitter.png";
import dev from "../images/dev.jpg";

export default class involved extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rightText: "visible_text",
            stackText: "collapse_text"
        };
    }

    handleResize = e =>{
        const w = window.innerWidth;
        if(w <= 1215){
            const rightText = "collapse_text";
            const stackText = "visible_text";
            this.setState(prevState=>{
                return{
                    rightText,
                    stackText
                };
            });
        }
        else{
            const rightText = "visible_text";
            const stackText = "collapse_text";
            this.setState(prevState=>{
                return{
                    rightText,
                    stackText
                };
            });
        }
    }

    componentDidMount(){
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
      }

    advocacyHandler = () => {
        window.scrollTo({
            top: 850
        })
   }

    devHandler = () => {
        window.scrollTo({
            top: 1300
        })
    }

    ewiHandler = () => {
        window.scrollTo({
            top: 1750
        })
    }

    internalHandler = () => {
        window.scrollTo({
            top: 2200
        })
    }

    mentorshipHandler = () => {
        window.scrollTo({
            top: 2650
        })
    }

    technicalHandler = () => {
        window.scrollTo({
            top: 3100
        })
    }

    gradHandler = () => {
        window.scrollTo({
            top: 3550
        })
    }

    tempHandler = () => {
        window.scrollTo({
            top: 0
        })
    }

    render() {
      return (
        <div style={{display: "inline-block", paddingLeft: "10vw", paddingRight: "2vw"}}>
            <Helmet>
                    <title> SWE UCLA | Get Involved</title>
                </Helmet>
            <div className="involved_header">
                <p>Get involved by joining a SWE family or a committee!</p>
            </div>
            <div className="event_flex" style={{marginTop: "70px"}}>
                <div className="involved_buttons">
                    <div style={{fontSize:30, fontWeight:"bold", width: 400}}> SWE Committees </div>
                    <div>
                        <button className="form_button" onClick={() => {this.advocacyHandler()}}>Advocacy</button>
                        <button style={{width: 200}} className="form_button" onClick={() => {this.ewiHandler()}}>Evening with Industry</button>
                    </div>
                    <div>
                        <button style={{width: 140}} className="form_button" onClick={() => {this.internalHandler()}}>Internal Affairs</button>
                        <button style={{width: 140}} className="form_button" onClick={() => {this.mentorshipHandler()}}>Mentorship</button>
                    </div>
                    <div>
                        <button className="form_button" onClick={() => {this.devHandler()}}>Dev Team</button>
                        <button style={{width: 120}} className="form_button" onClick={() => {this.technicalHandler()}}>Technical</button>
                        <button style={{width: 110}} className="form_button" onClick={() => {this.gradHandler()}}>Outreach</button>
                    </div>
                </div>
                <iframe src="https://www.google.com/calendar/embed?src=m980q306mg3rfvuh7jhm43fr5s%40group.calendar.google.com&amp;ctz=America/Los_Angeles" className="gcal-events"></iframe>
            </div>

            <p style={{fontWeight:"bold", width: "100%"}}>ADVOCACY</p>
            <div className="committee_events">
                <img src={adv} className="committee_event_pics"/>
                <p className={this.state.rightText} style={{float: "right", width: "50vw", fontSize: 18, marginTop: "15px"}}>The Advocacy Committee advocates for a shift in mindset regarding STEM diversity within the UCLA community and beyond. We work towards promoting and inspiring engineers from underrepresented backgrounds to be empowered and break barriers within their field.<br/><br/>The Engineers for Professional Inclusion Conference is SWE-UCLA’s flagship conference highlighting diversity across the engineering workforce, organized by the Advocacy Committee. This year, we are hoping to further embrace the intersectionality of individuals in STEM through hosting a keynote speaker and panel of professionals who will speak on their experiences in academia and the workforce.</p>
                <p className={this.state.stackText}>The Advocacy Committee advocates for a shift in mindset regarding STEM diversity within the UCLA community and beyond. We work towards promoting and inspiring engineers from underrepresented backgrounds to be empowered and break barriers within their field.</p>
                <p className={this.state.stackText}>The Engineers for Professional Inclusion Conference is SWE-UCLA’s flagship conference highlighting diversity across the engineering workforce, organized by the Advocacy Committee. This year, we are hoping to further embrace the intersectionality of individuals in STEM through hosting a keynote speaker and panel of professionals who will speak on their experiences in academia and the workforce.</p>
            </div>
            
            <p style={{fontWeight:"bold", width: "100%"}}>DEV TEAM</p>
            <div className="committee_events">
                <img src={dev} className="committee_event_pics"/>
                <p className={this.state.rightText} style={{float: "right", width: "50vw", fontSize: 18, marginTop: "15px"}}>SWE's Dev Team works on redesigning and updating the SWE UCLA website, while also developing other projects to enhance our team's technical skills. This new website update was our big project for fall!<br/><br/>We are currently working on developing a members and EWI portal for SWE members to keep track of their events and sign up for EWI and an interactive component for members to ask questions.</p>
                <p className={this.state.stackText}>SWE's Dev Team works on redesigning and updating the SWE UCLA website, while also developing other projects to enhance our team's technical skills. This new website update was our big project for fall!</p>
                <p className={this.state.stackText}>We are currently working on developing a members and EWI portal for SWE members to keep track of their events and sign up for EWI and an interactive component for members to ask questions.</p>
            </div>

            <p style={{fontWeight:"bold", left: 140, width:"100%"}}>EVENING WITH INDUSTRY</p>
            <div className="committee_events">
                <img src={ewi} className="committee_event_pics"/>
                <p className={this.state.rightText} style={{float: "right", width: "50vw", fontSize: 18, marginTop: "15px"}}>Evening with Industry (EWI) is one of the largest student-run networking events at UCLA attracting around 40 companies and 300 students annually. The three part event includes a networking hour, dinner with a few company representatives, and a private career fair.<br/><br/>We’re excited to announce that this year’s 44th Evening with Industry will be entirely virtual! The committee will work together to create this virtual environment that fosters a casual conversation between students and companies. Additionally, the committee will plan and host professional development workshops to help UCLA engineering students put their best foot forward!</p>
                <p className={this.state.stackText}>Evening with Industry (EWI) is one of the largest student-run networking events at UCLA attracting around 40 companies and 300 students annually. The three part event includes a networking hour, dinner with a few company representatives, and a private career fair.</p>
                <p className={this.state.stackText}>We’re excited to announce that this year’s 44th Evening with Industry will be entirely virtual! The committee will work together to create this virtual environment that fosters a casual conversation between students and companies. Additionally, the committee will plan and host professional development workshops to help UCLA engineering students put their best foot forward!</p>
            </div>

            <p style={{fontWeight:"bold", left: 140, width:"100%"}}>INTERNAL AFFAIRS</p>
            <div className="committee_events">
                <img src={int} className="committee_event_pics"/>
                <p className={this.state.rightText} style={{float: "right", width: "50vw", fontSize: 18, marginTop: "15px"}}>The Internal Affairs Committee works to strengthen the bonds between SWE members by hosting various inter-committee and member socials and contributes to our growing community of empowerment.<br/><br/>We plan SWE general events, including Dinner with Professors and LinkedIn headshots, as well as inter-committee social events, such as yoga socials, movie premiers, and paint nights.</p>
                <p className={this.state.stackText}>The Internal Affairs Committee works to strengthen the bonds between SWE members by hosting various inter-committee and member socials and contributes to our growing community of empowerment.</p>
                <p className={this.state.stackText}>We plan SWE general events, including Dinner with Professors and LinkedIn headshots, as well as inter-committee social events, such as yoga socials, movie premiers, and paint nights.</p>

            </div>

            <p style={{fontWeight:"bold", left: 140, width:"100%"}}>MENTORSHIP</p>
            <div className="committee_events">
                <img src={mentorship} className="committee_event_pics"/>
                <p className={this.state.rightText} style={{float: "right", width: "50vw", fontSize: 18, marginTop: "15px"}}>The Mentorship Committtee coordinates a variety of mentorship programs and events with the goal of connecting SWE members with each other as well as professional mentors in academia and industry!<br/><br/>This year, we will have mentorship programs to connect SWE members with upperclassmen mentors, graduate student mentors, and industry mentors. We will also host several professional, career and networking events and panels. </p>
                <p className={this.state.stackText}>The Mentorship Committtee coordinates a variety of mentorship programs and events with the goal of connecting SWE members with each other as well as professional mentors in academia and industry!</p>
                <p className={this.state.stackText}>This year, we will have mentorship programs to connect SWE members with upperclassmen mentors, graduate student mentors, and industry mentors. We will also host several professional, career and networking events and panels.</p>
            </div>

            <p style={{fontWeight:"bold", left: 140, width:"100%"}}>TECHNICAL</p>
            <div className="committee_events">
                <img src={committee} className="committee_event_pics"/>
                <p className={this.state.rightText} style={{float: "right", width: "50vw", fontSize: 18, marginTop: "15px"}}>SWE-UCLA Technical Committee aims to provide people more opportunities to develop technical skills while feeling supported throughout their learning.<br/><br/>We plan and host workshops to teach important tech industry skills (e.g. how to use common industry software, practice technical interview questions, discuss importance of engineering ethics). We also organize QWER Hacks (pronounced QUEER Hacks, but spelt more techy), an LGBTQ+ inclusive hackathon, with the goal of bringing more awareness and support for the queer community in STEM, complete with its own workshops series and mentors to provide attendees with invaluable technical insight. </p>
                <p className={this.state.stackText}>SWE-UCLA Technical Committee aims to provide people more opportunities to develop technical skills while feeling supported throughout their learning.</p>
                <p className={this.state.stackText}>We plan and host workshops to teach important tech industry skills (e.g. how to use common industry software, practice technical interview questions, discuss importance of engineering ethics). We also organize QWER Hacks (pronounced QUEER Hacks, but spelt more techy), an LGBTQ+ inclusive hackathon, with the goal of bringing more awareness and support for the queer community in STEM, complete with its own workshops series and mentors to provide attendees with invaluable technical insight. </p>
            </div>

            <p style={{fontWeight:"bold", left: 140, top:3550, width:"100%"}}>OUTREACH</p>
            <div className="committee_events">
                <img src={wesp} className="committee_event_pics"/>
                <p className={this.state.rightText} style={{float: "right", marginRight: "10px", width: "50vw", fontSize: 18, marginTop: "15px"}}>The Outreach committee works to expand and improve diversity in engineering through working with students, ages ranging from elementary school to high school. Our goal is to empower underrepresented minorities in the engineering field.<br/><br/>Every year, we host our flagship event, WOW! That's Engineering Day. Additionally, we hold the Women in Engineering Stayover Program(WESP) where we host newly admitted female engineering students to show them all our school as to offer. We also have other smaller events throughout the year! </p>
                <p className={this.state.stackText}>The Outreach committee works to expand and improve diversity in engineering through working with students, ages ranging from elementary school to high school. Our goal is to empower underrepresented minorities in the engineering field.</p>
                <p className={this.state.stackText}>Every year, we host our flagship event, WOW! That's Engineering Day. Additionally, we hold the Women in Engineering Stayover Program(WESP) where we host newly admitted female engineering students to show them all our school as to offer. We also have other smaller events throughout the year! </p>
            </div>


            {/* <div>
                <p style={{fontWeight:"bold", fontSize:38, left: 140, width:480}}>SWE FAMILIES</p>
                <img src={blob} style={{left:0, top: 4150, width:1350, height:500, paddingBottom:100}}/>
                <img src={family} style={{left:140, width:555, height:465}}/>
                <p style={{fontWeight:"bold", fontSize:32, left: 740, width:450}}>Finding a Home Within UCLA</p>
                <p style={{lineheight:1, fontSize:19, left: 740, width:415}}>SWE welcomes all ages, genders, and majors to participate in SWE Families, a program that matches SWE members together for fun social events and bonding throughout the year.</p>
            </div> */}

            {/* <div>
                <img src={footer} className="committee_event_pics" style={{position:"absolute", left:0, width:1440, top:4800, paddingBottom:0}}/>
                <img src={dot} style={{position:"absolute", left:120, top:4850, width:2, height:200}}/>
                <a href="#about-us" style={{position:"absolute", top:4840, left:170, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">About Us</a>
                <a href="#involved" style={{position:"absolute", top:4890, left:170, width:150}} onClick={() => {this.tempHandler()}} class="foot-button">Get Involved</a>
                <a href="#events" style={{position:"absolute", top:4940, left:155, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">Events</a>
                <a href="#sponsors" style={{position:"absolute", top:4990, left:170, width:120}} onClick={() => {this.tempHandler()}} class="foot-button">Sponsors</a>

                <a href = "https://www.facebook.com/swe.ucla"><img src={fb} style={{height:110, width: 105, top:4900, position:"absolute", left:500}}/></a>
                <a href = "https://www.instagram.com/swe.ucla"><img src={insta} style={{height:110, width: 105, top:4900, position:"absolute", left:650}}/></a>
                <a href = "https://twitter.com/swe_ucla?lang=en"><img src={twitter} style={{height:110, width: 105, top:4900, position:"absolute", left:800}}/></a>

                <a href="#involved" style={{position:"absolute", top:4850, left:1050, width:200}} class="foot-button">Email us at swe@seas.ucla.edu</a>
                <a href="#involved" style={{position:"absolute", top:4950, left:1010, width:300}} class="foot-button">DM us on Facebook for quick inquiries</a>
            </div> */}
        </div>
      )
    }
}
