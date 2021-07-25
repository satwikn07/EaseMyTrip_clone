import "./travellerdetails.scss";import PeopleIcon from "@material-ui/icons/People";
import TravelUsersDetails from "./TravelUsersDetails"

export default function TravellerDetails() {
    return (
      <div className="travellerDetails">
        <div className="userdetails">
          <PeopleIcon className="svg" /> <span>Traveller Details</span>
          <div>
          <TravelUsersDetails/>
          </div>
        </div>
        <div className="mobilesection">
          <span>Enter Your Mobile Number</span>
          <p>
            Your Mobile number will be used only for sending bus related
            communication.
          </p>
          <input type="number" placeholder="Enter Number" />
        </div>
      </div>
    );
}
