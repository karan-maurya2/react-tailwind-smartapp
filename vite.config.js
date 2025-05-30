import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import "./src/index.css"; // Importing the global CSS file


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 

})

// Purpose: Configures Vite to work with React and sets up the development server.

// import { defineConfig } from 'vite'; // Import the defineConfig function from Vite to define the configuration
// import react from '@vitejs/plugin-react'; // Import the React plugin for Vite to enable React support

// // Export the Vite configuration
// export default defineConfig({
//   plugins: [react()], // Add the React plugin to the Vite build process
//   server: {
//     port: 3000, // Specify the development server port
//   },
// });

// Vite will process input.css using PostCSS and Tailwind, generating an optimized CSS file in the dist folder.