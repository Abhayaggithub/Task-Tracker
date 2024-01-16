import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      onAdd({ name: taskName, dateAdded: new Date().toLocaleDateString(), completed: false });
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default TaskForm;