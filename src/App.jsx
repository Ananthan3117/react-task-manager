import React, { useEffect, useState } from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {

  // Load saved tasks when application starts
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  // Search and filter states
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Save tasks whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  // Add task
  const addTask = (task) => {
    setTasks([...tasks, task])
  }


  // Update task
  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks]
    newTasks[index] = updatedTask
    setTasks(newTasks)
  }


  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }


  // Clear all tasks
  const clearTasks = () => {
    setTasks([])
  }


  // Filter tasks
  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =
      task.text.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      categoryFilter === "all" ||
      task.category === categoryFilter

    const matchesPriority =
      priorityFilter === "all" ||
      task.priority === priorityFilter

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "completed" && task.completed) ||
      (statusFilter === "pending" && !task.completed)

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPriority &&
      matchesStatus
    )
  })


  return (
    <div>

      <h1>Task Manager</h1>

      <p>Your Reminder Buddy</p>

      <TaskForm addTask={addTask} />


      {/* Search and Filters */}

      <div className="filter-panel">

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

      </div>


      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />


      <ProgressTracker tasks={tasks} />


      {tasks.length > 0 && (
        <button
          onClick={clearTasks}
          className="clear-btn"
        >
          Clear All Tasks
        </button>
      )}

    </div>
  )
}