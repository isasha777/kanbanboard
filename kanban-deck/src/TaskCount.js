import React from 'react';
import './styles.css';

function TaskCount({ count }) {
  return (
    <div className="task-count">
      <span className='Taskspan'>{count}</span>
    </div>
  );
}

  

export default TaskCount;
