require("dotenv").config();
const { createTaskModel } = require("../models/TaskModel");

const TaskController = {
  sayHello(req, res) {
    res.send("Hello World");
  },

  async createTask(req, res) {
      try {
      const task = req.body;
      const newTask = await createTaskModel(task);

      res.status(201).json({ _id: newTask, ...task });
      console.log("res", res);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: "Error creating the task" });
    }
  },

  async getAllTasks(req, res) {
    try {
        const tasks = await getAllTasks()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ error: " Error getting the tasks"})
    }
  },
};

module.exports = TaskController;
