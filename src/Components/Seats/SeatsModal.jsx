import { Button, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Modal from "react-modal"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import styles from "./SeatsModal.module.css"
import EventSeatOutlinedIcon from '@material-ui/icons/EventSeatOutlined';
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import {ImCross} from "react-icons/im" 
import axios from 'axios';
import {Seat} from './Seat';
import {v4 as uuid} from 'uuid';
export const SeatsModal = ({bus}) => {
   
    const [showSeats, setShowSeats] = useState(false);
    const [lsm,setLsm] = useState([]);
    const [usm,setUsm] = useState([]);
    const [count,setCount] = useState(0);
    
    // const [selectedSeats,setSelectedseats] = useState([]);
    useEffect(()=>{
        fetchSeatDetails();
    },[])
    const fetchSeatDetails = async() => {
        const data = await axios.get('http://localhost:1234/bus/4')
        setLsm(data.data.lower_seat_matrix);
        setUsm(data.data.upper_seat_matrix);
    }
    const seatSelection = (name) =>{
        const updated_lower = lsm.map((row=>row.map(seat=>seat.name===name?{...seat,selected:!seat.selected}:seat)))
        const updated_upper = usm.map((row=>row.map(seat=>seat.name===name?{...seat,selected:!seat.selected}:seat)))
        // const selected_seats = [updated_lower.map((row=>row.filter(seat=>seat.selected==true))),
        //     updated_upper.map((row=>row.filter(seat=>seat.selected==true)))
        // 
        setLsm(updated_lower);
        setUsm(updated_upper);
        // console.log(c);
        // setSelectedseats(selected_seats);
    }
        //counting the selected seats
    // console.log(lsm,usm);
    // console.log(selectedSeats);
    const useStyles = makeStyles((theme) => ({
        booked: {
            color: "grey"
        },
        available: {
            color: "black",
            marginLeft: "10%"
        },
        reserved: {
            color: "green",
            marginLeft: "10%"
        },
        ladies: {
            color: "pink",
            marginLeft: "10%"
        },
        text: {
            fontSize: "10px"
        },
        seatsDistance: {
            marginLeft: "1%",
            width: "13%"
        },
        continueButton: {
            background: "#EF6614",
            color: "white",
            width: "100%"
        }
    }))

    const classes = useStyles()
    return (
        <div>
            <button onClick = {() => setShowSeats(true)} className={styles.Button} >Select Seats</button>
            {/* <div > */}
                <Modal className = {styles.modal} isOpen = {showSeats} onRequestClose = {() => setShowSeats(false)} style = {{overlay: {backgroundColor: "grey", border: "1px solid grey"}}} >
                    <div style = {{display: "flex", background: "white"}}>
                        <div style = {{width: "70%"}}>
                            <div style = {{display: "flex", marginLeft: "2%", marginTop: "2%"}}>
                                <h2>Hyderabad</h2>
                                <ArrowRightAltIcon fontSize = "large"/>
                                <h2>Bangalore</h2>
                            </div>
                            <div style = {{display: "flex", marginLeft: "2%"}}>
                                <p>{bus.bus_name}</p>
                                <p style = {{marginLeft:"72%"}}>30 July 2021</p>
                            </div>
                            
                            <div style = {{border: "1px dotted grey", margin: "9px 0", marginLeft: "2%"}}></div>
                        
                            <div style = {{marginBottom: "2%", marginLeft: "2%"}}>
                                
                                <EventSeatOutlinedIcon className = {classes.booked} fontSize = "large"/><Typography variant = "caption" >Booked</Typography>
                                <EventSeatOutlinedIcon className = {classes.available} fontSize = "large"/><Typography variant = "caption">Available</Typography>
                                <EventSeatOutlinedIcon className = {classes.reserved} fontSize = "large"/><Typography variant = "caption">Reserved</Typography>
                                <EventSeatOutlinedIcon className = {classes.ladies} fontSize = "large"/><Typography variant = "caption">Reserved for Ladies</Typography>
                            </div>
                            <div style = {{display: "flex", border: "1px solid #55CBF2", background: "#F5F5F5", padding: "4%", marginLeft: "2%"}}>
                                <div>
                                    <div className = {classes.text} >U</div>
                                    <div className = {classes.text} >P</div>
                                    <div className = {classes.text} >P</div>
                                    <div className = {classes.text} >E</div>
                                    <div className = {classes.text} >R</div>
                                </div>
                                <div style = {{marginLeft: "35%", marginTop: "-3%", width: "70%"}}>
                                    <div style = {{marginBottom: "1%"}}>
                                        {usm[0]?.map(seat=><Seat count={count} setCount={setCount} key={seat.name} seat={seat} seatSelection={seatSelection}/>)}
                                       
                                    </div> 
                                    <div style = {{marginBottom: "5%"}}>
                                        {usm[1]?.map(seat=><Seat count={count} setCount={setCount} key={seat.name} seat={seat} seatSelection={seatSelection}/>)}
                                    </div> 
                                    <div>
                                        {usm[2]?.map(seat=><Seat count={count} setCount={setCount} key={seat.name} seat={seat} seatSelection={seatSelection}/>)}

                                    </div> 
                                </div>
                            </div>
                            <div style = {{display: "flex", border: "1px solid #55CBF2", background: "#F5F5F5", padding: "4%", marginTop: "1%", marginLeft: "2%"}}>
                                <div>
                                    <div className = {classes.text} >L</div>
                                    <div className = {classes.text} >O</div>
                                    <div className = {classes.text} >W</div>
                                    <div className = {classes.text} >E</div>
                                    <div className = {classes.text} >R</div>
                                </div>
                                <div style = {{marginLeft: "35%", marginTop: "-3%", width: "70%"}}>
                                    <div style = {{marginBottom: "1%"}}>
                                        {lsm[0]?.map(seat=><Seat count={count} setCount={setCount} key={seat.name} seat={seat} seatSelection={seatSelection}/>)}
                                    </div>
                                    <div style = {{marginBottom: "5%"}}>
                                        {lsm[1]?.map(seat=><Seat count={count} setCount={setCount} key={seat.name} seat={seat} seatSelection={seatSelection}/>)}
                                    </div>
                                    <div>
                                        {lsm[2]?.map(seat=><Seat count={count} setCount={setCount} key={seat.name} seat={seat} seatSelection={seatSelection}/>)}
                                    </div>
                                </div>
                            </div>
                            <div style = {{marginLeft: "2%",marginTop: "1%", border: "1px solid #FAEBCC", background: "#FCF8E3", color: "#9E8558", padding: "5px", fontSize: "10px"}}>
                                <p>Above seats are indicative and not guaranteed.The bus operator reserves the right to alter them.</p>
                            </div>
                            <div style = {{marginLeft: "2%",marginTop: "1%", marginBottom: "1%", border: "1px solid #FAEBCC", background: "#FCF8E3", color: "#9E8558", padding: "5px", fontSize: "10px"}}>
                                <p>Male cannot book the seat reserved for ladies.</p>
                            </div>
                        </div>
                        <div style = {{ background: "#EEEEEE", marginLeft: "0.5%", padding: "1%", width: "30%"}}>
                            <div style = {{marginLeft: "94%"}}>
                                <button onClick = {() => setShowSeats(false)} style = {{border: "1px solid lightgrey", color: "gray", padding: "5px", borderRadius: "50%", cursor: "pointer"}}><ImCross/></button>
                            </div>
                            <Typography>Select a Boarding Point</Typography>
                            <select style = {{border: "1px solid lightgrey", width: "100%", padding: "3%", marginBottom: "3%"}}>
                                <option value="">---Select---</option>
                                <option value="shamsa">Shamsabad</option>
                                <option value="aram">Aramnagar</option>
                                <option value="mehndi">MehndiPatnam</option>
                                <option value="srnagar">SR nagar</option>
                                <option value="panja">Panjagutta</option>
                            </select>
                            <Typography>Select a Dropping Point</Typography>
                            <select style = {{border: "1px solid lightgrey", width: "100%", padding: "3%", marginBottom: "3%"}}>
                                <option value="">---Select---</option>
                                <option value="kalasi">Kalasipalyam</option>
                                <option value="anand">Anand Rao Circle</option>
                                <option value="majestic">Majestic Intercity</option>
                                <option value="labagh">LalBagh Infront of Lalbagh Main</option>
                                <option value="nagar">Jai Nagar 4 block</option>
                                <option value="silk">Silk Road</option>
                            </select>
                            <Typography>Select Seats</Typography>
                            
                            <div style = {{border: "1px solid lightgrey", background: "white", padding: "3%", marginTop: "4%", marginBottom: "3%"}}>
                                <div style = {{display: "flex"}} >
                                    <p>Base Fare(+)</p> <span style = {{marginLeft: "65%"}} >₹ {bus.price} X {count}</span>
                                </div>
                                <div style = {{display: "flex"}}>
                                    <p>GST & Operator Fees</p> <span style = {{marginLeft: "45.5%"}}>₹{(bus.price*count)*18/100}</span>
                                </div>
                                <br />
                                <div style={{display:"flex"}}>
                                {lsm[0]?.map(seat=>seat.selected==true?<div style={{marginRight:"5px"}}>{seat.name}</div>: null)}
                                {lsm[1]?.map(seat=>seat.selected==true?<div style={{marginRight:"5px"}}>{seat.name}</div>: null)}
                                {lsm[2]?.map(seat=>seat.selected==true?<div style={{marginRight:"5px"}}>{seat.name}</div>: null)}
                                {usm[0]?.map(seat=>seat.selected==true?<div style={{marginRight:"5px"}}>{seat.name}</div>: null)}
                                {usm[1]?.map(seat=>seat.selected==true?<div style={{marginRight:"5px"}}>{seat.name}</div>: null)}
                                {usm[2]?.map(seat=>seat.selected==true?<div style={{marginRight:"5px"}}>{seat.name}</div>: null)}

                                {/* {lsm?.filter((row=>row.filter(seat=>seat.selected==true))).map((el)=><div key={uuid()}>{el.name}</div>)} */}

                                </div>
                                <br />
                                <div style = {{display: "flex"}}>
                                    <p>Total Amount</p>
                                    <span style = {{marginLeft:"62%"}}>₹ {bus.price*count+((bus.price*count)*18/100)}</span>
                                </div>           
                            </div>
                            <Button variant="contained" className = {classes.continueButton} >
                                CONTINUE
                            </Button>
                            
                        </div>
                    </div>
                </Modal>
            {/* </div> */}
        </div>
    )
}
