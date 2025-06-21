
import React from 'react';
import { FaMoon , FaSun } from "react-icons/fa";


const ThemeToggleButton = ({ isDarkMode, toggleTheme, className = "" }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`relative w-12 h-12 rounded-full transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isDarkMode 
          ? 'bg-gray-800 hover:bg-blue-700 text-blue-300 focus:ring-blue-300' 
          : 'bg-blue-100 hover:bg-blue-200 text-blue-600 focus:ring-blue-300'
      } ${className}`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun Icon */}
        <FaMoon 
          className={`absolute w-5 h-5 transition-all duration-300 transform ${
            isDarkMode 
              ? 'opacity-0 rotate-90 scale-50' 
              : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        
        {/* Moon Icon */}
        <FaSun
          className={`absolute w-5 h-5 transition-all duration-300 transform ${
            isDarkMode 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-50'
          }`} 
        />
      </div>
      
      {/* Subtle glow effect */}
      <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
        isDarkMode 
          ? 'bg-yellow-300/20 opacity-0 hover:opacity-100' 
          : 'bg-blue-500/20 opacity-0 hover:opacity-100'
      }`} />
    </button>
  );
};

export default ThemeToggleButton;