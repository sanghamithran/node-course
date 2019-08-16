const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res)=>{
    res.send([
        {
            name:'Andrew'
        }, {
            name: 'Sarah'
        }
    ]);
});




app.get('/about', (req, res)=>{
    res.send('<h1>About</h1>');
});

app.get('/weather', (req, res)=>{
    res.send({
        location: 'Philadelphia',
        forecast: "It's snowing"
    });
});


app.listen(3000, ()=>{
    console.log("Server is up on port 3000");
})