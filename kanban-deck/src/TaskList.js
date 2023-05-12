import React, { useState } from 'react';
import './styles.css';
import plus from './add-card.png'

function TaskList({ tasks, onAddTask, onDragStart, onDragOver, onDrop, onDragEnd}) {
  const [newTaskName, setNewTaskName] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskName, setEditingTaskName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(newTaskName);
    setNewTaskName('');
  }

  function handleEditTask(index, task) {
    setEditingTaskIndex(index);
    setEditingTaskName(task);
  }

  function handleSaveTask(event, index) {
    event.preventDefault();
    tasks[index] = editingTaskName;
    setEditingTaskIndex(null);
  }

  function handleCancelEditTask() {
    setEditingTaskIndex(null);
  }

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} draggable onDragStart={(event) => {
            event.dataTransfer.setData('text/plain', task);
            onDragStart(event, index);
          }} onDragOver={onDragOver} onDrop={(event) => onDrop(event, index)} onDragEnd={onDragEnd}>
            {editingTaskIndex === index ? (
              <form onSubmit={(event) => handleSaveTask(event, index)}>
                <input type="text" value={editingTaskName} onChange={(event) => setEditingTaskName(event.target.value)} />
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelEditTask}>Cancel</button>
              </form>
            ) : (
              <>
                <span>{task}</span>
                <button onClick={() => handleEditTask(index, task)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTaskName} onChange={event => setNewTaskName(event.target.value)} /><br/>
        <button type="submit" className='buttonAdd'><img src={plus} alt='plus' className='plusIcon'/><span>Add card</span></button>
      </form>
    </div>
  );
}

export default TaskList;












// import React, { useState } from 'react';
// import './styles.css';
// import plus from './add-card.png'

// function TaskList({ tasks, onAddTask, onDragStart, onDragOver, onDrop, onDragEnd}) {
//   const [newTaskName, setNewTaskName] = useState('');

//   const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);


//   function handleSubmit(event) {
//     event.preventDefault();
//     onAddTask(newTaskName);
//     setNewTaskName('');
//   }

  
  

//   return (


//     <div>
//       <ul>
//       {tasks.map((task, index) => (
//   <li key={index} draggable onDragStart={(event) => {
//     event.dataTransfer.setData('text/plain', task);
//     onDragStart(event, index);
//   }} onDragOver={onDragOver} onDrop={(event) => onDrop(event, index)} onDragEnd={onDragEnd}>
//     <div onClick={() => setSelectedTaskIndex(selectedTaskIndex === index ? null : index)}>
//       {task}
//       {selectedTaskIndex === index && (
//         <div className="task-details">
//           <textarea defaultValue={task.description} />
//           <button>Save</button>
//         </div>
//       )}
//     </div>
//     <button onClick={() => setSelectedTaskIndex(selectedTaskIndex === index ? null : index)}>Развернуть</button>
//   </li>
// ))}
//         {/* {tasks.map((task, index) => (
          
//           <li key={index} draggable onDragStart={(event) => {
//             event.dataTransfer.setData('text/plain', task);
//             onDragStart(event, index);
//           }} onDragOver={onDragOver} onDrop={(event) => onDrop(event, index)} onDragEnd={onDragEnd}>{task}</li>
//         ))} */}


//       </ul>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={newTaskName} onChange={event => setNewTaskName(event.target.value)} /><br/>
//         <button type="submit" className='buttonAdd'><img src={plus} alt='plus' className='plusIcon'/><span>Add card</span></button>
//       </form>
//     </div>
//   );
// }

// export default TaskList;


