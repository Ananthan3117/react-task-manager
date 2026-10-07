import React, { useState } from 'react'

export default function TaskList({
  tasks,
  updateTask,
  deleteTask
}) {

  const [editingIndex, setEditingIndex] = useState(null)
  const [editText, setEditText] = useState('')
  const [editPriority, setEditPriority] = useState('medium')
  const [editCategory, setEditCategory] = useState('general')
  const [editDueDate, setEditDueDate] = useState('')


  // Complete / Undo task
  const toggleComplete = (index) => {

    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed
    }

    updateTask(updatedTask, index)
  }


  // Start editing
  const startEdit = (index) => {

    const task = tasks[index]

    setEditingIndex(index)
    setEditText(task.text)
    setEditPriority(task.priority)
    setEditCategory(task.category)
    setEditDueDate(task.dueDate || '')
  }


  // Save edited task
  const saveEdit = (index) => {

    const updatedTask = {
      ...tasks[index],
      text: editText,
      priority: editPriority,
      category: editCategory,
      dueDate: editDueDate
    }

    updateTask(updatedTask, index)

    setEditingIndex(null)
  }


  // Cancel editing
  const cancelEdit = () => {
    setEditingIndex(null)
  }


  return (

    <ul className="task-list">

      {tasks.length === 0 && (

        <li className="empty-task">
          No tasks found.
        </li>

      )}


      {tasks.map((task, index) => (

        <li
          key={index}
          className={task.completed ? "completed" : ""}
        >

          {editingIndex === index ? (

            /* EDIT MODE */

            <div className="edit-container">

              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              <select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <select
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
              >
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
              </select>

              <input
                type="date"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
              />

              <div className="edit-buttons">

                <button
                  className="save-btn"
                  onClick={() => saveEdit(index)}
                >
                  Save
                </button>

                <button
                  className="cancel-btn"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>

              </div>

            </div>

          ) : (

            /* NORMAL MODE */

            <>

              <div className="task-info">

                <span className="task-title">
                  {task.text}
                </span>


                <div className="task-meta">

                  <small className={`priority-${task.priority}`}>
                    {task.priority}
                  </small>

                  <small>
                    {task.category}
                  </small>

                  {task.dueDate && (
                    <small className="due-date">
                      Due: {task.dueDate}
                    </small>
                  )}

                </div>

              </div>


              <div className="task-actions">

                <button
                  onClick={() => startEdit(index)}
                  className="edit-btn"
                >
                  Edit
                </button>

                <button
                  onClick={() => toggleComplete(index)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>

              </div>

            </>

          )}

        </li>

      ))}

    </ul>
  )
}