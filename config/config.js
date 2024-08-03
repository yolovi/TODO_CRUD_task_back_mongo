const { MongoClient } = require("mongodb");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = "CRUD_Tasks";

let db;

const client = new MongoClient(MONGO_URI);
//const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const listDatabases = async () => {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
};

const connectDB = async () => {
  if (!db) {
    try {
      await client.connect();
      db = client.db(DB_NAME);
      console.log(`Data Base ${DB_NAME} connected successfully`);

      await listDatabases(client);
      return { client };
    } catch (error) {
      console.log(error);
      throw new Error({msg: "Error connecting Data Base", error});
    } 
  }
  return db;
};

module.exports = connectDB;
