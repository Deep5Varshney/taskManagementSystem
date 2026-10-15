const express = require("express");
const taskController = require("../controllers/task.controller");

const router = express.Router();

router.route("/")
  .get(taskController.getTasks)
  .post(taskController.createTask);

router.route("/:id")
  .get(taskController.getTaskById)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;