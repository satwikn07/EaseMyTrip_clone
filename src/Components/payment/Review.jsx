import React, { useState } from "react";
import { Button} from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import DetailsSection from './DetailsSection';
import { makeStyles } from '@material-ui/styles';
import PriceDicount from './PriceDicount';
import "./review.scss"

import MyApp from './Contact';
import TravellerDetails from './TravellerDetails';
import PaymentPage from '../LandingPage/PaymentPage';
const useStyles = makeStyles((theme) => ({
    continueButton: {
        background: "#EF6614",
        color: "white",
        width: "50%"
    }
}))
export const Review = () =>{
    const [review, showReview] = useState(true);
    const [travel, showTrvael] = useState(false);
    const [pay, showPay] = useState(false);

    const handleReview = () => {
      showReview(false);
      showTrvael(true);
      showPay(false);
    };
    const handleTravel = () => {
      showReview(false);
      showTrvael(false);
      showPay(true);
    };
    const handlePayment = () => {
      showReview(false);
      showTrvael(false);
      showPay(true);
    };
    const classes = useStyles()
    return (
      <>
        <div>
          <ul className="breadcrumStyle">
            <li className={review ? "changeColor" : null}>
              Review{" "}
              <span>
                <i
                  style={{ padding: "5px" }}
                  class="fa fa-angle-right"
                  aria-hidden="true"
                ></i>
              </span>{" "}
            </li>
            <li className={travel ? "changeColor" : null}>
              Traveller{" "}
              <span>
                <i
                  style={{ padding: "5px" }}
                  class="fa fa-angle-right"
                  aria-hidden="true"
                ></i>
              </span>
            </li>
            <li className={pay ? "changeColor" : null}>Payments</li>
          </ul>
        </div>

        {review ? (
          <div>
            <Grid container spacing={2} style={{ marginLeft: "10%" }}>
              <Grid item xs={8}>
                <DetailsSection />
              </Grid>
              <Grid item xs={3}>
                <PriceDicount />
              </Grid>
              <Grid item xs={8}>
                <MyApp />
              </Grid>
              {/**Contact details form page*/}
              <Grid item xs={8} style={{ textAlign: "center" }}>
                <Button
                  onClick={handleReview}
                  variant="contained"
                  className={classes.continueButton}
                >
                  CONTINUE
                </Button>
              </Grid>
            </Grid>
          </div>
        ) : travel ? (
          <div>
            <Grid container spacing={2} style={{ marginLeft: "10%" }}>
              <Grid item xs={8}>
                <DetailsSection />
              </Grid>
              <Grid item xs={8}>
                <TravellerDetails />{" "}
              </Grid>
              {/**Contact details form page*/}
              <Grid item xs={8} style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  onClick={handleTravel}
                  className={classes.continueButton}
                >
                  CONTINUE
                </Button>
              </Grid>
            </Grid>
          </div>
        ) : pay ? (
          <div>
            <Grid container spacing={2} style={{ marginLeft: "10%" }}>
              <Grid item xs={8}>
                <DetailsSection />
              </Grid>
              <Grid item xs={8}>
                <TravellerDetails />{" "}
              </Grid>
              <PaymentPage /> {/**Contact details form page*/}
              
            </Grid>
          </div>
        ) : null}
      </>
    );
}
