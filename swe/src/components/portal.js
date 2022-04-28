import React from "react";
import "../styles/layout.css";
import { Helmet } from 'react-helmet';

export default class portal extends React.Component {
    render() {
      return (
          <div>
              <Helmet>
                    <title> SWE UCLA | Member Portal</title>
                </Helmet>

              <div className="event_header">
                Our portal is under construction :D
              </div>
          </div>
      )
    }
}