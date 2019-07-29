const fs = require("fs");

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const data = JSON.parse(dataBuffer);
// console.log(data.title);
 

const dataBuffer = fs.readFileSync("1-json.json");
const data = JSON.parse(dataBuffer);

data.name = "San";
data.age = 22;
data.planet="earth";

const jsonString = JSON.stringify(data);
console.log(jsonString);

fs.writeFileSync("1-json.json", jsonString);