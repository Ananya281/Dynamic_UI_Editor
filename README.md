# 🎨 Dynamic UI Editor

A powerful **real-time UI customization tool** built with React, TypeScript, and Tailwind CSS.  
It allows users to design, preview, and customize layouts, typography, buttons, themes, and much more — all inside an interactive editor.

---

## 🔗 Live Demo

🚀 Check out the live version here: [**Dynamic UI Editor – Try Now**](https://your-live-demo-link.com)  

---

## 🚀 Features

- 🛠️ **Real-Time Customization:** Instantly see updates to typography, layout, and design as you edit.
- 📱 **Responsive Preview:** Toggle between **Desktop**, **Tablet**, and **Mobile** views seamlessly.
- 🧩 **Configurable Components:** Customize typography, button styles, cards, galleries, and more with full control.
- 🔄 **Undo / Redo Support:** Safely explore multiple design options without losing previous states.
- 📤 **Export / Import:** Save your design configuration as JSON and re-import it anytime.
- 🌈 **Predefined Themes:** Choose from multiple color themes like Ocean Blue, Sunset Glow, Forest Green, Rose Garden, etc.
- 🧪 **Developer-Friendly:** Structured configuration system for easy scaling and integration.

---

## 🧰 Tech Stack

| 🧩 Component        | 🚀 Technology                      |
|---------------------|----------------------------------|
| **Frontend**        | React + TypeScript               |
| **Styling**         | Tailwind CSS                     |
| **Bundler**         | Vite                             |
| **State Mgmt**      | React Context API                |
| **Icons**           | Lucide React                     |
| **Utilities**       | Custom `cn()` + EditorContext    |

---

## 📁 Project Structure

```bash
Dynamic_UI_Editor/
├─ public/                      # Static assets
├─ src/
│  ├─ components/             # Reusable UI components (Pagination, Buttons, etc.)
│  ├─ contexts/               # EditorContext for configuration & state management
│  ├─ hooks/                  # Custom React hooks
│  ├─ lib/                    # Utility functions (e.g., cn(), helpers)
│  ├─ pages/                  # Editor, Preview, and other pages
│  ├─ styles/                 # Tailwind base styles and variables
│  └─ main.tsx               # Application entry point
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

---

## 🧑‍💻 How to Run the Project
`
Make sure you have Node.js (v18+) and npm installed before running the commands below.
`

#### ▶️ Step 1: Build the Docker Image

```
git clone https://github.com/your-username/theme-sculptor-studio.git
cd theme-sculptor-studio
```

#### ▶️ Step 2: Install Dependencies

```
npm install
```

#### ▶️ Step 3: Start Development Server

```
npm run dev
```

---

## 🏗️ Build for Production

`
To create an optimized build:
`
```
npm run build
```

`
Preview the production build locally:
`
```
npm run preview
```
