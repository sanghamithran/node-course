process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = 'https://api.darksky.net/forecast/0ee08d8f805d9445fbcd330617b763c5/37.8267,-122.4233';


// request({url: url, json:true}, (error, response)=>{
//     if(error){
//         console.log("Unable to connect to weather service!");
//     }else if(response.body.error) {
//         console.log("Unable to find the location");
//     } else {
//     // console.log(response.body.currently);
//     temperature = response.body.currently.temperature;
//     precipProbability = response.body.currently.precipProbability;
//     console.log(response.body.daily.data[0].summary+" It is currently "+temperature+" degrees out. There is a "+precipProbability+"% chance of rain");
//     }
// });

// geocode('Bangalore', (error, data) => {
//     console.log("Error", error);
//     console.log("Data", data);
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

