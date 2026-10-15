# TaskFlow Manager – Full-Stack Task Management System

Hey there! Welcome to **TaskFlow Manager**, a production-grade, highly responsive full-stack task management application built as part of an interview assignment.

The goal of this project was to build a sleek, modern, and robust task dashboard that balances professional software architecture (clean separation of concerns, centralized error handling, input validation) with a polished user experience (glassmorphism UI, real-time search debouncing, and fluid dark/light mode switching).

---

##  Core Functionality & Features

* **Complete CRUD Operations:** Create, read, update, and delete tasks seamlessly with instant UI feedback.
* **Smart Filtering & Sorting:** Filter tasks dynamically by status (`pending`, `in_progress`, `completed`) or priority (`low`, `medium`, `high`), and sort them by creation date, due date, or priority level.

* **Debounced Search:** Built-in 400ms search debouncing to optimize performance and prevent excessive API requests while typing.
* **Pagination Support:** Clean server-side pagination handling to keep the interface snappy regardless of dataset size.

* **Theme Customization:** Seamless dark and light mode toggle powered by Tailwind CSS.
* **Responsive Grid Layout:** Adapts fluidly from single-column mobile screens up to multi-column desktop grids without awkward side whitespace.

---

##  Extra Added Features (Bonus Polish)

* **Glassmorphism UI Accents:** Modern frosted-glass headers, smooth transitions, and custom status badges.
* **Robust Input Validation:** Dual-layer validation (both client-side modal checks and backend service safeguards) ensuring no blank or malformed tasks slip through.

* **Centralized Error Handling:** Global middleware wrapper on the backend ensuring uniform, clean JSON error responses.

* **In-Memory Persistence:** Fast, zero-config data handling using backend memory arrays (clean restart cycles without needing complex database seeding).

---

##  Project Directory Structure

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

##  Tech Stack

* **Frontend:** React, Vite, Tailwind CSS, Lucide React Icons
* **Backend:** Node.js, Express.js (RESTful API architecture)
* **Data Strategy:** In-memory storage (Data resets gracefully upon server restart)

---

##  Setup & Installation Instructions

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

##  API Documentation Summary

| Method | Endpoint | Description | Status Codes |
| --- | --- | --- | --- |
| **GET** | `/api/tasks` | Fetch all tasks (supports query filters for search, status, priority, sorting, and pagination) | `200 OK`, `500 Error`<br> |
| **GET** | `/api/tasks/:id` | Fetch a single task by its unique ID | `200 OK`, `404 Not Found`<br> |
| **POST** | `/api/tasks` | Create a new task (validates required title & description fields) | `201 Created`, `400 Bad Request`<br> |
| **PUT** | `/api/tasks/:id` | Update an existing task by ID | `200 OK`, `404 Not Found`<br> |
| **DELETE** | `/api/tasks/:id` | Delete a task by ID | `200 OK`, `404 Not Found`<br> |

### Postman Collection Testing
For quick API verification, a fully configured **Postman Collection** has been included in the root directory under the filename **`postman_collection.json`**. 

**How to use it:**
1. Open **Postman**.
2. Click the **Import** button in the top left.
3. Drag and drop or upload the `postman_collection.json` file from your project root.
4. Test all endpoints instantly against your running backend at `http://localhost:5000/api/tasks`.

## Application Preview & Visual Walkthrough

Here is a visual breakdown of TaskFlow Manager's user interface, responsive controls, and state handlings:

* **Intuitive Light Theme Dashboard:** The clean, SaaS-grade primary interface featuring the top navigation bar, filter toolbar, and responsive task cards.
  *(Placeholder: `![Light Theme Dashboard](<img width="1917" height="857" alt="Screenshot 2026-10-15 225259" src="https://github.com/user-attachments/assets/11d751b7-8e1f-4c31-bbef-81467423206c" />
`)*

