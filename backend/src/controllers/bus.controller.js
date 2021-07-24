const express = require('express');
const router = express.Router();
const Bus = require('../models/bus.model');

//we are fetching all buses
router.get('/',async(req,res)=>{
    const buses = await Bus.find({$and:[{boarding:"Hyderabad"},{destination:"Bangalore"}]}).lean().exec();
    return res.status(200).json({data:buses})
})
//fetching a single bus 
router.get('/:id', async(req,res)=>{
    const bus = await Bus.findById(req.params.id);
    return res.status(200).json({data:bus})
})

module.exports = router;