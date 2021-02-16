import React from "react";
import "../styles/layout.css";

export default class portal extends React.Component {
    render() {
      return (
          <div className="body">
              <p className="next_header" style={{top: 120, fontSize:45, lineHeight:1.3}}>
                  Our member portal is still under development. Check back later :)
              </p>
          </div>
      )
    }
}