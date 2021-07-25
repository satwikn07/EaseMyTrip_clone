import "./contact.scss";
import React, { useState } from "react";
import HiddenBox from "./HiddenBox";
const MyApp = () => {
  const [showGst, setShowGst] = useState(false);
  const handleGSTToggle = () => {
    setShowGst(!showGst);
  };
  return (
    <div>
      <div className="backtoggle">
        <div>
          <i
            style={{ marginLeft: "20px" }}
            onClick={handleGSTToggle}
            class="far fa-plus-square"
          ></i>
          <button className="togglebutton">
            Use GSTIN for this booking (optional)
          </button>
        </div>
        {showGst ? <HiddenBox /> : null}
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
};
export default MyApp;
