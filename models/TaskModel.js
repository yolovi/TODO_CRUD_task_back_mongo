const { ObjectId } = require("mongodb");
const connectDB = require("../config/config");

const getTasksCollectionModel = async () => {
  console.log("funcion", connectDB);
  const db = await connectDB();
  const tasksCollection = db.collection("tasks");

  return tasksCollection;
};

const createTaskModel = async (task) => {
  const collection = await getTasksCollectionModel();
  const create = await collection.insertOne(task);
  console.log("collection2", collection);
  return create.insertedId;
};

const getAllTasksModel = async () => {
  const collection = await getTasksCollectionModel();
  const tasks = await collection.find({}).toArray();
  console.log("model", tasks);
  return tasks;
};

module.exports = {
  getTasksCollectionModel,
  createTaskModel,
  getAllTasksModel,
};
