const express = require('express');
const router = express.Router();
const Bus = require('../models/bus.model');

//we are fetching all buses
router.get('/',async(req,res)=>{
    const buses = await Bus.find({$and:[{boarding:"Hyderabad"},{destination:"Bangalore"}]}).lean().exec();
    return res.status(200).json({data:buses})
})
//fetching a single bus 
router.get('/:name', async(req,res)=>{
    console.log(req.params);
    const bus = await Bus.findOne({bus_name:req.params.name}).lean().exec();
    return res.status(200).json({data:bus})
})
router.get('/ac', async(req,res)=>{
    console.log(req.params);
    const bus = await Bus.findOne({ac:req.params.name}).lean().exec();
    return res.status(200).json({data:bus})
})

module.exports = router;