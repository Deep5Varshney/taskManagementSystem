# TaskFlow Manager – Full-Stack Task Management System

Hey there! Welcome to **TaskFlow Manager**, a production-grade, highly responsive full-stack task management application built as part of an interview assignment.

The goal of this project was to build a sleek, modern, and robust task dashboard that balances professional software architecture (clean separation of concerns, centralized error handling, input validation) with a polished user experience (glassmorphism UI, real-time search debouncing, and fluid dark/light mode switching).

---

## ✨ Core Functionality & Features

* **Complete CRUD Operations:** Create, read, update, and delete tasks seamlessly with instant UI feedback.
* **Smart Filtering & Sorting:** Filter tasks dynamically by status (`pending`, `in_progress`, `completed`) or priority (`low`, `medium`, `high`), and sort them by creation date, due date, or priority level.

* **Debounced Search:** Built-in 400ms search debouncing to optimize performance and prevent excessive API requests while typing.
* **Pagination Support:** Clean server-side pagination handling to keep the interface snappy regardless of dataset size.

* **Theme Customization:** Seamless dark and light mode toggle powered by Tailwind CSS.
* **Responsive Grid Layout:** Adapts fluidly from single-column mobile screens up to multi-column desktop grids without awkward side whitespace.

---

## 🌟 Extra Added Features (Bonus Polish)

* **Glassmorphism UI Accents:** Modern frosted-glass headers, smooth transitions, and custom status badges.
* **Robust Input Validation:** Dual-layer validation (both client-side modal checks and backend service safeguards) ensuring no blank or malformed tasks slip through.

* **Centralized Error Handling:** Global middleware wrapper on the backend ensuring uniform, clean JSON error responses.

* **In-Memory Persistence:** Fast, zero-config data handling using backend memory arrays (clean restart cycles without needing complex database seeding).

---

## 📂 Project Directory Structure

```text
taskManagementSystem/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Handles incoming HTTP requests and formats responses
│   │   ├── middleware/    # Global error handlers and request validators
│   │   ├── routes/        # Express REST API endpoint routers
│   │   ├── services/      # Core business logic and in-memory data store
│   │   └── server.js      # Express application entry point & server setup
│   ├── .env.example       # Template for backend environment variables
│   └── package.json       # Backend dependencies (express, cors, dotenv)
├── frontend/
│   ├── src/
│   │   ├── components/    # Modular UI components (Navbar, Cards, Modals, Toolbar)
│   │   ├── services/      # API client wrappers for clean communication
│   │   ├── App.jsx        # Root application component and state orchestrator
│   │   └── index.css      # Tailwind CSS v4 configurations and global styles
│   ├── .env.example       # Template for frontend environment variables
│   └── package.json       # Frontend dependencies (react, vite, lucide-react, tailwindcss)
└── README.md              # Comprehensive project documentation

```
---

## 🛠️ Tech Stack

* **Frontend:** React, Vite, Tailwind CSS, Lucide React Icons
* **Backend:** Node.js, Express.js (RESTful API architecture)
* **Data Strategy:** In-memory storage (Data resets gracefully upon server restart)

---

## ⚙️ Setup & Installation Instructions

To run this project locally, make sure you have **Node.js (v18 or higher)** installed on your machine.

You will need **two separate terminal windows** open simultaneously—one for the backend server and one for the frontend client.

### Step 1: Clone / Open the Project

Open your terminal and navigate to your project root folder:

```bash
cd D:\Tech.M\taskManagementSystem

```
---

### Step 2: Set Up and Run the Backend

1. Navigate to the backend directory:
```bash
cd backend
```
2. Install the required dependencies:
```bash
npm install
```
3. Set up your environment variables:
* Copy the example environment file:
```bash
cp .env.example .env
```
* *(Optional)* Verify your `backend/.env` file matches your setup:
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```
4. Start the backend development server:
```bash
npm run dev

```
The backend server will spin up successfully at `http://localhost:5000`.

---
### Step 3: Set Up and Run the Frontend
1. Open a **second terminal window** and navigate to the frontend directory:
```bash
cd D:\Tech.M\taskManagementSystem\frontend

```
2. Install the frontend dependencies:
```bash
npm install

```
3. Set up your environment variables:
* Copy the example environment file:
```bash
cp .env.example .env

```
* *(Optional)* Verify your `frontend/.env` file points to your backend:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```
4. Start the frontend development server:
```bash
npm run dev
```
Vite will launch your application live at `http://localhost:5173`. Open this URL in your browser to test the app!

---

## 🔌 API Documentation Summary

| Method | Endpoint | Description | Status Codes |
| --- | --- | --- | --- |
| **GET** | `/api/tasks` | Fetch all tasks (supports query filters for search, status, priority, sorting, and pagination) | `200 OK`, `500 Error`<br> |
| **GET** | `/api/tasks/:id` | Fetch a single task by its unique ID | `200 OK`, `404 Not Found`<br> |
| **POST** | `/api/tasks` | Create a new task (validates required title & description fields) | `201 Created`, `400 Bad Request`<br> |
| **PUT** | `/api/tasks/:id` | Update an existing task by ID | `200 OK`, `404 Not Found`<br> |
| **DELETE** | `/api/tasks/:id` | Delete a task by ID | `200 OK`, `404 Not Found`<br> |