* **Sleek Dark Mode Theme:** Seamless theme switching utilizing Tailwind CSS dark variants to reduce eye strain in low-light environments.
  *(Placeholder: `![Dark Theme Dashboard](<img width="1917" height="796" alt="Screenshot 2026-10-15 225313" src="https://github.com/user-attachments/assets/0ee1f818-38f0-4b7f-9235-f94d3b256171" />
)`)*

* **Comprehensive Task Overview Modal:** Detailed view displaying complete task metadata, including exact creation timestamps and last updated logs.
  *(Placeholder: `![Task Details Modal](<img width="1917" height="825" alt="Screenshot 2026-10-15 225330" src="https://github.com/user-attachments/assets/58166387-7d29-4299-a4e0-ada980f8fcd9" />
)`)*

* **Interactive Task Editing Modal:** Seamlessly modify existing task fields, update statuses, or adjust priorities through the pre-populated form.
  *(Placeholder: `![Edit Task Modal](<img width="1917" height="868" alt="Screenshot 2026-10-15 225347" src="https://github.com/user-attachments/assets/e05c59f3-b0e4-45ce-8336-0f6a3ea8b6b5" />
)`)*

* **Deletion Flow & Confirmation:** Clean confirmation dialog protecting against accidental task removals.
  *(Placeholder: `![Delete Confirmation](<img width="1917" height="872" alt="Screenshot 2026-10-15 230915" src="https://github.com/user-attachments/assets/1a35de89-e932-483a-864d-6ccb26f3381d" /> <img width="1917" height="697" alt="Screenshot 2026-10-15 230924" src="https://github.com/user-attachments/assets/d0e603da-ede0-41e7-957c-e94490bc61c9" />

)`)*

* **New Task Creation Form:** Interactive creation modal featuring real-time client-side input validation for required title and description fields.
  *(Placeholder: `![Create Task Modal](<img width="1917" height="880" alt="Screenshot 2026-10-15 225440" src="https://github.com/user-attachments/assets/84f12b7f-e672-45d1-9f88-8e0cbe81cf2c" />
)`)*

* **Advanced Filter & Sort Toolbar:** Robust control center supporting multi-parameter queries:
  * **Status Filtering:** Filter instantly by *Pending*, *In Progress*, or *Completed*.
    
    <img width="627" height="471" alt="Status Filter View" src="https://github.com/user-attachments/assets/0ea6460a-16c4-46af-ae2a-0df3fbf9949d" />

  * **Priority Filtering:** Isolate tasks by *Low*, *Medium*, or *High* priority levels.
 
    <img width="655" height="460" alt="Sorting Options View" src="https://github.com/user-attachments/assets/a974c21e-40bb-4680-8b12-c89a751f54be" />

  * **Dynamic Sorting:** Sort datasets effortlessly by *Created Date*, *Due Date*, or *Priority Level*.
    
     <img width="516" height="340" alt="Priority Filter View" src="https://github.com/user-attachments/assets/25d6486e-3682-4aff-8a3b-4e21832deb08" />

* **Targeted Filter Match State:** Clean grid isolation when filters match specific criteria (e.g., viewing pending tasks under universal priority scopes).
  *(Placeholder: `![Filtered Results Match](<img width="1917" height="652" alt="Screenshot 2026-10-15 225527" src="https://github.com/user-attachments/assets/185b7595-9c68-4855-88f7-2bef7b364082" />
)`)*

* **Empty State Handling:** Graceful placeholder UI displayed when search queries or filters yield zero matching records.
  *(Placeholder: `![Empty State Screen](<img width="1911" height="802" alt="Screenshot 2026-10-15 225541" src="https://github.com/user-attachments/assets/c86ede80-8566-44d8-a675-1dbd47e1dfbf" />
)`)*

* **Backend Error & Server-Down State:** Robust error boundary presentation featuring alert messaging and an integrated **Retry** action button if the API server goes offline.
  *(Placeholder: `![Server Error State](<img width="1917" height="832" alt="Screenshot 2026-10-15 225618" src="https://github.com/user-attachments/assets/63ec5d79-8b2f-4880-90c7-f15fa35e7f31" />
)`)*
