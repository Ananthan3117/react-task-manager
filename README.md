# Task Manager – Your Reminder Buddy

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern and responsive task management web application built with **React and Vite**. It helps users organize daily tasks, manage priorities, track progress, and quickly find tasks using search and filters.

## Live Demo

[View Live Demo](https://ananthan3117.github.io/react-task-manager/)

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Undo completed tasks
- Clear all tasks
- Set task priority
  - High
  - Medium
  - Low
- Categorize tasks
  - General
  - Work
  - Personal
- Set due dates
- Search tasks by name
- Filter tasks by category
- Filter tasks by priority
- Filter tasks by status
  - All
  - Pending
  - Completed
- Task completion progress tracker
- Persistent task data using LocalStorage
- Responsive user interface
- Empty-state message when no tasks are available

## Tech Stack

- React
- Vite
- JavaScript
- HTML5
- CSS3
- LocalStorage

## Project Structure

```text
react-task-manager/
│
├── public/
│
├── src/
│   ├── Components/
│   │   ├── ProgressTracker.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Ananthan3117/react-task-manager.git
```

### 2. Navigate to the Project

```bash
cd react-task-manager
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173/
```

## How It Works

Tasks can be created using the task form with the following information:

- Task name
- Priority
- Category
- Due date

Once a task is created, users can:

- Edit the task
- Change its priority
- Change its category
- Change its due date
- Mark it as completed
- Undo completion
- Delete the task

The progress tracker automatically calculates the percentage of completed tasks.

The search functionality allows users to find tasks quickly, while category, priority, and status filters make task management easier.

## Data Persistence

The application uses **Browser LocalStorage** to store tasks.

This means task data remains available when the page is refreshed or reopened in the same browser.

No external database or backend is currently required.

## User Interface

The application provides a clean and responsive interface designed for easy task management.

It includes:

- Task creation form
- Task list
- Priority indicators
- Category indicators
- Due dates
- Search functionality
- Multiple filters
- Progress tracking
- Edit and delete controls
- Responsive layout for different screen sizes

## Screenshots

Add screenshots of the application here.

Example:

```text
screenshots/
├── dashboard.png
├── task-list.png
└── filters.png
```

## Future Improvements

The following features can be added in future versions:

- User authentication
- Backend API integration
- MySQL or MongoDB database
- User-specific task management
- Cloud data synchronization
- Task notifications
- Task reminders
- Dark mode
- Drag-and-drop task organization
- Task sorting
- Advanced due-date management
- Email notifications
- Deployment with a backend server

## Learning Outcomes

This project demonstrates practical knowledge of:

- React components
- React state management
- React hooks
- Props
- Event handling
- Conditional rendering
- Array methods
- Form handling
- Controlled components
- LocalStorage
- CRUD operations on frontend data
- Search and filtering
- Responsive CSS
- Component-based application structure
- Vite development environment

- ## License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Author

**Ananthakrishnan A L**

### GitHub

https://github.com/Ananthan3117

Copyright © 2026 **Ananthakrishnan A L**.

Permission is granted to view and use this project for educational and personal purposes.

Redistribution or commercial use of this project or substantial portions of the code should not be done without permission from the author.
