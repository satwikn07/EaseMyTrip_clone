import "./travelusersdetails.scss"

export default function TravelUsersDetails() {
    return (
      <div className="travelUsersDetails">
        <span>Adult</span>
        <div className="inputsec">
          <div>
            <p>Title</p>
            <select name="" id="">
              <option>Miss</option>
              <option>Mrs</option>
              <option>Mr</option>
            </select>
          </div>
          <div>
            <p>First Name</p>
            <input type="text" placeholder="Enter First Name" />
          </div>
          <div>
            <p>Last Name</p>
            <input type="text" placeholder="Enter Last Name" />
          </div>
          <div>
            <p>Age</p>
            <input type="number" placeholder="Enter Age" />
          </div>
          <div>
            <p>Seat</p>
            <p className="seat">Q(General)</p>
          </div>
        </div>
      </div>
    );
}
