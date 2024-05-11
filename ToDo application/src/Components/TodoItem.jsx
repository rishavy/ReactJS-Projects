import React from 'react';

const TodoItem = ({ task, onDeleteTask, onToggleTask }) => {
  return (
    <li 
        className={`flex items-center justify-between border-b border-gray-300 px-2 py-2 hover:shadow-md ${task.completed ? 'line-through text-gray-400' : ''}`}
        onClick={() => onToggleTask(task.id)}
        style={{ wordWrap: 'break-word' }}
    >
    <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        className="mr-2 cursor-pointer"
    />
    <span className="mr-auto">{task.text}</span>
    <button 
        className="text-red-500 font-bold hover:text-red-600 focus:outline-none ml-2"
        onClick={(e) => {
        e.stopPropagation();
        onDeleteTask(task.id);
        }}
    >
        &#x2715;
    </button>
    </li>

  );
};

export default TodoItem;
