//CRUD Operations

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to the DB');
    }

    const db = client.db(database);

    //  db.collection('users').updateOne({
    //     _id: new ObjectID('5d72cb04b0d55b9c94573a05')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    db.collection('tasks').updateMany({
        completed: false
    },{
        $set:{
            completed: true
        }
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })


});