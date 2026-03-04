// src/components/CoursesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { getAllCourses } from '../data/coursesData';
import '../styles/CoursesPage.css';

const CoursesPage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const courses = getAllCourses();

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className={`courses-page ${isDarkMode ? 'dark-theme' : ''}`}>
      <div className="courses-content">
        <ThemeToggle />
        <h1 className="page-title">Выбери практику</h1>
        <p className="page-subtitle">
          Мягкие упражнения для здоровья спины и восстановления после тренировок
        </p>

        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              {/* <div className="course-image">{course.image}</div> */}
              <h2 className="main-page-course-title">{course.title}</h2>
              <p className="main-page-course-description">{course.shortDescription}</p>
              
              <div className="course-meta">
                <span className="exercises-count">{course.exercisesCount} упражнений</span>
                <span className="duration">{course.durationText}</span>
              </div>
              
              <button 
                className="course-button"
                onClick={() => handleCourseClick(course.id)}
              >
                Подробнее о курсе
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;