// export const purge = [];
// export const darkMode = false;
// export const theme = {
//   extend: {},
// };
// export const variants = {
//   extend: {},
// };
// export const plugins = [];


// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

// ---------


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { customBlue: "#1E40AF",
        primary: '#646cff',
        secondary: '#535bf2',
        accent: '#FF5733',
      },
      fontFamily: { 
        customFont: ['"Custom Font"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
      },

      spacing: { 
        customSpacing: "1.25rem",
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'custom': '12px',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
    
  },
  plugins: [],
};

//This file is the primary configuration file for Tailwind CSS. It allows you to customize Tailwind’s behavior.

//The tailwind.config.js file is the primary configuration file for Tailwind CSS. It allows you to customize Tailwind’s behavior, including its theme, utilities, and content sources.
//Content Configuration: Specifies which files (e.g., HTML, JS, JSX) Tailwind should analyze to extract used classes, optimizing the final CSS output.

// Theme Customization: Extends or overrides Tailwind’s default theme (e.g., adding custom colors, fonts, or breakpoints).

//Plugins: Adds custom plugins or third-party Tailwind plugins.
// Dark Mode: Configures dark mode support, allowing for different styles based on the user's preference or system settings.
// Variants: Customizes which variants (e.g., hover, focus) are generated for specific utilities.
// Important: Ensure you have the necessary dependencies installed, such as tailwindcss, postcss, and autoprefixer.


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specify the files Tailwind should scan for class names
//   theme: {
//     extend: {
//       // colors: { customBlue: "#1E40AF" }, // Example of adding custom colors
//       // spacing: { customSpacing: "1.25rem" }, // Example of adding custom spacing
//     },
//   },
//   plugins: [], // Add custom or third-party plugins here
// };