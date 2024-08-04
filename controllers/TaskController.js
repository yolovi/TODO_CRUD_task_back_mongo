require("dotenv").config();
const { createTaskModel } = require("../models/TaskModel");

const TaskController = {
  sayHello(req, res) {
    res.send("Hello World");
  },

  async createTask(req, res) {
    try {

      const { title, completed } = req.body;

      const newTaskId = await createTaskModel({ title, completed });

      res
        .status(201)
        .send({
          _id: newTaskId,
          title,
          completed,
          date: new Date().toISOString(),
        });
    } catch (error) {
      console.log("aqui", error);
      res.status(500).send({msg: "Error creating the task.", error: error.message});
    }
  },

  async getAllTasks(req, res) {
    try {
      const tasks = await getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: " Error getting the tasks." });
    }
  },
};

module.exports = TaskController;
