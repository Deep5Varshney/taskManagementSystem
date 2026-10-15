let tasks = [
 {
    id: "1",
    title: "Morning gym workout routine",
    description: "Complete core stability exercises, cardio warmup, and upper body weight training.",
    status: "completed",
    priority: "high",
    dueDate: "2026-10-15",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Review system design notes",
    description: "Go over distributed caching patterns, load balancers, and database sharding principles.",
    status: "in_progress",
    priority: "medium",
    dueDate: "2026-10-20",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

class TaskService {
  async getAllTasks(query = {}) {
    let result = [...tasks];

    if (query.search) {
      const searchTerm = query.search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(searchTerm) ||
          t.description.toLowerCase().includes(searchTerm)
      );
    }

    if (query.status && query.status !== "all") {
      result = result.filter((t) => t.status === query.status);
    }

    if (query.priority && query.priority !== "all") {
      result = result.filter((t) => t.priority === query.priority);
    }

    if (query.sortBy) {
      result.sort((a, b) => {
        if (query.sortBy === "priority") {
          const weights = { high: 3, medium: 2, low: 1 };
          return weights[b.priority] - weights[a.priority];
        } else if (query.sortBy === "dueDate") {
          return new Date(a.dueDate) - new Date(b.dueDate);
        } else {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
      });
    } else {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedItems = result.slice(startIndex, endIndex);

    return {
      totalTasks: result.length,
      totalPages: Math.ceil(result.length / limit) || 1,
      currentPage: page,
      tasks: paginatedItems,
    };
  }

  async getTaskById(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      const error = new Error(`Task with id ${id} not found`);
      error.statusCode = 404;
      throw error;
    }
    return task;
  }

  async createTask(data) {
    const { title, description, status, priority, dueDate } = data;

    if (!title || !description) {
      const error = new Error("Title and description are required fields.");
      error.statusCode = 400;
      throw error;
    }

    const newTask = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      status: status || "pending",
      priority: priority || "medium",
      dueDate: dueDate || new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    return newTask;
  }

  async updateTask(id, data) {
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      const error = new Error(`Task with id ${id} not found`);
      error.statusCode = 404;
      throw error;
    }

    const existingTask = tasks[taskIndex];
    const updatedTask = {
      ...existingTask,
      title: data.title !== undefined ? data.title.trim() : existingTask.title,
      description: data.description !== undefined ? data.description.trim() : existingTask.description,
      status: data.status !== undefined ? data.status : existingTask.status,
      priority: data.priority !== undefined ? data.priority : existingTask.priority,
      dueDate: data.dueDate !== undefined ? data.dueDate : existingTask.dueDate,
      updatedAt: new Date().toISOString(),
    };

    tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  async deleteTask(id) {
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      const error = new Error(`Task with id ${id} not found`);
      error.statusCode = 404;
      throw error;
    }
    const deleted = tasks.splice(taskIndex, 1);
    return deleted[0];
  }
}

module.exports = new TaskService();