import React from "react";
import "../styles/layout.css";
import { Helmet } from 'react-helmet';

export default class portal extends React.Component {
    render() {
      return (
          <div className="body">
              <Helmet>
                    <title> SWE UCLA | Member Portal</title>
                </Helmet>
              <p className="next_header" style={{top: 120, fontSize:45, lineHeight:1.3}}>
                  Our portal is under construction :D
              </p>
          </div>
      )
    }
}