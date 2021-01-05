import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./landing";
import About from "./about";
import Events from "./events";
import Portal from "./portal";
import Sponsors from "./sponsors";
import Involved from "./involved"
import Header from "./header";

const Main = () => {
    return (
      <div>
        <Header />
          <Switch>
            {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/about-us" component={About}></Route>
            <Route exact path="/events" component={Events}></Route>
            <Route exact path="/member-portal" component={Portal}></Route>
            <Route exact path="/sponsors" component={Sponsors}></Route>
            <Route exact path="/involved" component={Involved}></Route>
          </Switch>
      </div>
    );
  };
  
  export default Main;
  