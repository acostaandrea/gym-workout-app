export interface WeekData {
  series: string;
  carga: number | string | null;
}

export interface Exercise {
  nombre: string;
  semana_1: WeekData;
  semana_2: WeekData;
  semana_3: WeekData;
  semana_4: WeekData;
  completed?: boolean;
}

export interface DayRoutine {
  ejercicios: Exercise[];
  finalizador: Exercise[];
}

export interface WorkoutRoutine {
  rutina_ejercicios: {
    dia_1: DayRoutine;
    dia_2: DayRoutine;
  };
} 