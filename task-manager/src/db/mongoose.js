const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://san:san@cluster0-tiacs.mongodb.net/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});