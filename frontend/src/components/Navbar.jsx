import React from 'react';
import { CheckSquare, Moon, Sun, Sparkles } from 'lucide-react';

export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800 transition-colors duration-200">
      <div className="w-full px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
            <CheckSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                TaskFlow
              </span>
              <span className="text-xs px-2 py-0.5 font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200/50 dark:border-blue-800/50">
                PRO
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Full-Stack Assignment</span>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700/80 transition-all duration-200 shadow-xs cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};