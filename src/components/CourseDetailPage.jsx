// src/components/CourseDetailPage.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { getCourseById } from '../data/coursesData';
import '../styles/CourseDetailPage.css';

const CourseDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  
  const course = getCourseById(id);

  // Если курс не найден
  if (!course) {
    return (
      <div className={`course-detail-page ${isDarkMode ? 'dark-theme' : ''}`}>
        <div className="error-screen">
          <h2>Курс не найден</h2>
          <button className="back-button" onClick={() => navigate('/')}>
            Вернуться к курсам
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate('/');
  };

  const handleStartCourse = () => {
    navigate(`/course/${course.id}/play`);
  };

  return (
    <div className={`course-detail-page ${isDarkMode ? 'dark-theme' : ''}`}>
      <div className="page-header">
        <button className="back-button" onClick={handleBack}>
          ← Назад к курсам
        </button>
        {/* <ThemeToggle /> */}
      </div>

      <div className="course-header">
        <h1 className="detail-course-title">{course.title}</h1>
        <p className="course-description">{course.fullDescription}</p>
        
        {/* <div className="course-stats">
          <div className="stat-item">
            <span className="stat-label">Упражнений</span>
            <span className="stat-value">{course.exercisesCount}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Длительность</span>
            <span className="stat-value">{course.durationText}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Интенсивность</span>
            <span className="stat-value">{course.intensity}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Категория</span>
            <span className="stat-value">{course.category}</span>
          </div>
        </div> */}

        <div className="action-buttons">
          <button className="start-button" onClick={handleStartCourse}>
            Начать практику
          </button>
        </div>
      </div>

      <div className="exercises-section">
        {/* <h2 className="section-title">Упражнения ({course.exercisesCount})</h2> */}
        
        <div className="exercises-list">
          {course.exercises.map((exercise, index) => (
            <div key={exercise.id} className="exercise-item">
              <div className='left-group'>
                <div className="detail-exercise-number">{index + 1}</div>
                <h3 className="detail-exercise-name">{exercise.name}</h3>
              </div>
              <div className="detail-exercise-duration">{exercise.duration} сек</div>
              {/* <div className="exercise-info">
                
                <p className="exercise-original">{exercise.originalName}</p>
              </div> */}
              
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default CourseDetailPage;