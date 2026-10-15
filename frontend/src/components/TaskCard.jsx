import React from 'react';
import { Calendar, Edit2, Trash2, Eye } from 'lucide-react';

const statusStyles = {
  pending: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/60",
  in_progress: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60",
  completed: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/60"
};

const priorityStyles = {
  low: "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
  medium: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800/60",
  high: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800/60"
};

export const TaskCard = ({ task, onView, onEdit, onDelete }) => {
  return (
    <div className="group bg-white dark:bg-gray-800/90 rounded-2xl p-5 shadow-xs hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 border border-gray-200/80 dark:border-gray-700 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {task.title}
          </h3>
          <div className="flex items-center space-x-1.5 flex-shrink-0">
            <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider border ${statusStyles[task.status]}`}>
              {task.status.replace('_', ' ')}
            </span>
            <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider border ${priorityStyles[task.priority]}`}>
              {task.priority}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 line-clamp-2 leading-relaxed font-normal">
          {task.description}
        </p>
      </div>

      <div className="pt-3.5 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-1.5 font-medium">
          <Calendar className="w-3.5 h-3.5 text-blue-500" />
          <span>Due: {task.dueDate}</span>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={() => onView(task)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700/80 text-gray-600 dark:text-gray-300 rounded-lg transition-colors"
            title="View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onEdit(task)}
            className="p-2 hover:bg-blue-50 dark:hover:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-lg transition-colors"
            title="Edit Task"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 hover:bg-rose-50 dark:hover:bg-rose-950/50 text-rose-600 dark:text-rose-400 rounded-lg transition-colors"
            title="Delete Task"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};