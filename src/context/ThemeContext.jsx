// src/context/ThemeContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Создаём контекст
const ThemeContext = createContext(null);

// Кастомный хук для использования темы
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Провайдер темы
export const ThemeProvider = ({ children }) => {
  // Проверяем сохранённую тему в localStorage или используем светлую по умолчанию
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    } catch (error) {
      console.warn('Failed to access localStorage', error);
      return false;
    }
  });

  // Цвета для светлой темы
  const lightTheme = {
    background: '#f7f5f1',
    cardBg: '#fdfcf9',
    textPrimary: '#2c3e50',
    textSecondary: '#5a6b7a',
    buttonColor: '#499971',
    border: 'rgba(0, 0, 0, 0.05)',
    shadow: 'rgba(0, 0, 0, 0.03)',
    shadowHover: 'rgba(0, 0, 0, 0.05)',
  };

  // Цвета для тёмной темы
  const darkTheme = {
    background: '#1a1e24',
    cardBg: '#2d333b',
    textPrimary: '#e1e6ec',
    textSecondary: '#a0a8b5',
    buttonColor: '#5bbd8c',
    border: 'rgba(255, 255, 255, 0.08)',
    shadow: 'rgba(0, 0, 0, 0.2)',
    shadowHover: 'rgba(0, 0, 0, 0.3)',
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  // Переключение темы
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      try {
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      } catch (error) {
        console.warn('Failed to save theme to localStorage', error);
      }
      return newTheme;
    });
  };

  // Применяем класс темы к body для глобальных стилей
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  // Значение, которое будет передаваться в контекст
  const contextValue = {
    isDarkMode,
    toggleTheme,
    theme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};