const express = require("express");
const TaskController = require("../controllers/TaskController");
const router = express.Router();

// Basic route
router.get("/", TaskController.sayHello);

router.get("/all", TaskController.getAllTasks)
router.post("/", TaskController.createTask)

module.exports = router;
