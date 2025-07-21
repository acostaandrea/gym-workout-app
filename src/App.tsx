import { useState } from 'react';
import workoutData from './data/workout_routine.json';
import type { WorkoutRoutine } from './types/workout';
import './App.css';

const typedWorkoutData = workoutData as WorkoutRoutine;

function App() {
  const [selectedDay, setSelectedDay] = useState<'dia_1' | 'dia_2'>('dia_1');
  const [selectedWeek, setSelectedWeek] = useState<1 | 2 | 3 | 4>(1);

  const currentRoutine = typedWorkoutData.rutina_ejercicios[selectedDay];

  const getWeekData = (exercise: any, week: number) => {
    const weekKey = `semana_${week}` as keyof typeof exercise;
    return exercise[weekKey];
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
            {currentRoutine.ejercicios.map((exercise, index) => {
              const weekData = getWeekData(exercise, selectedWeek);
              return (
                <div key={index} className="exercise-card">
                  <h3 className="exercise-name">{exercise.nombre}</h3>
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
            })}
          </div>
        </section>

        <section className="finisher-section">
          <h2>Finalizador</h2>
          <div className="exercises-grid">
            {currentRoutine.finalizador.map((exercise, index) => {
              const weekData = getWeekData(exercise, selectedWeek);
              return (
                <div key={index} className="exercise-card finisher">
                  <h3 className="exercise-name">{exercise.nombre}</h3>
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
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 