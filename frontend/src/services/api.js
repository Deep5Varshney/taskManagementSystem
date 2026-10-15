const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const taskApi = {
  async getTasks(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${API_BASE_URL}/tasks?${queryString}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "Failed to fetch tasks");
    return data.data;
  },

  async getTaskById(id) {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "Failed to fetch task details");
    return data.data;
  },

  async createTask(taskData) {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "Failed to create task");
    return data.data;
  },

  async updateTask(id, taskData) {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "Failed to update task");
    return data.data;
  },

  async deleteTask(id) {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "Failed to delete task");
    return data.data;
  }
};