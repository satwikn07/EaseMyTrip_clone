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


export const FilterBoarding = () => {
    const classes = useStyles();
    const [boarding, setBoarding] = React.useState(false);
    const handleBoarding = () => {
        setBoarding(!boarding);
    }
    return (
        <div>
            <ListItem button onClick={handleBoarding}>
            <Typography className = {classes.departureButton}>BOARDING POINTS</Typography>
                <div className = {classes.arrrow} >{boarding ? <ExpandLess /> : <ExpandMore />}</div>
            </ListItem >
                <Collapse in={boarding} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding >        
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Shamsabad</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Aramnagar</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>MehndiPatnam</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>SR nagar</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography >Panjagutta</Typography>
                        </ListItem>
                    </List>
                </Collapse>
        </div>
    )
}
