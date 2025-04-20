# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# Project Name

A modern React application with Tailwind CSS, React Router, and other essential dependencies.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher recommended)
- npm (v9 or higher) or yarn
- Git (optional)

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
2. Install All dependencies:
   ```
   npm install @tailwindcss/vite@4.1.4 react@19.0.0 react-dom@19.0.0 react-icons@5.5.0 react-router@7.5.1 react-tabs@6.1.0 tailwindcss@4.1.4 sweetalert2 toastify-js
   ```
3. Additional Setup
    For SweetAlert2 (React usage)
    javascript:
    ```
        import Swal from 'sweetalert2'
        
        // Example usage
        Swal.fire('Hello World!')
        For Toastify (React usage)
    ```
    javascript:
    ```
      import Toastify from 'toastify-js'
      
      // Example usage
      Toastify({
        text: "Notification!",
        duration: 3000
      }).showToast();
    ```








## Available Scripts
In the project directory, you can run:
  ```bash
    npm run dev
  ```
## Runs the app in development mode with Vite.
Open http://localhost:5173 to view it in your browser.
##
  ```bash
    npm run build
  ```
Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.


