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
        marginRight: "156px"
    },
    textSize: {
        fontSize: "10px"
    }
  }));

export const FilterBusType = () => {
    const classes = useStyles();
    const [busType, setBusType] = React.useState(false);
    const handleBusType = () => {
        setBusType(!busType);
    }
    return (
        <div>
            <ListItem button onClick={handleBusType}>
            <Typography className = {classes.departureButton}>BUS TYPE</Typography>
                {busType ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
                <Collapse in={busType} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>        
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>AC</Typography>
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
