import Contact from "./Contact"
import "./payment.scss"
import PriceDiscount from "./PriceDicount"
import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import DetailsSection from "./DetailsSection";
import TravellerDetails from "./TravellerDetails";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Payment() {
    return (
      <div style={{ backgroundColor: "#EEEEEE" }}>
        <div style={{ marginLeft: "160px", paddingTop: "20px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/payment/DetailsSection" onClick={handleClick}>
              1. Review
            </Link>
            <Link
              color="inherit"
              href="/getting-started/traveller/"
              onClick={handleClick}
            >
              2. Travellers
            </Link>
            <Link
              color="textPrimary"
              href="/components/payment/TravellerDetails"
              onClick={handleClick}
              aria-current="page"
            >
              3. Payment
            </Link>
          </Breadcrumbs>
        </div>
        <div className="payment">
          <div>
          <DetailsSection/>
            <Contact />
            <TravellerDetails/>
            <div className="submit">
              <button type="submit" onClick={handleClick} className="continue">
                Continue Booking
              </button>
            </div>
          </div>
          <div>
            <PriceDiscount />
          </div>
        </div>
      </div>
    );
}
