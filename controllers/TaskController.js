require("dotenv").config();
const { createTaskModel } = require("../models/TaskModel");

const TaskController = {
  sayHello(req, res) {
    res.send("Hello World");
  },

  async createTask(req, res) {
    try {

      const { title, completed } = req.body;

      if (!title || typeof title !== "string") {
        return res
          .status(400)
          .json({ error: "Title is required and must be a string" });
      }

      if (completed === undefined || typeof completed !== "boolean") {
        return res
          .status(400)
          .json({ error: "Completed is required and must be a boolean" });
      }

      const newTaskId = await createTaskModel({ title, completed });

      res
        .status(201)
        .json({
          _id: newTaskId,
          title,
          completed,
          date: new Date().toISOString(),
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error creating the task" });
    }
  },

  async getAllTasks(req, res) {
    try {
      const tasks = await getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: " Error getting the tasks" });
    }
  },
};

module.exports = TaskController;
