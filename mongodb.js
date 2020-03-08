// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to the Database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Amit',
    //     age: 25
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Harsha',
    //         age: 28
    //     },
    //     {
    //         name: 'Chakri',
    //         age: 28
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!')
    //     }
        
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'This is task1',
    //         completed: true
    //     },
    //     {
    //         description: 'This is task2',
    //         completed: true
    //     },
    //     {
    //         description: 'This is task3',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5e52aa32d1d32b191c0cb837") }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch the user!!')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 28 }).toArray((error, users) => {
    //     if(error) {
    //         return console.log('Unable to fetch the users')
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 28 }).count((error, count) => {
    //     if(error) {
    //         return console.log('Unable to fetch the users')
    //     }
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5e52ab49580580110c1e311f")}, (error, task) => {
    //     if(error) {
    //         return console.log('Unable to fetch the user')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     if(error) {
    //         return console.log('Unable to fetch the users')
    //     }

    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     "_id" : new ObjectID("5e529d5aa6bbe60144d5817d")
    // },
    // {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'This is task1'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})