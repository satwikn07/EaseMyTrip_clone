import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Buscard } from "./Buscard";
import LoadingOverlay from "react-loading-overlay";
import axios from "axios";
import { FiltersAlign } from "./../FiltersAlignment/FiltersAlign";
import { useSelector } from "react-redux";
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
  },
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
          "http://localhost:1234/bus?boarding=Hyderabad&destination=Bangalore"
        );
        setBuses(data.data);
        setisLoading(false);
        console.log(data.data);
      }, 3000);
    } catch (e) {
      setisLoading(false);
      setIsError(true);
    }
  };
  return (
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
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Blue bar</Paper>
          </Grid>
          <Grid container spacing={3} style={{ paddingLeft: "12vw" }}>
            <Grid item xs={12} sm={2}>
              <div className={classes.paper}>
                <FiltersAlign />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div className={classes.paper}>
                {buses?.map((bus) => (
                  <Buscard bus={bus} key={bus.id} />
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LoadingOverlay>
  );
};
