require("dotenv").config();

const { MongoClient } = require("mongodb");
const MONGO_URI = process.env.MONGO_URI
const db = new MongoClient( MONGO_URI )

const dbConnection = async() => {

    try {
   
        await db.connect();
        console.log("Data Base connected successfully")
       
        
    } catch (error) {
        console.log(error);
        throw new Error("Error connecting Data Base")
    }
}

module.exports = {
    dbConnection,
};