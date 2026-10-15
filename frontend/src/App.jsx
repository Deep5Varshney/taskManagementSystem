import React, { useState, useEffect, useCallback } from 'react';
import { taskApi } from './services/api';
import { Navbar } from './components/Navbar';
import { FilterToolbar } from './components/FilterToolbar';
import { TaskCard } from './components/TaskCard';
import { TaskFormModal } from './components/TaskFormModal';
import { TaskDetailsModal } from './components/TaskDetailsModal';
import { Loader2, AlertCircle, Inbox } from 'lucide-react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(handler);
  }, [search]);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await taskApi.getTasks({
        search: debouncedSearch,
        status: statusFilter,
        priority: priorityFilter,
        sortBy,
        page,
        limit: 6
      });
      setTasks(data.tasks);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, statusFilter, priorityFilter, sortBy, page]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleCreateOrUpdateTask = async (formData) => {
    try {
      if (currentTask) {
        await taskApi.updateTask(currentTask.id, formData);
      } else {
        await taskApi.createTask(formData);
      }
      setIsFormOpen(false);
      setCurrentTask(null);
      fetchTasks();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await taskApi.deleteTask(id);
        fetchTasks();
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const openCreateModal = () => {
    setCurrentTask(null);
    setIsFormOpen(true);
  };

  const openEditModal = (task) => {
    setCurrentTask(task);
    setIsFormOpen(true);
  };

  const openDetailsModal = (task) => {
    setCurrentTask(task);
    setIsDetailsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 flex flex-col">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow w-full px-6 py-8">
        <FilterToolbar
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onOpenCreateModal={openCreateModal}
        />

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-2" />
            <p className="text-sm text-gray-500 dark:text-gray-400">Loading tasks...</p>
          </div>
        )}

        {error && !loading && (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 p-6 rounded-xl text-center my-6">
            <AlertCircle className="w-10 h-10 text-red-600 dark:text-red-400 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-1">Error Loading Data</h3>
            <p className="text-sm text-red-600 dark:text-red-400 mb-4">{error}</p>
            <button
              onClick={fetchTasks}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && tasks.length === 0 && (
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-12 text-center my-6 shadow-sm">
            <Inbox className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">No tasks found</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Get started by creating your first task.</p>
            <button
              onClick={openCreateModal}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Create Task
            </button>
          </div>
        )}
        {!loading && !error && tasks.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onView={openDetailsModal}
                  onEdit={openEditModal}
                  onDelete={handleDeleteTask}
                />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Previous
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <TaskFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleCreateOrUpdateTask}
        initialData={currentTask}
      />

      <TaskDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        task={currentTask}
      />
    </div>
  );
}