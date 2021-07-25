const express = require('express');
const app = express();
const busController = require('./controllers/bus.controller');
const seatController = require('./controllers/seat.controller');
app.use(express.json());
app.use('/buses',busController);
app.use('/seats', seatController);
module.exports = app;
// "city": [
  //   {
  //     "id": 1,
  //     "city_name": "Bangalore",
  //     "boarding_points": [
  //       "Kalasipalyam",
  //       "Anand Rao Circle",
  //       "Majestic Intercity",
  //       "LalBagh Infront of Lalbagh Main",
  //       "Jai Nagar 4 block",
  //       "Silk Road"
  //     ]
  //   },
  //   {
  //     "id": 2,
  //     "city_name": "Hyderabad",
  //     "boarding_points": [
  //       "Shamsabad",
  //       "Aramnagar",
  //       "MehndiPatnam",
  //       "SR nagar",
  //       "Panjagutta"
  //     ]