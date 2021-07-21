import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { Alarm } from '@material-ui/icons';
import Slider from '@material-ui/core/Slider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LoadingOverlay from 'react-loading-overlay';

const useStyles = makeStyles((theme) => ({
    root: {
        border: "1px solid lightgrey",
      width: '100%',
      maxWidth: 280,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export const Filters = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);
    const [departure, setDeparture] = React.useState(false);
    const [cancellation, setCancellation] = React.useState(false);
    const [busType, setBusType] = React.useState(false);
    const [boarding, setBoarding] = React.useState(false);
    const [dropping, setDropping] = React.useState(false);
    const [amenities, setAmenities] = React.useState(false);
    const [operator, setOperator] = React.useState(false);

    const handleDeparture = () => {
        setDeparture(!departure);
    }

    const handleCancellation = () => {
        setCancellation(!cancellation);
    }
    const handleBusType = () => {
        setBusType(!busType);
    }
    const handleBoarding = () => {
        setBoarding(!boarding);
    }
    const handleDropping  = () => {
        setDropping(!dropping);
    }
    const handleAmenities = () => {
        setAmenities(!amenities);
    }
    const handleOperator = () => {
        setOperator(!operator);
    }
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <LoadingOverlay active={false} spinner={<img src="	https://bus.easemytrip.com/new_img/bus-loading.gif"/>}  text={<p style={{fontSize:"13px"}}>Please wait, getting<br/>best deals for you <br/>on this route.</p>} fadeSpeed={500}>
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem button>
          <Typography variant = "subtitle2" >Filter By</Typography>
        </ListItem>
        <Divider />
        <ListItem button divider>
            <Checkbox
                defaultChecked
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

        <ListItem button onClick={handleDeparture}>
            <ListItemText primary="DEPARTURE TIME" variant = "subtitle2" /> 
            {departure ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
            <Collapse in={departure} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>        
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>

        <Divider light />

        <ListItem button onClick={handleCancellation}>
            <ListItemText primary="FREE CANCELLATION"/>
            {cancellation ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
            <Collapse in={cancellation} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>        
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>

            <Divider light />

            <ListItem button onClick={handleBusType}>
                <ListItemText primary="BUS TYPE" />
                {busType ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
                <Collapse in={busType} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>        
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>

            <Divider light />

            <ListItem button onClick={handleBoarding}>
                <ListItemText primary="BOARDING POINTS" />
                {boarding ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
                <Collapse in={boarding} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>        
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>

            <Divider light />

            <ListItem button onClick={handleDropping}>
                <ListItemText primary="DROPPING POINTS" />
                {dropping ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
                <Collapse in={dropping} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>        
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>

        <Divider light />

            <ListItem button onClick={handleAmenities}>
                <ListItemText primary="AMENITIES" />
                {amenities ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
                <Collapse in={amenities} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>        
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                        
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                            
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                        
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                            
                        </ListItem>

                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                        
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                            
                        </ListItem>
                    </List>
                </Collapse>

        <Divider light />

            <ListItem button onClick={handleOperator}>
                <ListItemText primary="BUS OPERATOR" variant = "subtitle2" />
                {operator ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
                <Collapse in={operator} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>        
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
        
      </List>
    </LoadingOverlay>
    )
}
