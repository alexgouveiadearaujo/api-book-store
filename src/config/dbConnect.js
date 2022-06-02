import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alex:alex1989@alexsandro.5cpdv.mongodb.net/node");

let db = mongoose.connection;

export default db;