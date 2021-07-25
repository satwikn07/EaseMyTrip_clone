import React from 'react';
import styles from "./Buscard.module.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { SeatsModal } from '../Seats/SeatsModal';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
export const Buscard = ({bus}) =>{
    // console.log(bus);
    return (
        <div className={styles.card}>
            <div className={styles.upper}>
                <div className={styles.inner}>
                    <div style={{float:"left",fontWeight:"600",fontSize:"16px"}}>{bus.bus_name}</div>
                    <div style={{float:"left",clear:"left",fontWeight:"400",fontSize:"6.5px",color:"#838484"}}>NON AC/ 2 X 2 sleeper coach</div>
                </div>
                <div className={styles.inner}>
                    <div style={{float:"left",fontWeight:"600",fontSize:"18px"}}>{bus.start_time}</div>
                    <div style={{float:"left",clear:"left",fontWeight:"400",fontSize:"13px",color:"#838484"}}>{bus.boarding}</div>
                    <ArrowForwardIcon />
                    <div style={{fontWeight:"400",fontSize:"11px",color:"#838484"}}>{bus.duration}</div>
                    <div style={{float:"right",fontWeight:"400",fontSize:"18px",marginTop:"-40px"}}>{bus.reach_time}</div>
                    <div style={{float:"right",clear:"right",fontWeight:"400",fontSize:"13px",color:"#838484",marginTop:"-18px"}}>{bus.destination}</div>
                </div>
                <div className={styles.inner} style={{textAlign:"center"}}>
                         <span style={{color:"#909090",fontSize:"15px",fontWeight:"500"}}><del>₹{bus.price+300}</del></span> <br />   
                        <span style={{color:"#d63b05",fontSize:"18px",fontWeight:"600"}}>{bus.price}</span> <br />
                        <span style={{color:"#0ab707",fontSize:"11px",fontWeight:"500"}}>coupon applied</span>

                </div>
                <div className={styles.inner} style={{paddingTop:"1vh"}}>
                    {/* <button className={styles.Button}>
                        Select Seats
                    </button> <br /> */}
                    <SeatsModal bus={bus}/>
                    <span style={{color:"#838484",fontSize:"11px",fontWeight:"400"}}>
                        20 seats left
                    </span>
                </div>
            </div>
            <div className={styles.lower}>
                Amenities | Boarding & Dropping Points | Cancellation Policy
            </div>
        </div>
    )
}