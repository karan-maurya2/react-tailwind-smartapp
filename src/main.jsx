import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)


// Explanation:
// Importing ./input.css ensures Vite processes the Tailwind CSS file and includes the generated styles in your app.
// Place the import in main.jsx (or equivalent) so the styles are globally available.
// This is the entry point of your React application.
// The createRoot function is used to create a root for the React application.
// The StrictMode component is a wrapper that helps identify potential problems in an application.