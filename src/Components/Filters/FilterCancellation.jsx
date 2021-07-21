import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
        textSize: {
            fontSize: "10px"
        }
  }));


export const FilterCancellation = () => {
    const classes = useStyles();
    const [cancellation, setCancellation] = React.useState(false);
    const handleCancellation = () => {
        setCancellation(!cancellation);
    }
    return (
        <div>
            <ListItem button onClick={handleCancellation}>
            <ListItemText primary="FREE CANCELLATION"/>
            {cancellation ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
            <Collapse in={cancellation} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>        
                    <ListItem button className={classes.nested}>
                        <Checkbox
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        /> <Typography>24 hours</Typography>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Checkbox
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        /> <Typography>72 hours</Typography>
                    </ListItem>
                </List>
            </Collapse>
        </div>
    )
}
