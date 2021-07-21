import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemIcon from '@material-ui/core/ListItemIcon';

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

export const FilterOperator = () => {
    const classes = useStyles();
    const [operator, setOperator] = React.useState(false);
    const handleOperator = () => {
        setOperator(!operator);
    }
    return (
        <div>
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
        </div>
    )
}
