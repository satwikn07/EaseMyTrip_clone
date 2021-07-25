import "./pricediscount.scss";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {FormControlLabel} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  }
}));
export default function PriceDicount() {
      const classes = useStyles();
      const [value, setValue] = React.useState("");
      const [error, setError] = React.useState(false);
      const [helperText, setHelperText] = React.useState("Choose wisely");
      const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(" ");
        setError(false);
      };

      const handleSubmit = (event) => {
        event.preventDefault();

        if (value === "BUS10") {
          setHelperText("You got it!");
          setError(false);
        } else if (value === "EASEDAY") {
          setHelperText("");
          setError(true);
        } else {
          setHelperText("Please select an option.");
          setError(true);
        }
      };

    return (
      <div className="pricediscount">
        <div className="summarydetails">
          <p
            style={{ fontSize: "18px", padding: "10px", backgroundColor: "#" }}
          >
            <span
              style={{
                border: "2px solid black",
                padding: "2px 4px 2px 8px",
                borderRadius: "40px",
              }}
            >
              {" "}
              ₹{" "}
            </span>{" "}
            &nbsp; Price Summary
          </p>
          <p className="styling">BaseFare x 2 </p>
          <hr />
          <p className="styling">GST & Operator Fees</p>
          <hr />
          <p className="grandtotal" style={{ padding: "10px" }}>
            GRAND TOTAL
          </p>
        </div>
        <div className="summarydetails">
          <p className="counpon">Have a Coupon Code?</p>

          <form onSubmit={handleSubmit}>
            <FormControl
              component="fieldset"
              error={error}
              className={classes.formControl}
            >

            <input type="text" /><button>Button</button>

              <RadioGroup
                aria-label="quiz"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="BUS10"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="EASEDAY"
                />
              </RadioGroup>
            </FormControl>
          </form>
        </div>
      </div>
    );
}
