import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeToggle.css';
import { Icon } from '../components/Icons';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`} 
      onClick={toggleTheme}
      aria-label="Переключить тему"
    >
      <Icon 
        name={isDarkMode ? 'sun' : 'moon'} 
        size="lg"
        className="theme-icon"
      />
      {/* <span className="toggle-icon">
        {isDarkMode ? '☀️' : '🌙'}
      </span> */}
      {/* <span className="toggle-text">
        {isDarkMode ? 'Светлая тема' : 'Тёмная тема'}
      </span> */}
    </button>
  );
};

export default ThemeToggle;