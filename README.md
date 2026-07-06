# WELCOME TO MY MOBILE APPLICATION DEVELOPMENT 

## Author:
- Amara Sesay 10519

## 📱 React Native Class Exercises & Projects

A collection of practical exercises and mini-projects built with **React Native** and **Expo CLI**, completed as part of our class sessions under the guidance of our lecturer Engineer Brato. This repository documents hands-on learning covering core mobile development concepts, component design, navigation, state management, and API integration.



## 📖 Project Overview

This repository serves as a structured record of the practical work completed during our React Native training sessions. Each exercise/project builds on previous concepts, progressively introducing more advanced mobile development techniques using the Expo ecosystem.

The goal of this repository is to:

- Consolidate all class exercises and projects in one organized place
- Demonstrate practical understanding of React Native fundamentals
- Provide a reference for reviewing concepts covered in class
- Showcase incremental skill progression through real, working code



## 🎯 Learning Objectives

By working through the exercises in this repository, the following objectives were achieved:

- Understand the fundamentals of React Native and how it differs from React for web
- Set up and manage a React Native project using Expo CLI
- Build and style functional components using React Native's core components
- Implement navigation between multiple screens
- Manage application state using React Hooks (`useState`, `useEffect`, `useContext`)
- Handle user input, forms, and validation on mobile interfaces
- Fetch and display data from external APIs
- Apply responsive design principles for different screen sizes
- Debug and test applications using Expo Go and emulators
- Follow clean code and component-based architecture practices



## 🛠️ Technology Stack

| Category            | Technology                          |
|----------------------|--------------------------------------|
| Framework            | [React Native](https://reactnative.dev/) |
| Development Platform | [Expo CLI](https://docs.expo.dev/)  |
| Language             | JavaScript / TypeScript             |
| Navigation           | React Navigation                    |
| State Management     | React Hooks          |
| Styling              | StyleSheet            |
| Version Control      | Git & GitHub                        |
| Package Manager      | npm                           |
| Testing (optional)   | Jest / React Native Testing Library |



## ✅ Prerequisites

Before setting up this project, ensure the following tools are installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended, v18+)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- [Expo Go](https://expo.dev/client) app installed on your physical device (Android/iOS), **or**
- An emulator/simulator:
  - Xcode (for iOS Simulator — macOS only)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

To install Expo CLI globally:

```bash
npm install -g expo-cli
```

> **Note:** Recent Expo projects use the local `expo` package via `npx expo`, so a global install is optional but convenient.



## ⚙️ Installation Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   ```

2. **Navigate into the project directory**

   ```bash
   cd <repository-name>
   ```

3. **Navigate into a specific exercise/project folder** (see [Folder Structure](#-folder-structure))

   ```bash
   cd exercises/01-basic-components
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```



## 🚀 Project Setup

Each exercise/project is a self-contained Expo application. After installing dependencies for a specific folder:

1. Ensure Expo CLI is available:

   ```bash
   npx expo --version
   ```

2. Start the Metro bundler:

   ```bash
   npx expo start
   ```

3. A QR code will appear in the terminal or Expo Dev Tools browser tab.



## ▶️ Running the Application

You can run the application using any of the following methods:

### On a Physical Device
1. Install the **Expo Go** app from the Play Store or App Store.
2. Scan the QR code generated after running `npx expo start`.

### On an Android Emulator
```bash
npx expo start --android
```

### On an iOS Simulator (macOS only)
```bash
npx expo start --ios
```

### On a Web Browser
```bash
npx expo start --web
```



## 📂 Folder Structure

```
📦 react-native-class-exercises
├── 📁 exercises
│   ├── 📁 01-basic-components
│   ├── 📁 02-styling-and-layout
│   ├── 📁 03-navigation
│   ├── 📁 04-state-management
│   └── 📁 05-api-integration
├── 📁 projects
│   ├── 📁 todo-app
│   ├── 📁 weather-app
│   └── 📁 final-project
├── 📁 assets
│   ├── 📁 images
│   └── 📁 fonts
├── 📄 .gitignore
├── 📄 README.md
└── 📄 package.json
```

> Each subfolder contains its own `package.json`, `App.js`, and relevant components, making every exercise/project independently runnable.


## ✨ Features Implemented

- Reusable and modular UI components
- Multi-screen navigation using React Navigation (Stack & Tab navigators)
- Form handling and input validation
- API data fetching and rendering with loading/error states
- Local state management with Hooks
- Responsive layouts using Flexbox
- Custom styling with the `StyleSheet` API
- List rendering using `FlatList` and `SectionList`
- Basic device feature integration (e.g., camera, location — where applicable)



## 🧪 Class Exercises

| # | Exercise | Description | Key Concepts |
|---|-----------|-------------|----------------|
| 01 | Basic Components | Introduction to core components (`View`, `Text`, `Image`) | JSX, Component structure |
| 02 | Styling & Layout | Building responsive layouts | Flexbox, StyleSheet |
| 03 | Navigation | Multi-screen app navigation | React Navigation |
| 04 | State Management | Managing dynamic UI state | useState, useEffect |
| 05 | API Integration | Fetching and displaying remote data | fetch/axios, async-await |

> Additional exercises and mini-projects are added progressively as the course advances.



## 🌟 Best Practices Followed

- Consistent and descriptive naming conventions for files, components, and variables
- Component-based architecture for reusability and maintainability
- Separation of concerns (UI, logic, and styles organized clearly)
- Use of functional components and React Hooks over class components
- Meaningful commit messages following conventional commit style
- `.gitignore` used to exclude `node_modules`, build files, and environment variables
- Code formatted consistently (Prettier/ESLint recommended)
- Environment variables managed securely (not hardcoded or committed)



## 🔮 Future Improvements

- Integrate TypeScript across all exercises for type safety
- Add unit and integration tests using Jest
- Implement global state management with Redux Toolkit or Zustand
- Add CI/CD pipeline for automated builds and testing
- Improve accessibility (a11y) compliance across components
- Add dark mode support
- Deploy sample projects using Expo Application Services (EAS)



## 🤝 Contributing Guidelines

This repository is primarily intended for personal learning purposes; however, contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m "Add: brief description of changes"
   ```
4. Push to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request describing your changes

Please ensure your code follows the existing style and structure of the repository before submitting a pull request.



## 🙏 Acknowledgements

- Special thanks to our **lecturer** for guidance, structured teaching, and continuous support throughout the course
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Documentation](https://reactnavigation.org/)
- Classmates and peers for collaborative learning and feedback during sessions



<p align="center">Made with dedication and countless <code>npx expo start</code> commands 💻📱</p>
