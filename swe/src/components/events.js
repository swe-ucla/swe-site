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
import epec from "../images/epec.jpeg";
import footer from "../images/footer.png";
import dot from "../images/dot-line.png";
import facebook from "../images/foot-fb.png";
import insta from "../images/foot-insta.png";
import twitter from "../images/foot-twitter.png";
import upcoming_icon from "../images/calendar-dates/upcoming_event_calendar_icon.png";
import ewi_icon from "../images/calendar-dates/ewi_calendar_icon.png";
import wesp_icon from "../images/calendar-dates/wesp_calendar_icon.png";
import qwer_hack_icon from "../images/calendar-dates/qwer_hacks_calendar_icon.png";
import wow_icon from "../images/calendar-dates/wow_calendar_icon.png";
import wesp from "../images/calendar-dates/wesp.png";

export default class events extends React.Component {
    tempHandler = () => {
        window.scrollTo({
            top: 0
        })
    }

    render() {
        return (
            <div >
                <Helmet>
                    <title> SWE UCLA | Events</title>
                </Helmet>
                <div className="event_header">
                    Our events are open to anyone and any major. Hope to see you there!
              </div>

                <div class="flex-container" >
                    <div class="flex-child-left" style={{ minWidth: 400 }}>
                        <div className="event_caption">UPCOMING EVENT</div>
                        <div className="event_caption_title"> FALL GM </div>
                        <div className="event_caption_body">SWE's General Meeting for Fall Quarter will be Thursday of Week 1 (9/30) from 6-8PM at Young Hall CS24. Come to get to know other people in SWE and hear about what our organization has accomplished this past year and what we're planning for Fall Quarter.</div>

                        <div class="float-grandchild-left">
                            <img src={upcoming_icon} style={{ height: 85, width: 85 }} alt="upcoming icon" />
                        </div>

                        <div class="float-grandchild-left">
                            <a href="https://www.facebook.com/swe.ucla"><img src={fb} style={{ height: 85, width: 85 }} /></a>
                        </div>

                        <div class="float-grandchild-left">
                            <a href="https://tinyurl.com/swe-gen2020"><img src={zoom} style={{ height: 85, width: 85 }} /></a>
                        </div>

                    </div>

                    <div class="flex-child-left" style={{ minWidth: 400 }}>
                        <iframe src="https://www.google.com/calendar/embed?src=m980q306mg3rfvuh7jhm43fr5s%40group.calendar.google.com&amp;ctz=America/Los_Angeles" className="gcal_events"></iframe>
                    </div>
                </div>



                <div class="flex-container" style={{ paddingTop: 50 }}>
                    <div class="flex-child-left" style={{ minWidth: 400 }}>
                        <div className="side_header" style={{ fontSize: 34 }}>
                            Special Events
                        </div>
                    </div>

                    <div class="flex-child-left" style={{ minWidth: 400 }}></div>
                </div>



                <div class="flex-container">
                    <div class="flex-child-left" style={{ minWidth: 550 }}>
                        <img src={ewi} style={{ width: 550, height: 400 }} alt="ewi" />
                    </div>

                    <div class="flex-child-left" style={{ paddingLeft: 10 }}>
                        <div className="event_caption">EVENING WITH INDUSTRY</div>
                        <div className="event_caption_body">Evening with Industry (EWI) is one of the largest student-run networking events at UCLA attracting around 40 companies and 300 students annually. The three part event includes a networking hour, dinner with a few company representatives, and a private career fair. We’re excited to announce that this year’s 44th Evening with Industry will be entirely virtual!</div>

                        <div class="float-new-grandchild-left">
                            <img src={ewi_icon} style={{ height: 50, width: 50 }} />
                        </div>

                        <div class="float-new-grandchild-left">
                            <a href="https://www.facebook.com/ucla.swe.ewi/"><img src={fb} style={{ height: 50, width: 50 }} /></a>
                        </div>
                    </div>
                </div>



                <div class="flex-container">
                    <div class="flex-child-left" style={{ paddingTop: 30 }}>
                        <div className="event_caption">WOMEN IN ENGINEERING STAYOVER PROGRAM</div>
                        <div className="event_caption_body">Women in Engineering Stayover Program (WESP) hosts newly admitted female engineering students to show them all our school as to offer. This event includes tours of the engineering department, dinner with UCLA faculty, an exciting scavenger hunt, and much more!</div>

                        <div class="float-new-grandchild-left">
                            <img src={wesp_icon} style={{ height: 50, width: 50 }} />
                        </div>

                        <div class="float-new-grandchild-left">
                            <a href="https://www.facebook.com/ucla.swe.ewi/"><img src={fb} style={{ height: 50, width: 50 }} /></a>
                        </div>
                    </div>

                    <div class="flex-child-left" style={{ paddingTop: 0, paddingLeft: 30, minWidth: 500 }}>
                        <img src={wesp} className="special_event_pics" style={{ width: 500, height: 300 }} alt="wesp" />
                    </div>
                </div>



                <div class="flex-container">
                    <div class="flex-child-left" style={{ paddingRight: 0, paddingLeft: 50, minWidth: 550 }}>
                        <img src={qwer} style={{ width: 450, height: 400 }} alt="qwer" />
                    </div>

                    <div class="flex-child-left" style={{ paddingTop: 25, paddingLeft: 30, paddingRight: 20 }}>
                        <div className="event_caption">QWERHACKS</div>
                        <div className="event_caption_body">QWER Hacks is an LGBTQ+ inclusive virtual hackathon, with the goal of bringing more awareness and support for the queer community in STEM, complete with its own workshops series and mentors to provide attendees with invaluable technical insight.</div>

                        <div class="float-new-grandchild-left">
                            <img src={qwer_hack_icon} style={{ height: 50, width: 50 }} alt="qwer hacks" />
                        </div>

                        <div class="float-new-grandchild-left">
                            <a href="https://www.facebook.com/qwerhacks"><img src={fb} style={{ height: 50, width: 50 }} /></a>
                        </div>
                    </div>
                </div>



                <div class="flex-container">
                    <div class="flex-child-left" style={{ paddingRight: 20, paddingLeft: 30, paddingTop: 90 }}>
                        <div className="event_caption">WOW! THAT'S ENGINEERING DAY</div>
                        <div className="event_caption_body">WOW! That's Engineering Day is a collaboration with the Girl Scouts of LA to put on a day full of engineering activities, guest speakers, and presentations for around 150 participants.  </div>

                        <div class="float-new-grandchild-left">
                            <img src={wow_icon} style={{ height: 50, width: 50 }} />
                        </div>

                        <div class="float-new-grandchild-left">
                            <a href="https://www.facebook.com/events/126162108592218/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%7D"><img src={fb} style={{ height: 50, width: 50 }} /></a>
                        </div>
                    </div>

                    <div class="flex-child-left" style={{ paddingTop: 0, paddingLeft: 50 }}>
                        <img src={wow} style={{ width: 550, height: 400 }} alt="wow" />
                    </div>
                </div>



                <div class="flex-container">
                    <div class="flex-child-left" style={{ paddingRight: 20, paddingLeft: 0, paddingTop: 0, minWidth: 550 }}>
                        <img src={epec} className="special_event_pics" style={{ width: 700, height: 460 }} alt="epec" />
                    </div>

                    <div class="flex-child-left" style={{ paddingTop: 50, paddingLeft: 50, paddingRight: 20 }}>
                        <div className="event_caption">ENGINEERS FOR PROFESSIONAL EQUALITY CONFERENCE</div>
                        <div className="event_caption_body">The Engineers for Professional Inclusion Conference is a conference highlighting diversity across the engineering workforce. This year, we will further embrace the intersectionality of individuals in STEM through hosting a keynote speaker and panel of professionals who will speak on their experiences in academia and the workforce.</div>

                        <div class="float-new-grandchild-left">
                            <img src={wow_icon} style={{ height: 50, width: 50 }} alt="wow icon" />
                        </div>

                        <div class="float-new-grandchild-left">
                            <a href="https://www.facebook.com/uclaswe"><img src={fb} style={{ height: 50, width: 50 }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}