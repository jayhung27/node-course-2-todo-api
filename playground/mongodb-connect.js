// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);    
    //     }
    //     console.log(JSON.string ify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, ago, location)
    db.collection('Users').insertOne({
        name: 'Jay',
        age: 29,
        location: 'Taipei'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user', err);
        }
        console.log('Insert data: \n');
        console.log(result.ops[0]._id.getTimestamp());
    });


    client.close();
});