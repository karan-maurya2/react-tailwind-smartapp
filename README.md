# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📇 Project 1: Portfolio Card

## 🔥 What You'll Learn
- React fundamentals: JSX, props, components
- Project setup using **Vite** (modern alternative to CRA)
- Styling with **Tailwind CSS**
- Hosting your app with **GitHub Pages**
- Using **Git**, **CLI**, and **console**

---

## ⚙️ Tools & Technologies
- React (with Vite)
- Tailwind CSS
- Git + GitHub
- GitHub Pages for hosting

---

## 🚀 Setup Instructions

### Step 1: Create project with Vite
```bash
npm create vite@latest portfolio-card --template react
cd portfolio-card
npm install
npm run dev


# Project 1: Developer Portfolio Card

A simple digital card for a frontend developer built with React + Tailwind.

---

## 📦 Tech Stack
- React (Vite)
- Tailwind CSS
- Git + GitHub

---

## ✅ What You’ll Learn
- React components, JSX
- Tailwind CSS styling
- Project structure
- Git + GitHub basics

---

## 🛠 Installation

```bash
# Step 1: Create Vite project
npm create vite@latest react-smartapp --template react

# Step 2: Move into folder
cd react-smartapp

# Step 3: Install dependencies
npm install

# Step 4: Install Tailwind + config
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Step 5: Add Tailwind to ./src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# Step 6: Start the server
npm run dev


✅ Project Structure

portfolio-card/
├── src/
│   ├── components/
│   │   └── PortfolioCard.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
└── README.md
