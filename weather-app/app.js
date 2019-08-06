process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
const request = require('request');

const url = 'https://api.darksky.net/forecast/0ee08d8f805d9445fbcd330617b763c5/37.8267,-122.4233?';


request({url: url, json:true}, (error, response)=>{
    // console.log(response.body.currently);
    temperature = response.body.currently.temperature;
    precipProbability = response.body.currently.precipProbability;
    console.log(response.body.daily.data[0].summary+" It is currently "+temperature+" degrees out. There is a "+precipProbability+"% chance of rain");
});