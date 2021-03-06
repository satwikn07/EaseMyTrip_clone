import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        border: "1px solid lightgrey",
      width: '100%',
      maxWidth: 280,
      backgroundColor: theme.palette.background.paper,
    },
    departureButton : {
        fontSize: "13px",
        marginRight: "98px"
    },
    textSize: {
        fontSize: "10px"
    },
    arrrow : {
        position: "absolute",
        marginLeft: "80%"
    }
  }));

export const FilterDropping = () => {
    const classes = useStyles();

    const [dropping, setDropping] = React.useState(false);
    
    const handleDropping  = () => {
        setDropping(!dropping);
    }
    return (
        <div>
            <ListItem button onClick={handleDropping}>
            <Typography className = {classes.departureButton}>DROPPING POINTS</Typography>
                <div className = {classes.arrrow}>{dropping ? <ExpandLess /> : <ExpandMore />}</div>
            </ListItem>
                <Collapse in={dropping} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>        
                    <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Kalasipalyam</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Anand Rao Circle</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Majestic Intercity</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>LalBagh Infront of Lalbagh Main</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Jai Nagar 4 block</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Silk Road</Typography>
                        </ListItem>
                    </List>
                </Collapse>
        </div>
    )
}
