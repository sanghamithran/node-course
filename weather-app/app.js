process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
const request = require('request');

const url = 'https://api.darksky.net/forecast/0ee08d8f805d9445fbcd330617b763c5/37.8267,-122.4233';


request({url: url}, (error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data.currently);
});