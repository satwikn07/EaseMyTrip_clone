import React, { useState } from "react";
import styles from "../../style/searchBox.module.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addSourceDestination } from "../../Redux/action";

const defaultSourceCity = [
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Delhi",
    "Goa",
    "Pune",
    "Mumbai",
    "Kolkata",
];
const defaultDestinationCity = [
    "Asansol",
    "Bangalore",
    "Bhubaneswar",
    "Digha",
    "Durgapur",
    "Patna",
    "Puri",
    "Ranchi",
    "Siliguri",
    "Ramgarh",
    "Angul",
    "Bokaro",
];

const SearchBox = () => {
    const [showSourceCity, setShowSourceCity] = useState(false);
    const [sourceCity, setSourceCity] = useState("");
    const [showDestCity, setShowDestCity] = useState(false);
    const [destCity, setDestCity] = useState("");
    const [travelDate,setTravelDate] = useState("")
    const history = useHistory();
    const dispatch = useDispatch()

    const nextPage = () => {
        history.push("/buslist");
    };

    const handleSourceCity = () => {
        setShowSourceCity(true);
        setShowDestCity(false);
    };
    const handleDestCity = () => {
        setShowDestCity(true);
        setShowSourceCity(false);
    };

    const handleSwapS_to_D = () => {
        setSourceCity(destCity);
        setDestCity(sourceCity);
    };
    const handleSetCitySource = (e) => {
        setSourceCity(e.target.textContent);
        setShowSourceCity(false);
    };
    const handleSetDestCity = (e) => {
        setDestCity(e.target.textContent);
        setShowDestCity(false);
    };

    const handleSearchBus = () => {
        const payload = {
            source: sourceCity,
            destination: destCity,
            date : travelDate
        }
        if (sourceCity.length === 0 || destCity.length === 0 || travelDate.length === 0) {
            alert("Please fill all the text filed")
        } else {
            dispatch(addSourceDestination(payload))
            console.log(payload)
            nextPage()
        }

    }
    return (
        <div>
            <div className={styles.searchBoxMainDiv}>
                <div className={styles.serach_heading}>
                    <img src="https://i.ibb.co/YQy1MCs/icons8-train-50.png" alt="" />
                    <span>Online Bus Tickets</span>
                </div>
                <div className={styles.serachBox}>
                    <input
                        onClick={handleSourceCity}
                        value={sourceCity}
                        onChange={(e) => setSourceCity(e.target.value)}
                        placeholder="Source City"
                        type="text"
                        required="required"
                    />
                    {showSourceCity ? (
                        <div className={styles.cityNmaeDiv}>
                            {defaultSourceCity.map((item, i) => (
                                <div key={i} onClick={handleSetCitySource}>
                                    <i style={{ margin: "15px" }} class="fas fa-bus-alt"></i>{" "}
                                    {item}
                                </div>
                            ))}
                        </div>
                    ) : null}

                    <div className={styles.dummyDiv1}>
                        <div className={styles.line1}></div>
                        <div className={styles.exchange}>
                            <i
                                style={{ color: "grey", width: "15px" }}
                                class="fa fa-exchange"
                                aria-hidden="true"
                                onClick={handleSwapS_to_D}
                            ></i>
                        </div>
                        <div className={styles.line1}></div>
                    </div>

                    <input
                        onClick={handleDestCity}
                        value={destCity}
                        onChange={(e) => setDestCity(e.target.value)}
                        placeholder="Destination city"
                        type="text"
                    />
                    {showDestCity ? (
                        <div className={styles.DestcityNmaeDiv}>
                            {defaultDestinationCity.map((item, i) => (
                                <div key={i} onClick={handleSetDestCity}>
                                    <i style={{ margin: "15px" }} class="fas fa-bus-alt"></i>{" "}
                                    {item}
                                </div>
                            ))}
                        </div>
                    ) : null}

                    <div className={styles.dummyDiv2}></div>
                    <input className={styles.date} type="date" onChange={e => setTravelDate(e.target.value)} />
                    <button onClick={handleSearchBus}>
                        <i class="fa fa-search" aria-hidden="true"></i>&nbsp; SEARCH BUS
                    </button>
                </div>
            </div>
            <div className={styles.externalPage}>
                <img
                    src="https://www.easemytrip.com/images/bus-img/guidelines-for-bus-travel.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default SearchBox;
