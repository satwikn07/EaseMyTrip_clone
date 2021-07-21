import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Button, Grid, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { Alarm } from '@material-ui/icons';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import Slider from '@material-ui/core/Slider';
import { FilterAmenities } from './FilterAmenities';
import { FilterDropping } from './FilterDropping';
import { FilterCancellation } from './FilterCancellation';
import { FilterDeparture } from './FilterDeparture';
import { FilterBusType } from './FilterBusType';
import { FilterBoarding } from './FilterBoarding';
import { FilterOperator } from './FilterOperator';


const useStyles = makeStyles((theme) => ({
    root: {
        border: "1px solid lightgrey",
        borderRadius: "5px",
        width: '100%',
        maxWidth: 280,
        backgroundColor: theme.palette.background.paper,
    },
    resetButton: {
        fontSize: "10px",
        color: "purple",
        textDecoration: "underline",
        marginLeft: "43%"
    },
    headingBackground: {
        background: "#F2F2F2",
        padding: "7px",
        marginTop: "-3%"
    },
    iconColor: {
        color: "grey"
    }
  }));

export const Filters = () => {

    const classes = useStyles();

    const AirbnbSlider = withStyles({
        root: {
          color: '#3a8589',
          height: 3,
          padding: '13px 0',
          marginLeft: 25,
          width: 200
        },
        thumb: {
          height: 27,
          width: 27,
          backgroundColor: '#fff',
          border: '1px solid currentColor',
          marginTop: -12,
          marginLeft: -13,
          boxShadow: '#ebebeb 0 2px 2px',
          '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0 2px 3px 1px',
          },
          '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
          },
        },
        active: {},
        track: {
          height: 3,
        },
        rail: {
          color: '#d8d8d8',
          opacity: 1,
          height: 3,
        },
      })(Slider);

    function AirbnbThumbComponent(props) {
        return (
          <span {...props}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </span>
        );
      }

    return (
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem className = {classes.headingBackground} >
          <Typography variant = "subtitle2" style = {{marginLeft: "3%"}} >Filter By</Typography>
          <Button variant = "subtitle2" className = {classes.resetButton} >Reset All</Button>
        </ListItem>
        <Divider />
        <ListItem >
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Alarm className = {classes.iconColor} /> <Typography variant = "subtitle2" >On Time Guarantee</Typography>
        </ListItem>
        <ListItem divider>
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <GpsFixedIcon className = {classes.iconColor} /><Typography variant = "subtitle2" >GPS Enalbed Buses</Typography>
        </ListItem>
        <Grid >
          <Typography style = {{marginLeft: "6%"}}>Price</Typography>
          <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                defaultValue={[450, 1500]}
            />
        </Grid>
       
        <Divider light />
            <FilterDeparture/>
        <Divider light />
            <FilterCancellation/>
        <Divider light />
            <FilterBusType/>
        <Divider light />
            <FilterBoarding/>
        <Divider light />
            <FilterDropping/>
        <Divider light />
            <FilterAmenities/>
        <Divider light />
            <FilterOperator/>
      </List>

    )
}
