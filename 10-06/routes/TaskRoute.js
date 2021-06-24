const express = require("express");
const router = express();
const taskController = require("../controller/TaskController");

router.post("/", taskController.addTask);

router.get("/:id", taskController.getTaskById);

router.get("/user/:userId", taskController.getTasksByUserId);

router.get("/pdf/:userId", taskController.generateTaskPDF);

module.exports = router;
