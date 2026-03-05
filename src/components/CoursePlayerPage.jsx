// src/components/CoursePlayerPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { getCourseById } from '../data/coursesData';
import '../styles/CoursePlayerPage.css';

const CoursePlayerPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  
  const course = getCourseById(id);
  
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRest, setIsRest] = useState(false);
  const [restTimeLeft, setRestTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  
  const audioContextRef = useRef(null);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playBeep = (type = 'tick') => {
    if (!audioContextRef.current) return;
    
    const context = audioContextRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    if (type === 'tick') {
      oscillator.frequency.value = 880;
      gainNode.gain.value = 0.1;
      oscillator.start();
      oscillator.stop(context.currentTime + 0.1);
    } else if (type === 'finish') {
      oscillator.frequency.value = 660;
      gainNode.gain.value = 0.15;
      gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.5);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.5);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ОСНОВНОЙ ТАЙМЕР - ИСПРАВЛЕННАЯ ЛОГИКА
  useEffect(() => {
    if (!course) return;
    
    let timer;
    
    if (isPlaying && !isFinished) {
      timer = setInterval(() => {
        if (isRest) {
          // ТАЙМЕР ОТДЫХА
          setRestTimeLeft(prev => {
            if (prev <= 4 && prev > 1) {
              playBeep('tick');
            }
            
            if (prev <= 1) {
              playBeep('finish');
              
              // ЗДЕСЬ увеличиваем индекс - после отдыха переходим к следующему упражнению
              if (currentExerciseIndex < course.exercises.length - 1) {
                const nextIndex = currentExerciseIndex + 1;
                setCurrentExerciseIndex(nextIndex);
                setTimeLeft(course.exercises[nextIndex].duration);
                setIsRest(false);
                setRestTimeLeft(10);
              }
              return 10;
            }
            return prev - 1;
          });
        } else {
          // ТАЙМЕР УПРАЖНЕНИЯ
          setTimeLeft(prev => {
            if (prev <= 4 && prev > 1) {
              playBeep('tick');
            }
            
            if (prev <= 1) {
              playBeep('finish');
              
              // Проверяем, не последнее ли это упражнение
              if (currentExerciseIndex === course.exercises.length - 1) {
                setIsFinished(true);
                setIsPlaying(false);
                return 0;
              }
              
              // Переходим к отдыху, НЕ увеличивая индекс
              setIsRest(true);
              setRestTimeLeft(10);
              return 0;
            }
            return prev - 1;
          });
        }
      }, 1000);
    }
    
    return () => clearInterval(timer);
  }, [isPlaying, isRest, currentExerciseIndex, course, isFinished]);

  // Функции управления
  const handleStart = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  
  const handleReset = () => {
    setIsPlaying(false);
    setCurrentExerciseIndex(0);
    setTimeLeft(30);
    setIsRest(false);
    setRestTimeLeft(10);
    setIsFinished(false);
  };

  const handleBack = () => {
    navigate(`/course/${id}`);
  };

  const handleNext = () => {
    if (!course) return;
    
    if (isRest) {
      // Пропускаем отдых - сразу переходим к следующему упражнению
      if (currentExerciseIndex < course.exercises.length - 1) {
        const nextIndex = currentExerciseIndex + 1;
        setCurrentExerciseIndex(nextIndex);
        setTimeLeft(course.exercises[nextIndex].duration);
        setIsRest(false);
        setRestTimeLeft(10);
      }
    } else {
      // Ручной переход к отдыху
      if (currentExerciseIndex < course.exercises.length - 1) {
        playBeep('finish');
        setIsRest(true);
        setRestTimeLeft(10);
      } else if (currentExerciseIndex === course.exercises.length - 1) {
        // Если это последнее упражнение - завершаем
        setIsFinished(true);
        setIsPlaying(false);
      }
    }
  };

  const handlePrevious = () => {
    if (!course) return;
    
    if (currentExerciseIndex > 0) {
      const prevIndex = currentExerciseIndex - 1;
      setCurrentExerciseIndex(prevIndex);
      setTimeLeft(course.exercises[prevIndex].duration);
      setIsRest(false);
      setRestTimeLeft(10);
    }
  };

  if (!course) {
    return (
      <div className={`course-player-page ${isDarkMode ? 'dark-theme' : ''}`}>
        <div className="error-screen">
          <h2>Курс не найден</h2>
          <button className="back-button" onClick={() => navigate('/')}>
            Вернуться к курсам
          </button>
        </div>
      </div>
    );
  }

  const currentExercise = course.exercises[currentExerciseIndex];
  const totalExercises = course.exercises.length;
  const progress = ((currentExerciseIndex + (isRest ? 0.5 : 0)) / totalExercises) * 100;

  if (isFinished) {
    return (
      <div className={`course-player-page ${isDarkMode ? 'dark-theme' : ''}`}>
        <div className="completion-screen">
          <h1 className="completion-title">Практика завершена! 🎉</h1>
          <p className="completion-message">
            Отличная работа! Ты успешно выполнил все {totalExercises} упражнений.
          </p>
          <p className="completion-submessage">
            {course.title === 'Поясница' 
              ? 'Твоя спина скажет тебе спасибо! 🙏' 
              : 'Твои мышцы отдохнут! 🏃'}
          </p>
          <button className="back-to-course-button" onClick={handleBack}>
            Вернуться к курсу
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`course-player-page ${isDarkMode ? 'dark-theme' : ''}`}>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="player-header">
        <button className="back-button" onClick={handleBack}>
          ← Выйти
        </button>
        <div className="exercise-counter">
          {currentExerciseIndex + 1} / {totalExercises}
        </div>
      </div>
      
      <h2 className="player-course-title">{course.title}</h2>
      <div className="exercise-container">
        {isRest ? (
          <div className="rest-screen">
            <span className="rest-label">ОТДЫХ</span>
            <div className="rest-timer">{formatTime(restTimeLeft)}</div>
            <p className="next-exercise-label">
              Следующее: {currentExerciseIndex < totalExercises - 1 
                ? course.exercises[currentExerciseIndex + 1].name 
                : 'Завершение'}
            </p>
          </div>
        ) : (
          <div className="exercise-screen">
            <h1 className="exercise-name">{currentExercise.name}</h1>
            {/* <p className="exercise-original">{currentExercise.originalName}</p> */}
            <div className="exercise-timer">{formatTime(timeLeft)}</div>
          </div>
        )}
      </div>

      <div className="player-controls">
        <button 
          className="control-button secondary" 
          onClick={handlePrevious}
          disabled={currentExerciseIndex === 0 && !isRest}
        >
          ← Предыдущее
        </button>

        <div className="main-controls">
          {!isPlaying ? (
            <button className="control-button primary" onClick={handleStart}>
              ▶ Старт
            </button>
          ) : (
            <button className="control-button primary" onClick={handlePause}>
              ⏸ Пауза
            </button>
          )}
          
          <button className="control-button secondary" onClick={handleReset}>
            ↺ Сброс
          </button>
        </div>

        <button 
          className="control-button secondary" 
          onClick={handleNext}
          disabled={currentExerciseIndex === totalExercises - 1 && !isRest}
        >
          {isRest ? 'Пропустить отдых →' : 'Следующее →'}
        </button>
      </div>

      <div className="exercise-list-preview">
        <h3>Упражнения курса</h3>
        <div className="preview-list">
          {course.exercises.map((exercise, index) => (
            <div 
              key={exercise.id} 
              className={`preview-item ${index === currentExerciseIndex ? 'current' : ''} ${index < currentExerciseIndex ? 'completed' : ''}`}
              onClick={() => {
                if (index < currentExerciseIndex) {
                  setCurrentExerciseIndex(index);
                  setTimeLeft(exercise.duration);
                  setIsRest(false);
                  setRestTimeLeft(10);
                }
              }}
            >
              <span className="preview-number">{index + 1}</span>
              <span className="preview-name">{exercise.name}</span>
              {index < currentExerciseIndex && <span className="completed-mark">✓</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePlayerPage;