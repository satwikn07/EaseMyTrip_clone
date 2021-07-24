const express = require('express');
const router = express.Router();
const Seats = require('../models/seat.model');

//fetching seats of a single bus 
router.get('/:id', async(req,res)=>{
    const seats = await Seats.findById(req.params.id);
    return res.status(200).json({data:seats})
})

module.exports = router;