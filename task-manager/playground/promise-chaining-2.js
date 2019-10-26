require('../src/db/mongoose');
var Task = require('../src/models/task');

// Task.findByIdAndDelete('5d790bda9f7e320fe84e9d07').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed : false})
// }).then((count)=>{
//     console.log(count);
// }).catch((e)=>{
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false})
    return count;
};

deleteTaskAndCount('5db4c062a6870d27f4798b96').then((count)=>{
    console.log('Incomplete tasks:', count);
}).catch((e)=>{
    console.log('e', e);
})