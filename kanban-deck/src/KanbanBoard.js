import React from 'react';
import KanbanColumn from './KanbanColumn';



function KanbanBoard() {

  
  
  

  const inBacklog = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' }
  ];

  const inProgressTasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' }
  ];

  const inReviewTasks = [
    { id: 4, title: 'Task 4' },
    { id: 5, title: 'Task 5' },
    { id: 6, title: 'Task 6' }
  ];

  const doneTasks = [
    { id: 7, title: 'Task 7' },
    { id: 8, title: 'Task 8' },
    { id: 9, title: 'Task 9' }
  ];


  
  

  return (
    
    <div className="kanban-board">
      <KanbanColumn title="BackLog" tasks={inBacklog} className='BacklogCard'/>
      <KanbanColumn title="Ready" tasks={inProgressTasks} />
      <KanbanColumn title="In progress" tasks={inReviewTasks} />
      <KanbanColumn title="Finished" tasks={doneTasks} />
      

      
    </div>
    
  );
}

export default KanbanBoard;
