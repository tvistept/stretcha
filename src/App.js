// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import CoursesPage from './components/CoursesPage';
import CourseDetailPage from './components/CourseDetailPage';
import CoursePlayerPage from './components/CoursePlayerPage';
import './App.css';

function App() {
  console.log('App: rendering with routes');
  
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/course/:id/play" element={<CoursePlayerPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;