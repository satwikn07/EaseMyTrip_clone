import React from "react";
import "./hiddenbox.scss"

export default class HiddenBox extends React.Component {
  render() {
    return (
<>
      <div className="hiddensection">
   
          <div>
            <span> Email </span>
            <br />
            <input type="text" placeholder="E-mail" />
          </div>

          <div>
            <span> Mobile </span>
            <br />
            <input type="text" placeholder="Mobile" />
          </div>
          <div>
            <span> GST No. </span>
            <br />
            <input type="text" placeholder="GST No." />
          </div>
          <div>
            <span> Company Name </span>
            <br />
            <input type="text" placeholder="Company Name" />
          </div>

        
      </div>
        <div style={{marginLeft:"15px",fontWeight:"500", paddingBottom:"30px"}}>
          <span>Address</span><br />
          <textarea name="" id="" cols="113" rows="4" ></textarea>
          </div>
        </>
    );
  }
}
