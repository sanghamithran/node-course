require('../src/db/mongoose');
var Task = require('../src/models/task');

Task.findByIdAndDelete('5d790bda9f7e320fe84e9d07').then((task)=>{
    console.log(task);
    return Task.countDocuments({completed : false})
}).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})