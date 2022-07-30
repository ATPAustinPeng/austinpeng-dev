import mongoose from "mongoose";

let uri = process.env.MONGODB_URI;
let db = process.env.MONGODB_DB;

if (!uri) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env.local"
	);
}

if (!db) {
	throw new Error(
		"Please define the MONGODB_DB environment variable inside .env.local"
	);
}

const connectToDatabase = async () =>
	mongoose
		.connect(uri, {
			dbName: db,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useCreateIndex: true,
		})
		.then(() => {
			console.log("MongoDB Connected");
		})
		.catch((err) => console.log(err));

export default connectToDatabase;
