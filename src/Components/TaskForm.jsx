import React, { useState } from 'react'

export default function TaskForm({ addTask }) {

  const [task, setTask] = useState('')
  const [priority, setPriority] = useState('medium')
  const [category, setCategory] = useState('general')
  const [dueDate, setDueDate] = useState('')


  const handleSubmit = (e) => {

    e.preventDefault()

    if (!task.trim()) {
      return
    }

    addTask({
      text: task,
      priority,
      category,
      dueDate,
      completed: false
    })

    // Reset form
    setTask('')
    setPriority('medium')
    setCategory('general')
    setDueDate('')
  }


  return (

    <form
      onSubmit={handleSubmit}
      className="task-form"
    >

      <div id="inp">

        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">
          Add Task
        </button>

      </div>


      <div id="btns">

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>


        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>


        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

      </div>

    </form>
  )
}