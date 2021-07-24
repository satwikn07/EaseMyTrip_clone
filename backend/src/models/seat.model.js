const mongoose = require('mongoose');

const seat = new mongoose.Schema({
    booked:{type:Boolean,required:true},
    selected:{type:Boolean,required:true},
    name:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})
const row = new mongoose.Schema({
    seats:{type:[seat],required:true}
})
const seatsSchema = new mongoose.Schema({
    upper_seats:{type:[row],required:true},
    lower_seats:{type:[row],required:true}
})
const Seats = mongoose.model('seat',seatsSchema) //
module.exports = Seats;