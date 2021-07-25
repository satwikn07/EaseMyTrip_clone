import React from 'react';
import { Button, Typography } from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import DetailsSection from './DetailsSection';
import { makeStyles } from '@material-ui/styles';
import PriceDicount from './PriceDicount';

import MyApp from './Contact';
const useStyles = makeStyles((theme) => ({
    continueButton: {
        background: "#EF6614",
        color: "white",
        width: "50%"
    }
}))
export const Review = () =>{
    const classes = useStyles()
    return (<Grid container spacing={2} style={{marginLeft:"10%"}}>
        <Grid item xs={8}><DetailsSection /></Grid>
        <Grid item xs={3}><PriceDicount/></Grid>
        <Grid item xs={8}><MyApp /></Grid>{/**Contact details form page*/}
        <Grid item xs={8} style={{textAlign:"center"}}><Button variant="contained" className = {classes.continueButton} >
                                CONTINUE
        </Button></Grid>
    </Grid>)
}
