import React from "react";
import Main from "./components/main";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/swe-site">
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
