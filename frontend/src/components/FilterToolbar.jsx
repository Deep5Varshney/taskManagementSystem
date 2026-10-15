import React from 'react';
import { Search, Plus, Filter, ArrowUpDown } from 'lucide-react';

export const FilterToolbar = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortBy,
  setSortBy,
  onOpenCreateModal
}) => {
  return (
    <div className="w-full bg-white dark:bg-gray-800/90 backdrop-blur-sm p-5 rounded-2xl shadow-xs border border-gray-200/70 dark:border-gray-700/70 space-y-4 mb-8 transition-all">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="relative w-full lg:w-[420px]">
          <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search tasks by title or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
          />
        </div>
        <button
          onClick={onOpenCreateModal}
          className="w-full lg:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>New Task</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-3 items-center pt-3 border-t border-gray-100 dark:border-gray-700/60 text-sm">
        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 font-medium mr-1">
          <Filter className="w-4 h-4 text-blue-500" />
          <span>Filters:</span>
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all cursor-pointer"
        >
          <option value="all">All Statuses</option>
          <option value="pending"> Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all cursor-pointer"
        >
          <option value="all">All Priorities</option>
          <option value="low">Low Priority</option>
          <option value="medium"> Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 font-medium ml-auto">
          <ArrowUpDown className="w-4 h-4 text-indigo-500" />
          <span>Sort By:</span>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all cursor-pointer"
        >
          <option value="createdAt">Created Date</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority Level</option>
        </select>
      </div>
    </div>
  );
};