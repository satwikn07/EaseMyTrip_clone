import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Modal from "react-modal"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import styles from "./SeatsModal.module.css"
import EventSeatOutlinedIcon from '@material-ui/icons/EventSeatOutlined';
import { makeStyles } from '@material-ui/styles';
export const SeatsModal = () => {

    const [showSeats, setShowSeats] = useState(false)

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
            <button onClick = {() => setShowSeats(true)} >OPEN</button>
            {/* <div > */}
                <Modal className = {styles.modal} isOpen = {showSeats} onRequestClose = {() => setShowSeats(true)} style = {{overlay: {backgroundColor: "grey", border: "1px solid grey", opacity: "0.9"}}} >
                    <div style = {{display: "flex", background: "#FEFEFE"}}>
                        <div style = {{width: "70%"}}>
                            <div style = {{display: "flex", marginLeft: "2%", marginTop: "2%"}}>
                                <h2>Hyderabad</h2>
                                <ArrowRightAltIcon fontSize = "large"/>
                                <h2>Bangalore</h2>
                            </div>
                            <div style = {{display: "flex", marginLeft: "2%"}}>
                                <p>InterCIty Smart Bus </p>
                                <p>30 July 2021</p>
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
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U3</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U6</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U9</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U12</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U15</Button>
                                    </div> 
                                    <div style = {{marginBottom: "5%"}}>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U2</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U5</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U8</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U11</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U14</Button>
                                    </div> 
                                    <div>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U1</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U4</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U7</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U10</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U13</Button>
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
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U1</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U4</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U7</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U10</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U13</Button>
                                    </div>
                                    <div style = {{marginBottom: "5%"}}>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U1</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U4</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U7</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U10</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U13</Button>
                                    </div>
                                    <div>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U1</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U4</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U7</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U10</Button>
                                        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}>U13</Button>
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
                            <Typography>Select a Boarding Point</Typography>
                            <select style = {{border: "1px solid lightgrey", width: "100%", padding: "3%", marginBottom: "3%"}}>
                                <option value="">---Select---</option>
                            </select>
                            <Typography>Select a Dropping Point</Typography>
                            <select style = {{border: "1px solid lightgrey", width: "100%", padding: "3%", marginBottom: "3%"}}>
                                <option value="">---Select---</option>
                            </select>
                            <Typography>Select Seats</Typography>
                            <div style = {{border: "1px solid lightgrey", background: "white", padding: "3%", marginTop: "4%", marginBottom: "3%"}}>
                                <div style = {{display: "flex"}} >
                                    <p>Base Fare(+)</p> <span style = {{marginLeft: "65%"}} >₹ 0</span>
                                </div>
                                <div style = {{display: "flex"}}>
                                    <p>GST & Operator Fees</p> <span style = {{marginLeft: "45.5%"}}>₹ 0</span>
                                </div>
                                <br />
                                <div style = {{display: "flex"}}>
                                    <p>Total Amount</p>
                                    <span style = {{marginLeft:"62%"}}>₹ 0</span>
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