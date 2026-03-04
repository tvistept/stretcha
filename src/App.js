import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import CoursesPage from './components/CoursesPage';
import CourseDetailPage from './components/CourseDetailPage';
import CoursePlayerPage from './components/CoursePlayerPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/stretcha">
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
