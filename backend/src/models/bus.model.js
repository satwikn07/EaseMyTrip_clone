const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    bus_name:{type:Number,required:true},
    boarding:{type:String,required:true},
    destination:{type:String,required:true},
    vacant_seats:{type:Number,required:true},
    ratings:{type:Number,required:true},
    start_time:{type:String,required:true},
    reach_time:{type:String,required:true},
    ac:{type:Boolean,required:true},
    blanket:{type:Boolean,required:true},
    tv:{type:Boolean,required:true},
    pillow:{type:Boolean,required:true},
    wifi:{type:Boolean,required:true},
    toilet:{type:Boolean,required:true},
},{
    versionKey:false,
    timestamps:true
})
const Bus = mongoose.model('bus',busSchema) //busSchema
module.exports = Bus;
// {
        //     "ratings": 2.8,
//     "price": 1163,
//     "start_time": "5:44 AM",
//     "reach_time": "6:54 PM",
//     "duration": "13h 10m",
//     "ac": true,
//     "blanket": true,
//     "personal_tv": true,
//     "pillow": false,
//     "wifi": false,
//     "toilet": true,
//     "before_6AM": true
//   },
//     "id": 1,
//     "bus_name": "Langosh, Kessler and Doyle",
//     "boarding": "Hyderabad",
//     "destination": "chennai",
//     "total_seats": 69,
//     "occupied_seats": 12,
//     "lower_seat_matrix": [
//       [
//         {
//           "booked": false,
//           "selected": false,
//           "name": "L1"
//         },
//         {
//           "booked": true,
//           "name": "L2"
//         },
//         {
//           "booked": false,
//           "selected": false,
//           "name": "L3"
//         },
//         {
//           "booked": false,
//           "selected": false,
//           "name": "L4"
//         },
//         {
//           "booked": true,
//           "name": "L5"
//         }
//       ],
//       [
//         {
//           "booked": true,
//           "name": "L6"
//         },
//         {
//           "booked": false,
//           "selected": false,
//           "name": "L7"
//         },
//         {
//           "booked": false,
//           "selected": false,
//           "name": "L8"
//         },
//         {
//           "booked": true,
//           "name": "L9"
//         },
//         {
//           "booked": true,
//           "name": "L10"
//         }
//       ],
//       [
//         {
//           "booked": true,
//           "selected": false,
//           "name": "L11"
//         },
//         {
//           "booked": false,
//           "name": "L12"
//         },
//         {
//           "booked": false,
//           "name": "L13"
//         },
//         {
//           "booked": true,
//           "selected": false,
//           "name": "L14"
//         },
//         {
//           "booked": true,
//           "selected": false,
//           "name": "L15"
//         }
//       ]
//     ],
//     "upper_seat_matrix": [
//       [
//         {
//           "booked": false,
//           "selected": false,
//           "name": "U1"
//         },
//         {
//           "booked": true,
//           "name": "U2"
//         },
//         {
//           "booked": false,
//           "selected": false,
//           "name": "U3"
//         },
//         {
//           "booked": false,
//           "selected": false,
//           "name": "U4"
//         },
//         {
//           "booked": true,
//           "name": "U5"
//         }
//       ],
//       [
//         {
//           "booked": false,
//           "selected": false,
//           "name": "U6"
//         },
//         {
//           "booked": true,
//           "name": "U7"
//         },
//         {
//           "booked": true,
//           "name": "U8"
//         },
//         {
//           "booked": false,
//           "selected": false,
//           "name": "U9"
//         },
//         {
//           "booked": true,
//           "name": "U10"
//         }
//       ],
//       [
//         {
//           "booked": false,
//           "selected": false,
//           "name": "U11"
//         },
//         {
//           "booked": false,
//           "selected": false,
//           "name": "U12"
//         },
//         {
//           "booked": true,
//           "name": "U13"
//         },
//         {
//           "booked": false,
//           "selected": false,
//           "name": "U14"
//         },
//         {
//           "booked": false,
//           "selected": false,
//           "name": "U15"
//         }
//       ]
//     ],
