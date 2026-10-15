import React from 'react';
import { X, Calendar, Clock, AlertCircle } from 'lucide-react';

export const TaskDetailsModal = ({ isOpen, onClose, task }) => {
  if (!isOpen || !task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <h2 className="text-base font-bold text-gray-900 dark:text-white">Task Overview</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">{task.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-wrap leading-relaxed bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              {task.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800">
              <span className="text-xs font-semibold text-gray-400 block mb-1 uppercase tracking-wider">Status</span>
              <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800">
                {task.status.replace('_', ' ')}
              </span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800">
              <span className="text-xs font-semibold text-gray-400 block mb-1 uppercase tracking-wider">Priority</span>
              <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200/50 dark:border-orange-800">
                {task.priority}
              </span>
            </div>
          </div>

          <div className="space-y-2.5 pt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2.5">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>Due Date: <strong className="text-gray-800 dark:text-gray-200">{task.dueDate}</strong></span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>Created: <strong className="text-gray-800 dark:text-gray-200">{new Date(task.createdAt).toLocaleString()}</strong></span>
            </div>
            <div className="flex items-center space-x-2.5">
              <AlertCircle className="w-4 h-4 text-purple-500" />
              <span>Last Updated: <strong className="text-gray-800 dark:text-gray-200">{new Date(task.updatedAt).toLocaleString()}</strong></span>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/80 border-t border-gray-100 dark:border-gray-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};