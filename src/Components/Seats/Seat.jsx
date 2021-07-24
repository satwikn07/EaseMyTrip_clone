import { Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';


export const Seat = ({seat,seatSelection}) =>{
    const useStyles = makeStyles((theme) => ({
        seatsDistance: {
            marginLeft: "1%",
            width: "13%"
        }
    }))
    const classes = useStyles();
    const {booked,selected} = seat;
    const [select,setSelect] = useState(seat.selected);
    const handleSelect = () =>{
        setSelect(prev=>!prev);
        seatSelection(seat.name)
    }
    console.log(booked,selected);
    if(booked){
        return <Button variant="outlined" size = "40px" className = {classes.seatsDistance} style={{backgroundColor:"rgb(211, 211, 211)"}} disabled>{seat.name}</Button>
    }
    else if (select){
        return <Button variant="outlined" size = "40px" className = {classes.seatsDistance} onClick={()=>setSelect(prev=>!prev)} style={{backgroundColor:"rgb(167, 232, 162)"}}>{seat.name}</Button>
    }
    return (
        <Button variant="outlined" size = "40px" className = {classes.seatsDistance}  onClick={handleSelect} style={{backgroundColor:"white"}}>{seat.name}</Button>
    )
}