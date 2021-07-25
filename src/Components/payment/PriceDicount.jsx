import "./pricediscount.scss";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
    root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
      float:"left",
      width:"140px",
      fontSize:"14px",
      height:"14px"
    },
  },

  btnroot:{
    marginLeft:theme.spacing(2),
  }
}));
export default function PriceDicount() {
      const classes = useStyles();
      
      const [value, setValue] = React.useState("");
      const [error, setError] = React.useState(false);
      const [helperText, setHelperText] = React.useState("");
      const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(" ");
        console.log(value)

        
        if (value === "BUS10") {
          setHelperText("Congratulation You successfully applied for coupon code");
          setError(false);
        } else if (value === "EASEDAY") {
          setHelperText(
            "Congratulation You successfully applied for coupon code easeday"
          );
          setError(true);
        } else {
          setHelperText("");
          setError(true);
        }

      };

      const handleSubmit = (event) => {
        event.preventDefault();
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
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-helperText" defaultValue={setValue} />

                <Button
                  variant="contained"
                  className={classes.btnroot}
                  color="primary"
                >
                  Apply
                </Button>

                <span>{helperText}</span>
              </form>
              <div className="radiobtn">
                <input
                  id="BUS10"
                  value="BUS10"
                  name="platform"
                  type="radio"
                  onChange={handleRadioChange}
                />{" "}
                <span>EASEDAY</span>
              </div>
              <div className="radiobtn">
                <input
                  id="EASEDAY"
                  value="EASEDAY"
                  name="platform"
                  type="radio"
                  onChange={handleRadioChange}
                />{" "}
                <span>BUS10</span>
              </div>
            </FormControl>
          </form>
        </div>
      </div>
    );
}
