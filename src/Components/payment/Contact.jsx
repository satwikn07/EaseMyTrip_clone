import "./contact.scss";
import React from "react";
import InnerBox from "./Innerbox";

export default class MyApp extends React.Component {
  render() {
    return (
      <div>
        <div className="backtoggle">
          <InnerBox>
            <button className="togglebutton">
              Use GSTIN for this booking (optional)
            </button>
          </InnerBox>
        </div>
        <div className="contact">
          <span className="statementsize">Contact Details</span>
          <p className="para">Your ticket will be sent to this email address</p>
          <input
            type="text"
            placeholder="Enter your Emaid ID"
            className="numberfield"
          />
        </div>
      </div>
    );
  }
}

