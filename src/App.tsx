import { useState } from 'react';
import workoutData from './data/workout_routine.json';
import type { WorkoutRoutine, Exercise, WeekData } from './types/workout';
import './App.css';

const typedWorkoutData = workoutData as WorkoutRoutine;

function App() {
  const [selectedDay, setSelectedDay] = useState<'dia_1' | 'dia_2'>('dia_1');
  const [selectedWeek, setSelectedWeek] = useState<1 | 2 | 3 | 4>(1);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const currentRoutine = typedWorkoutData.rutina_ejercicios[selectedDay];

  const getWeekData = (exercise: Exercise, week: number) => {
    const weekKey = `semana_${week}` as keyof Exercise;
    const weekData = exercise[weekKey];
    return weekData as WeekData;
  };

  const toggleExerciseCompletion = (exerciseName: string) => {
    setCompletedExercises(prev => {
      const newSet = new Set(prev);
      if (newSet.has(exerciseName)) {
        newSet.delete(exerciseName);
      } else {
        newSet.add(exerciseName);
      }
      return newSet;
    });
  };

  const isExerciseCompleted = (exerciseName: string) => {
    return completedExercises.has(exerciseName);
  };

  const renderExerciseCard = (exercise: Exercise, index: number, isFinisher = false) => {
    const weekData = getWeekData(exercise, selectedWeek);
    const completed = isExerciseCompleted(exercise.nombre);
    
    return (
      <div key={index} className={`exercise-card ${isFinisher ? 'finisher' : ''} ${completed ? 'completed' : ''}`}>
        <div className="exercise-header">
          <h3 className="exercise-name">{exercise.nombre}</h3>
          <button
            className={`completion-btn ${completed ? 'completed' : ''}`}
            onClick={() => toggleExerciseCompletion(exercise.nombre)}
            aria-label={completed ? 'Marcar como no completado' : 'Marcar como completado'}
          >
            {completed ? '✓' : '○'}
          </button>
        </div>
        <div className="exercise-details">
          <div className="detail-item">
            <span className="label">Series:</span>
            <span className="value">{weekData.series}</span>
          </div>
          <div className="detail-item">
            <span className="label">Carga:</span>
            <span className="value">
              {weekData.carga ? `${weekData.carga} kg` : 'Sin peso'}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🏋️ Gym Routine</h1>
        <div className="day-selector">
          <button 
            className={`day-btn ${selectedDay === 'dia_1' ? 'active' : ''}`}
            onClick={() => setSelectedDay('dia_1')}
          >
            Día 1
          </button>
          <button 
            className={`day-btn ${selectedDay === 'dia_2' ? 'active' : ''}`}
            onClick={() => setSelectedDay('dia_2')}
          >
            Día 2
          </button>
        </div>
        <div className="week-selector">
          {[1, 2, 3, 4].map((week) => (
            <button
              key={week}
              className={`week-btn ${selectedWeek === week ? 'active' : ''}`}
              onClick={() => setSelectedWeek(week as 1 | 2 | 3 | 4)}
            >
              Semana {week}
            </button>
          ))}
        </div>
      </header>

      <main className="main-content">
        <section className="exercises-section">
          <h2>Ejercicios Principales</h2>
          <div className="exercises-grid">
            {currentRoutine.ejercicios.map((exercise, index) => 
              renderExerciseCard(exercise, index)
            )}
          </div>
        </section>

        <section className="finisher-section">
          <h2>Finalizador</h2>
          <div className="exercises-grid">
            {currentRoutine.finalizador.map((exercise, index) => 
              renderExerciseCard(exercise, index, true)
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 