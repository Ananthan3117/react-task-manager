import React from 'react'

export default function ProgressTracker({tasks}) {
  const completedTasks = tasks.filter((tasks) => tasks.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTasks/totalTasks) * 100;
  return (
      <div className='progress-tracker'>
        <p>
          {completedTasks} of {totalTasks} tasks completed
        </p>
        <div 
          className='progress-bar'
          style={{width: `${progress}%`}}>
        </div>
      </div>
  )
}
