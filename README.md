# My Todo App - Cosmic Flight to Mars 🚀

A beautiful React todo application with Redux state management and an interactive 3D cosmic flight simulation to Mars!

## Features

- ✅ **Full CRUD Operations**: Create, Read, Update, and Delete todos
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 🚀 **3D Visualization**: Interactive solar system with spaceship flight simulation
- 📊 **Progress Tracking**: Spaceship advances from Earth to Mars as you complete todos
- 🎯 **Redux State Management**: Centralized state management with Redux Toolkit

## Technologies Used

- **React** - UI library
- **Redux Toolkit** - State management
- **React Three Fiber** - 3D rendering
- **Three.js** - 3D graphics library
- **Vite** - Build tool and dev server

## Installation

1. Navigate to the project directory:
```bash
cd "My todo app"
```

2. Install dependencies (if not already installed):
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

## Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Use

1. **Add Todos**: Type in the input field and click "Add Todo" or press Enter
2. **Complete Todos**: Click the checkbox to mark todos as complete
3. **Edit Todos**: Click the "Edit" button to modify a todo
4. **Delete Todos**: Click the "Delete" button to remove a todo
5. **Watch the Spaceship**: As you complete todos, the spaceship will advance from Earth to Mars in the 3D visualization!

## 3D Visualization Features

- **Interactive Solar System**: View Mercury, Venus, Earth, and Mars orbiting the Sun
- **Orbital Mechanics**: Planets orbit at different speeds
- **Spaceship Flight**: Spaceship travels from Earth to Mars based on todo completion progress
- **Camera Controls**: 
  - Left click + drag: Rotate view
  - Right click + drag: Pan view
  - Scroll: Zoom in/out
- **Hover Effects**: Hover over planets to see their names

Enjoy your cosmic journey! 🌌

## Live Demo

🌐 **Live on GitHub Pages**: [View the app](https://YOUR_USERNAME.github.io/my-todo-app/)

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. The workflow will automatically build and deploy the app whenever you push to the `main` branch.

### Manual Deployment Steps

1. Create a new repository on GitHub named `my-todo-app` (or your preferred name)
2. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/my-todo-app.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on the next push

**Note**: Make sure to update the `base` path in `vite.config.js` to match your repository name if it's different from `my-todo-app`.

