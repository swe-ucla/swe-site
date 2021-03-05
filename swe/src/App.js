import React from "react";
import Main from "./components/main";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
=======
import { BrowserRouter} from "react-router-dom";
>>>>>>> 136c8b7d9b6c41313fb4ecdece2b9b97b79726ff

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
