import React from "react";
import {Route, BrowserRouter as Router } from "react-router-dom";
import {Switch} from "react-router";
import Landing from "./landing";
import About from "./about";
import Events from "./events";
import Portal from "./portal";
import Sponsors from "./sponsors";
import Involved from "./involved"
import Header from "./header";
import Footer1 from "./footer";
const Main = () => {
    return (
      <div>
        <Header />
          <Switch>
            {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/about-us" component={About}></Route>
            <Route exact path="/events" component={Events}></Route>
            <Route exact path="/portal" component={Portal}></Route>
            <Route exact path="/sponsors" component={Sponsors}></Route>
            <Route exact path="/involved" component={Involved}></Route>
          </Switch>
          <Footer1/>
      </div>
    );
  };

  export default Main;
