import React, { useState } from 'react';
import { useNotification } from '../context/NotificationContext';
import '../assets/css/AddTodo.css';
import addIcon from '../assets/images/add.png';

/**
 * AddTodo component - A form for adding a new todo task.
 * @param {Object} props - The props object.
 * @param {Function} props.addTodo - The function to add a new task.
 * @returns {JSX.Element} The rendered component for adding a new todo.
 */
const AddTodo = ( { addTodo } ) => {
  const [ task, setTask ] = useState( '' );
  const { addNotification } = useNotification();
  const maxCharLimit = 100;

  /**
   * Handles form submission to add a new task.
   * Validates input and displays notifications on success or failure.
   * @param {Event} e - The form submission event.
   * @returns {void}
   */
  const handleSubmit = ( e ) => {
    e.preventDefault();

    if ( task.trim().length > maxCharLimit ) {
      addNotification( `Task cannot be longer than ${maxCharLimit} characters.`, 'error' );
      return;
    }

    if ( task.trim() ) {
      addTodo( task );
      addNotification( 'Task added successfully!', 'success' );
      setTask( '' );
    } else {
      addNotification( 'Please enter a task!', 'warning' );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={task}
        onChange={( e ) => setTask( e.target.value )}
        placeholder="Add a new task (max 100 characters)"
      />

      {task.length > maxCharLimit && (
        <small className="input-error">Task cannot exceed {maxCharLimit} characters.</small>
      )}

      <button type="submit">
        <img src={addIcon} alt="Add Icon" className="add-icon" /> Add
      </button>
    </form>
  );
};

export default AddTodo;
