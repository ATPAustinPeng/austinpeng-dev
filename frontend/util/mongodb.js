import mongoose from 'mongoose';
// import { MongoClient } from 'mongodb'

let uri = process.env.MONGODB_URI
let db = process.env.MONGODB_DB


if (!uri) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

if (!db) {
    throw new Error(
        'Please define the MONGODB_DB environment variable inside .env.local'
    )
}

const connectToDatabase = async () => mongoose.connect(uri,
    {
        dbName: db,
        useNewUrlParser: true,
    });

export default connectToDatabase;