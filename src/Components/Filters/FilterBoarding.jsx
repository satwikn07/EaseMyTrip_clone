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


export const FilterBoarding = () => {
    const classes = useStyles();
    const [boarding, setBoarding] = React.useState(false);
    const handleBoarding = () => {
        setBoarding(!boarding);
    }
    return (
        <div>
            <ListItem button onClick={handleBoarding}>
                <ListItemText primary="BOARDING POINTS" />
                {boarding ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
                <Collapse in={boarding} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>        
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
                            /> <Typography>Panjagutta</Typography>
                        </ListItem>
                    </List>
                </Collapse>
        </div>
    )
}
