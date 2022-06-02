import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alex:<password>@alexsandro.5cpdv.mongodb.net/<database>");

let db = mongoose.connection;

export default db;