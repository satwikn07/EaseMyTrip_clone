

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Button, Typography } from '@material-ui/core';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';

const useStyles = makeStyles((theme) => ({
    root: {
        border: "1px solid lightgrey",
      width: '100%',
      maxWidth: 280,
      backgroundColor: theme.palette.background.paper,
    },
    departureButton : {
        fontSize: "13px",
        marginRight: "43%"
    },
    textSize: {
        fontSize: "9px"
    },
    outline: {
        border: "1px solid lightgrey",
        height: "8vh",
        color: "grey"
    },
    arrrow : {
        position: "absolute",
        marginLeft: "80%"
    }
  }));

export const FilterDeparture = () => {
    const classes = useStyles();
    const [departure, setDeparture] = React.useState(false);

    const handleDeparture = () => {
        setDeparture(!departure);
    }
    return (
        <div>
            <ListItem button onClick={handleDeparture}>
                <Typography className = {classes.departureButton}>DEPARTURE TIME</Typography>
            <div className = {classes.arrrow}>{departure ? <ExpandLess /> : <ExpandMore />}</div>
            </ListItem>
            <Collapse in={departure} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>        
                    <ListItem >
                        <Button className = {classes.outline} ><WbSunnyOutlinedIcon/> <br /> <Typography className = {classes.textSize}  >Before 6 AM</Typography> </Button>
                        <Button className = {classes.outline}><Brightness5OutlinedIcon/> <br /> <Typography className = {classes.textSize}  > 6 AM - 12 PM</Typography> </Button>
                        <Button className = {classes.outline}><Brightness4OutlinedIcon/> <br /> <Typography className = {classes.textSize} >12 PM - 6 PM</Typography> </Button>
                        <Button className = {classes.outline}><NightsStayOutlinedIcon/> <br /> <Typography className = {classes.textSize} >After 6 PM</Typography> </Button>
                    </ListItem>
                </List>
            </Collapse>

        </div>
    )
}
