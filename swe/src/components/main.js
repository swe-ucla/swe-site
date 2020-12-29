import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./landing";
import About from "./about";

const Main = () => {
    return (
      <Switch>
        {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    );
  };
  
  export default Main;
  