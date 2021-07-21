import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { Alarm } from '@material-ui/icons';
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
      width: '100%',
      maxWidth: 280,
      backgroundColor: theme.palette.background.paper,
    },
    textSize: {
        fontSize: "10px"
    }
  }));

export const Filters = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem button>
          <Typography variant = "subtitle2" >Filter By</Typography>
        </ListItem>
        <Divider />
        <ListItem button divider>
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Alarm/><Typography variant = "subtitle2" >On Time Guarntee</Typography>
        </ListItem>
        <ListItem button>
          <Typography>Price</Typography>
          <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </ListItem>
       
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
