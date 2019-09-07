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

    // db.collection('users').findOne({ _id: new ObjectID("5d72dddf99f1104ea4708a28") },(error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age: 27}).toArray((error, users)=>{
    //     console.log(users);
    // });
     
    // db.collection('users').find({ age: 27}).count((error, count)=>{
    //     console.log(count);
    // });

    db.collection('tasks').findOne({_id: ObjectID("5d72d9cf782549ac345f4812")},(error, task)=>{
        if(error){
            return console.log(error);
        }

        console.log(task);
    });

    db.collection('tasks').find({completed: false}).toArray((error, tasks)=>{
        console.log(tasks);
    })


});