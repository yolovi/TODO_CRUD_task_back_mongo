const { ObjectId } = require("mongodb");
const connectDB = require("../config/config");
const dayjs = require("dayjs");

const getTasksCollectionModel = async () => {
  //console.log("funcion", connectDB);
  const db = await connectDB();
  const tasksCollection = db.collection("tasks");

  return tasksCollection;
};

const createTaskModel = async (task) => {

  if (!task.title || typeof task.title !== "string") {
    throw new Error("Title is required and must be a string");
  }

  if (task.completed === undefined || typeof task.completed !== "boolean") {
    throw new Error("Completed is required and must be a boolean");
  }

  task = {
    title: task.title,
    completed: task.completed,
    date: dayjs().toISOString(),
  };

  const collection = await getTasksCollectionModel();
  const create = await collection.insertOne(task);

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
