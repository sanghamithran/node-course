process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
const request = require('request');

const url = 'https://api.darksky.net/forecast/0ee08d8f805d9445fbcd330617b763c5/37.8267,-122.4233';


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


const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibHV0dGFwcGlubzEiLCJhIjoiY2p5enhkbGFiMDFnNTNkcGpxNXBwaXJrMCJ9.XyCerIQWaihThyY6XPjnxw&limit=1"

request({url : geocodeURL , json:true}, (error, response)=>{

    if(error){
        console.log("Unable to connect to location services ")
    } else if (response.body.features.length === 0){
        console.log("Unable to find location. Try another search.")
    } else {
    const latitude =  response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude+" "+longitude);
    }
}) 