# 🎨 Dynamic UI Editor

A powerful **real-time UI customization tool** built with React, TypeScript, and Tailwind CSS.  
It allows users to design, preview, and customize layouts, typography, buttons, themes, and much more — all inside an interactive editor.

[**Live Project Link**](https://dynamic-ui-editor-1prn.vercel.app/)

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

#### ▶️ Step 1: Clone the Repository

```
git clone https://github.com/Ananya281/Dynamic_UI_Editor.git
```
```
cd Dynamic_UI_Editor
```

#### ▶️ Step 2: Install Dependencies

```
npm install
```
`
This will install all required packages for React, TypeScript, Tailwind, and other dependencies.
`

#### ▶️ Step 3: Start Development Server

```
npm run dev
```

---

## 🔮 Future Improvements

We aim to continuously enhance the **Dynamic UI Editor** to make it more powerful, user-friendly, and production-ready. Planned items:

- 🧱 **Drag-and-Drop UI Builder:** Visual canvas to place and arrange components interactively. 
- 🎨 **Advanced Theme Customization:** Gradient themes, custom palettes, and brand color import.  
- 🌓 **Dark Mode Support:** Full dark/light theme toggle across editor and preview.  
- 🤖 **AI-Powered Suggestions:** Smart recommendations for color palettes, typography, and layouts.  
