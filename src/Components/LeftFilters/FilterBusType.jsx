import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    root: {
        border: "1px solid lightgrey",
      width: '100%',
      maxWidth: 280,
      backgroundColor: theme.palette.background.paper,
    },
    departureButton : {
        fontSize: "13px",
        marginRight: "156px"
    },
    textSize: {
        fontSize: "10px"
    },
    arrrow : {
        position: "absolute",
        marginLeft: "80%"
    }
  }));

export const FilterBusType = ({setBuses}) => {
    const classes = useStyles();
    const [busType, setBusType] = React.useState(false);
    const handleBusType = async() => {
        setBusType(!busType);   
       
    }
    const handleFilter = async(e) =>{
            if(e.target.checked){
                setBuses(prev=>prev.filter(bus=>bus.ac===true));
            }else{
                const data = await axios.get(
                    "http://localhost:8000/buses"
                  );
                  // console.log(data)
                  setBuses(data.data.data);
            }
    }
    return (
        <div>
            <ListItem button onClick={handleBusType}>
            <Typography className = {classes.departureButton}>BUS TYPE</Typography>
                <div className = {classes.arrrow}>{busType ? <ExpandLess /> : <ExpandMore />}</div>
            </ListItem>
                <Collapse in={busType} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>        
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                onClick={(e)=>handleFilter(e)}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography >AC</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>NON-AC</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Seater</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Sleeper</Typography>
                        </ListItem>
                    </List>
                </Collapse>
        </div>
    )
}
