/* eslint-disable jsx-a11y/alt-text */
import "./detailssection.scss";
import busicon from "./busicon.png";

export default function DetailsSection() {
    return (
      <div className="detailsection">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="27"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
        </svg>{" "}
        <span
          style={{
            fontSize: "20px",
            background: "#EEEEEE",
            float: "right",
            marginRight: "46rem",
            marginTop: "5px",
          }}
        >
          Bus Details
        </span>
        <div className="busdetails">
          <div className="detailsarea">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35"
              viewBox="0 0 24 24"
              width="35"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
            </svg>
            <div className="names">
              <div style={{ marginLeft: "0px" }}>
                <span>Hyderabad</span>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png"
                  width="15px"
                />
                <span>Bangalore</span>
                <p
                  style={{ textAlign: "left", color: "grey", fontSize: "10px" }}
                >
                  25-07-2021
                </p>
              </div>
              <div>
                <p className="headingname">Boarding Time</p>
                <h3>11:54</h3>
              </div>
              <div style={{ marginLeft: "5px" }}>
                <img src={busicon} alt="img" style={{ padding: "5px" }} />{" "}
                <p style={{ color: "grey", fontSize: "10px" }}>12h 53m</p>
              </div>
              <div style={{ marginLeft: "5px" }}>
                <p className="headingname">Arrival Time</p>
                <h3>12:47</h3>
              </div>
              <div>
                <p className="headingname">Seat no(s)</p>
                <p className="seatsclass">U4</p>
              </div>
              <div>
                <p className="headingname">No of Passengers(s)</p>
                <p>1</p>
              </div>
            </div>
          </div>

          <div className="pickup">
            <div className="boarding">
              <div className="boardingdetails">
                <div>
                  <p className="bgboard">Boarding Point</p>
                  <p className="boardAdd">Shamsabad, Hyderabad</p>
                </div>
                <div>
                  <p className="bgboard">Dropping Point</p>
                  <p className="boardAdd">Kalasipalyam, Bangalore</p>
                </div>
              </div>
              <div className="operatorname">
                <p className="bgboard">Bus Operator</p>
                <p className="boardAdd">Private ltd</p>
                <p style={{ color: "grey" }}>Sleeper Delux</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
