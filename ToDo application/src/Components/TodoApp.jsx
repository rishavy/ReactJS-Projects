import { useState } from 'react';
import TodoList from './TodoList';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto border bg-white rounded px-16 py-8 hover:shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Todo Application</h1>
      <div className="flex mb-4 hover:shadow-lg">
        <input 
            type="text" 
            className="flex-1 border border-gray-300 p-2 rounded mr-2 focus:outline-none focus:border-blue-400" 
            placeholder="Enter task..." 
            value={inputValue} 
            onChange={handleInputChange} 
        />
        <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleAddTask}
        >
            Add Task
        </button>
        </div>
      <TodoList 
        tasks={tasks} 
        onDeleteTask={handleDeleteTask} 
        onToggleTask={handleToggleTask} 
      />
    </div>
  );
};

export default TodoApp;
