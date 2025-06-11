<div align="center">

# 🎒 Trekbag - Smart Packing Checklist App

[![Last Commit](https://img.shields.io/github/last-commit/krifa-med-aziz/Trekbag?style=flat-square)](https://github.com/krifa-med-aziz/Trekbag)
[![Languages](https://img.shields.io/github/languages/count/krifa-med-aziz/Trekbag?style=flat-square)](https://github.com/krifa-med-aziz/Trekbag)
[![Top Language](https://img.shields.io/github/languages/top/krifa-med-aziz/Trekbag?style=flat-square)](https://github.com/krifa-med-aziz/Trekbag)

</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/>
</div>

---

## 📦 Features

- ➕ Add new items to your packing list  
- ✅ Mark items as packed or unpacked  
- 🔃 Sort items by packed/unpacked/default order  
- ❌ Remove individual items or clear the entire list  
- 🔄 Reset the list to its initial state  
- 💾 Persistent storage using local storage (via Zustand middleware)

---


## 🛠 Tech Stack

- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/) – State management
- [Vite](https://vitejs.dev/) – Development/build tool
- [React Select](https://react-select.com/) – Sorting dropdown UI

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/trekbag.git
   cd trekbag
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

To build the app for production:

```sh
npm run build
# or
yarn build
```

Preview the production build:

```sh
npm run preview
# or
yarn preview
```

## Project Structure

- `src/` - Main source code
  - `components/` - React components
  - `lib/constants.js` - Initial items data
  - `stores/itemsStore.js` - Zustand store for items
- `index.html` - Main HTML file
- `index.css` - Global styles

## Author

Made with 🤎 by [Mohamed Aziz Krifa](https://github.com/krifa-med-aziz)


