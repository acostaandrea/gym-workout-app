# 🏋️ Gym Workout App

Una aplicación móvil-first para mostrar rutinas de ejercicios del gimnasio, construida con React, TypeScript y Vite.

## Características

- **Diseño móvil-first**: Optimizada para uso en dispositivos móviles en el gimnasio
- **Navegación por días**: Cambio fácil entre Día 1 y Día 2
- **Progresión semanal**: Visualización de ejercicios por semana (1-4)
- **Ejercicios principales y finalizadores**: Organización clara de la rutina
- **Interfaz intuitiva**: Diseño limpio y fácil de usar

## Tecnologías

- React 19
- TypeScript
- Vite
- CSS Grid y Flexbox
- Diseño responsive

## Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## Uso

- Selecciona el día de entrenamiento (Día 1 o Día 2)
- Elige la semana de progresión (1-4)
- Visualiza los ejercicios principales y finalizadores
- La aplicación es perfecta para usar en el gimnasio desde tu móvil

## Estructura del Proyecto

```
src/
├── data/
│   └── workout_routine.json    # Datos de la rutina
├── types/
│   └── workout.ts             # Interfaces TypeScript
├── App.tsx                    # Componente principal
├── App.css                    # Estilos móvil-first
└── main.tsx                   # Punto de entrada
```

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build
- `npm run lint` - Linting del código 