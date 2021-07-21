import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
    },
    allButton: {
        marginLeft: "-4%"
    },
    buttonGap: {
        margin: "0 -12.5% 0 0"
    }
  }));

export const TopFilters = () => {

    const classes = useStyles();
    return (
        <div className = {classes.allButton}>
            <Button className = {classes.buttonGap}><img className = {classes.root} src="https://bus.easemytrip.com/new_img/budgeted-bus-v1.png" alt="budget" /></Button>
            <Button className = {classes.buttonGap}><img className = {classes.root} src="https://bus.easemytrip.com/new_img/luxury-buses-v1.png" alt="luxury" /></Button>
            <Button className = {classes.buttonGap}><img className = {classes.root}src="https://bus.easemytrip.com/new_img/top-rated-buses-v1.png" alt="top_rated" /></Button>
            <Button className = {classes.buttonGap}><img className = {classes.root} src="https://bus.easemytrip.com/new_img/ultra-safety-v1.png" alt="ultrasafety" /></Button>
        </div>
    )
}
