// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    db.collection('Users').findOneAndUpdate({
        name: 'Jay'
    }, {
        $set:{
            name: 'Jay'
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: true
    }).then((result) => {
        console.log(result);
    });


















    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c1f3bec1de7030664c1f7e7')
    // },{
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    client.close();
});