// src/components/CoursesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { getAllCourses } from '../data/coursesData';
import '../styles/CoursesPage.css';
import stretchaLogo from '../images/stretcha_logo.png';
import { Icon } from '../components/Icons';

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
        <header className="courses-header">
          <div className="header-content">
            <div className="header-left">
              <div className="logo-container">
                <img 
                  src={stretchaLogo} 
                  alt="Stretcha" 
                  className="stretcha-logo"
                />
              </div>
              <div className="logo-section">
                <h1>Stretcha</h1>
                {/* <p className="header-subtitle">Бильярдный клуб "KIKS"</p> */}
              </div>
            </div>
            
            <div className="header-right">
              <ThemeToggle />
            </div>
          </div>
        </header>
        
        {/* <ThemeToggle /> */}
        <h1 className="page-title">Выбери практику</h1>
        <p className="page-subtitle">
          Мягкие упражнения для здоровья спины и восстановления после тренировок
        </p>

        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card" onClick={() => handleCourseClick(course.id)}>
              {/* <div className="course-image">{course.image}</div> */}
              <div className="card-icon" style={{ backgroundColor: '#499971' + '20' }}>
                <Icon 
                  name={course.icon}
                  size="2x"
                  style={{ color: '#499971' }}
                />
              </div>
              <div className="card-content">
                <h2 className="main-page-course-title">{course.title}</h2>
                <p className="main-page-course-description">{course.shortDescription}</p>
                
                <div className="course-meta">
                  <div>
                    <Icon name='bars' />
                    <span className="exercises-count">{course.exercisesCount} упражнений</span>
                  </div>

                  <div>
                    <Icon name='clock' />
                    <span className="duration">{course.durationText}</span>
                  </div>
                  
                  
                </div>
              </div>

              
              
              {/* <button 
                className="course-button"
                onClick={() => handleCourseClick(course.id)}
              >
                Подробнее о курсе
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;