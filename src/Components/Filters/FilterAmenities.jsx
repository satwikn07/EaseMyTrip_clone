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

export const FilterAmenities = () => {
    const classes = useStyles();

    const [amenities, setAmenities] = React.useState(false);

    const handleAmenities = () => {
        setAmenities(!amenities);
    }
    return (
        <div>
            <ListItem button onClick={handleAmenities}>
                <ListItemText primary="AMENITIES" />
                {amenities ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
                <Collapse in={amenities} timeout="auto" unmountOnExit>
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
                            /> <Typography>Blanket</Typography>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Personal TV</Typography>
                        </ListItem>
                        
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Pillow</Typography>
                        </ListItem>

                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Wifi</Typography>
                        </ListItem>
                        
                        <ListItem button className={classes.nested}>
                            <Checkbox
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> <Typography>Toilet</Typography>
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
