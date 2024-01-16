import React from 'react';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  const { id, name, dateAdded, completed } = task;

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <span>{name}</span>
      <span>{dateAdded}</span>
      <button onClick={() => onDelete(id)}>
        <FaTrashAlt />
      </button>
      <button onClick={() => onToggle(id)}>
        <FaCheck />
      </button>
    </div>
  );
};

export default Task;