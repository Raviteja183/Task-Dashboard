# 📋 Task Dashboard

A responsive Task Dashboard application built using **Angular 20**. This project allows users to view, search, filter, and create tasks through a clean and modern user interface.

The application consumes task data from a mock REST API and displays it in a dashboard with task statistics and responsive task cards.

---

## 🚀 Features

- Dashboard with task statistics
  - Total Tasks
  - Pending Tasks
  - In Progress Tasks
  - Completed Tasks

- View all tasks in responsive task cards

- Search tasks by title

- Filter tasks by status

- Add a new task using Reactive Forms

- Form validation

- Dynamic task count

- Responsive layout for Desktop, Tablet and Mobile

- Modern UI matching the provided design

---

## 🛠️ Technologies Used

- Angular 20
- TypeScript
- HTML5
- Traditional CSS
- RxJS
- Angular Reactive Forms
- Angular Standalone Components
- Angular HttpClient

---

## 📁 Project Structure

```
src
│
├── app
│   ├── components
│   │   ├── dashboard
│   │   ├── header
│   │   ├── search-filter
│   │   ├── stats
│   │   ├── task-card
│   │   └── task-form
│   │
│   ├── models
│   │   └── task.ts
│   │
│   ├── services
│   │   └── task.service.ts
│   │
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
│
├── public
│   ├── task-banner.png
│   └── empty.png
│
└── styles.css
```

---

## 📦 Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd task-dashboard
```

Install dependencies

```bash
npm install
```

Run the application

```bash
ng serve
```

Open the browser

```
http://localhost:4200
```

---

## 🌐 API Used

Mock API

```
https://jsonplaceholder.typicode.com/todos
```

The application loads the tasks from the API.

Task Priority, Assignee and Due Date are generated locally for demonstration purposes.

---

## 📱 Functionality

### Dashboard

Displays

- Total Tasks
- Pending Tasks
- In Progress Tasks
- Completed Tasks

### Search

Search tasks by task title.

### Filter

Filter tasks based on

- All Status
- Pending
- In Progress
- Completed

### Add Task

Users can create a new task by providing

- Task Title
- Status
- Priority
- Assignee
- Due Date

The newly added task is displayed immediately in the dashboard without refreshing the page.

---

## 🎨 UI Features

- Responsive Design
- Card Based Layout
- Priority Color Indicators
- Status Badges
- Scrollable Task List
- Modern Dashboard Design
- Soft Shadows
- Clean Typography

---

## 📌 Assumptions

- JSONPlaceholder is used as a mock backend.
- Newly added tasks are maintained only in the local application state.
- Refreshing the application reloads the original data from the API.

---

## 📸 Screens

- Dashboard
- Search Tasks
- Filter Tasks
- Add Task
- Task Form

---

## 🏗️ Architecture Decisions

The application follows a component-based architecture using Angular Standalone Components to ensure modularity, maintainability, and reusability.

### Project Structure

- **Standalone Components** are used to avoid unnecessary NgModules.
- **TaskService** acts as the single service layer responsible for fetching and managing task data.
- **Reactive Forms** are used for task creation with built-in form validation.
- **RxJS Observables** are used for asynchronous data handling.
- **Component Communication** is implemented using `@Input()` and `@Output()`.
- **Traditional CSS** is used for styling as per the assessment requirements.
- **Responsive Design** is implemented using Flexbox, CSS Grid, and Media Queries.
- **Local State Management** is used for newly added tasks, while initial data is fetched from the mock REST API.

---

## ⏱️ Time Spent

| Activity | Approximate Time |
|-----------|------------------|
| Project Setup | 30 minutes |
| Component Development | 2 hours |
| API Integration | 30 minutes |
| Search & Filter Functionality | 1 hour |
| Reactive Form Development | 2 hours |
| UI Styling & Responsive Design | 2 hours |
| Testing, Debugging & Refinements | 1 hour |

**Total Time:** Approximately **9 hours**

---

## 🤖 AI Usage Summary

AI assistance (ChatGPT) was used during the development process for the following purposes:

- Discussing Angular best practices and application architecture.
- Reviewing UI implementation against the provided design.
- Suggesting improvements for responsive layouts and CSS styling.
- Assisting with debugging and resolving Angular-related issues.
- Reviewing code quality and providing optimization suggestions.

All project implementation, component integration, application logic, testing, and final verification were completed manually.

---

## 👨‍💻 Author

Developed by **Ravi Teja Alla**

Angular Developer