import React from 'react';
import { useState } from "react";
import './styles.css';
import TaskList from './TaskList';
import TaskCount from './TaskCount';
import TaskCount1 from './TaskCount1';
function KanbanColumn({ title }) {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDragStart(event, index) {
    event.dataTransfer.setData('text/plain', index);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event, targetIndex) {
    const sourceIndex = event.dataTransfer.getData('text/plain');
    const newTasks = [...tasks];

    const [draggedTask] = newTasks.splice(sourceIndex, 1);
    newTasks.splice(targetIndex, 0, draggedTask);

    setTasks(newTasks);
  }

  function handleDragEnd() {
    // reset styles if necessary
  }

  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <TaskList tasks={tasks} onAddTask={handleAddTask} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} onDragEnd={handleDragEnd}/>
      {(title === 'BackLog') && <TaskCount  count={tasks.length} />}
      {(title === 'Finished') && <TaskCount1  count={tasks.length} />}
    </div>
    
  );
}

export default KanbanColumn;

