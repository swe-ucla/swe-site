import React from "react";
import Main from "./components/main";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/swe-site"> </BrowserRouter>

      <HashRouter>
        <Main />
      </HashRouter>
    </div>
  );
}

export default App;
