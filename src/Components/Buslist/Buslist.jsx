import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Buscard } from "./Buscard";
import LoadingOverlay from "react-loading-overlay";
import axios from "axios";
// import { FiltersAlign } from "./../FiltersAlignment/FiltersAlign";
import {LeftFilters} from '../LeftFilters/LeftFilters';
import { TopFilters } from "../TopFilters/TopFilters";
import { useSelector } from "react-redux";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './Buscard.module.css';
import { AppBar, TextField, Toolbar, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: "blue",
    fontSize: "14px",
    fontWeight: 400,
    color: "#000000",
  }
}));
export const Buslist = () => {
  const classes = useStyles();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [buses, setBuses] = useState([]);
  useEffect(() => {
    fetchBuses();
  }, []);
  const fetchBuses = () => {
    setisLoading(true);
    try {
      setTimeout(async () => {
        const data = await axios.get(
          "http://localhost:8000/buses"
        );
        // console.log(data)
        setBuses(data.data.data);
        setisLoading(false);
        // console.log(data.data);
      }, 2000);
    } catch (e) {
      setisLoading(false);
      setIsError(true);
    }
  };
  return (
    <div style={{width:"100%",backgroundColor:"#F2F2F2"}}>
    <LoadingOverlay
      active={isLoading}
      spinner={<img src="	https://bus.easemytrip.com/new_img/bus-loading.gif" />}
      text={
        <p style={{ fontSize: "13px" }}>
          Please wait, getting
          <br />
          best deals for you <br />
          on this route.
        </p>
      }
      fadeSpeed={500}
    >
      <div  style={{minHeight:"700px"}}>
      <Grid className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid className={classes.paper}>
              <div style = {{border: "1px solid #53C6F2", background: "#41A4F0", marginTop: "-0.4%", padding: "1%", display: "flex"}}>
                <div style = {{marginLeft: "11%"}}>
                  <h4 style = {{color: "white", textAlign: "left"}}>SOURCE CITY</h4>
                  <input type="text" style = {{padding: "5px", color: "white", width: "250px"}} />
                </div>
                <div style = {{marginLeft: "5%"}}>
                  <h4 style = {{color: "white", textAlign: "left"}}>DESTINATION CITY</h4>
                  <input type="text" style = {{padding: "5px", color: "white", width: "250px"}}/>
                </div>
                <div style = {{marginLeft: "5%"}}>
                  <h4 style = {{color: "white", textAlign: "left"}}>DEPARTURE DATE</h4>
                  <input type="date" style = {{color: "white", width: "250px"}} />
                </div>
                  <button style = {{border: "1px solid white", color:"white", width: "180px", borderRadius: "5px", fontSize: "15px", marginLeft: "5%", padding: "1%", background: "#51C3F1"}}>Submit</button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{paddingLeft:"10vw"}}>
            <Grid item xs={12} sm={3}>
              <Grid className={classes.paper}>
                <LeftFilters />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div><TopFilters/></div>
              <Grid container spacing={1} style={{marginBottom:"1vh",marginTop:"1.5vh"}}>
                  <Grid item xs={2} sm={4}  className={styles.fromto}>Hyderbad <i class="fa fa-arrow-right" style={{fontSize:"18px"}}></i> Bangalore</Grid>
                  <Grid item xs={2} sm={5} className={styles.date}>| &nbsp; Friday, 23 july 2021</Grid>
              </Grid>
              <Grid container spacing={1} style={{marginBottom:"2vh"}}>
                  <Grid item xs={2} sm={3} className={styles.colhead} >BUS OPERATOR</Grid>
                  <Grid item xs={2} sm={2} className={styles.colhead} style={{paddingLeft:"5.5%"}}>DEPARTURE</Grid>
                  <Grid item xs={2} sm={2} className={styles.colhead} style={{paddingLeft:"5.5%"}}>DURATION</Grid>
                  <Grid item xs={2} sm={1} className={styles.colhead} >ARRIVAL</Grid>
                  <Grid item xs={2} sm={2} className={styles.colhead} style={{paddingLeft:"4.5%"}}>PRICE</Grid>
                  <Grid item xs={2} sm={2} className={styles.colhead2} style={{paddingLeft:"5%"}}>10 Results</Grid>
              </Grid>
              <div className={classes.paper}>
                {buses?.map((bus) => (
                  <Buscard bus={bus} key={bus.id} />
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    </LoadingOverlay>
    </div>
  );
};
