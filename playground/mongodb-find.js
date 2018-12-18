// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count');
    //     console.log(count);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    var name = 'Irene';
    db.collection('Users').find({name: name}).toArray().then((docs) => {
        console.log('Name is ', name);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch User: ', name)
    });

    client.close();
});