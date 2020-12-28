import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./landing";

const Main = () => {
    return (
      <Switch>
        {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path="/" component={Landing}></Route>
      </Switch>
    );
  };
  
  export default Main;
  