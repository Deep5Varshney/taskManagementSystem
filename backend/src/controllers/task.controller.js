const taskService = require("../services/task.service");

class TaskController {
  async getTasks(req, res, next) {
    try {
      const data = await taskService.getAllTasks(req.query);
      return res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  }

  async getTaskById(req, res, next) {
    try {
      const task = await taskService.getTaskById(req.params.id);
      return res.status(200).json({ success: true, data: task });
    } catch (error) {
      next(error);
    }
  }

  async createTask(req, res, next) {
    try {
      const newTask = await taskService.createTask(req.body);
      return res.status(201).json({ success: true, data: newTask });
    } catch (error) {
      next(error);
    }
  }

  async updateTask(req, res, next) {
    try {
      const updatedTask = await taskService.updateTask(req.params.id, req.body);
      return res.status(200).json({ success: true, data: updatedTask });
    } catch (error) {
      next(error);
    }
  }

  async deleteTask(req, res, next) {
    try {
      const deletedTask = await taskService.deleteTask(req.params.id);
      return res.status(200).json({ success: true, message: "Task deleted successfully", data: deletedTask });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TaskController();