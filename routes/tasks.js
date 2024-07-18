const express = require("express");
const TaskController = require("../controllers/TaskController");
const router = express.Router();

// Basic route
router.get("/", TaskController.sayHello);

module.exports = router;
