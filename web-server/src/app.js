const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));

app.get('/weather', (req, res)=>{
    res.send({
        location: 'Philadelphia',
        forecast: "It's snowing"
    });
});


app.listen(3000, ()=>{
    console.log("Server is up on port 3000");
})