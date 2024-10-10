import React, { useRef, useState   } from 'react';
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
  const taskInputRef = useRef( null );
  const { addNotification } = useNotification();
  const maxCharLimit = 100;
  const [ inputError, setInputError ] = useState( false );

  /**
   * Handles form submission to add a new task.
   * Validates input and displays notifications on success or failure.
   * @param {Event} e - The form submission event.
   * @returns {void}
   */
  const handleSubmit = ( e ) => {
    e.preventDefault();

    const task = taskInputRef.current.value.trim();

    if ( task.length > maxCharLimit ) {
      addNotification( `Task cannot be longer than ${maxCharLimit} characters.`, 'error' );
      setInputError( true );
      return;
    }

    if ( task ) {
      addTodo( task );
      addNotification( 'Task added successfully!', 'success' );
      taskInputRef.current.value = '';
      setInputError( false );
    } else {
      addNotification( 'Please enter a task!', 'warning' );
    }
  };

  const handleInputChange = () => {
    const task = taskInputRef.current.value;
    if ( task.length > maxCharLimit ) {
      setInputError( true ); // Show error message when task exceeds the limit
    } else {
      setInputError( false ); // Hide error message when task length is valid
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        ref={taskInputRef}
        placeholder="Add a new task (max 100 characters)"
        onChange={handleInputChange}
      />

      {inputError && (
        <small className="input-error">Task cannot exceed {maxCharLimit} characters.</small>
      )}

      <button type="submit">
        <img src={addIcon} alt="Add Icon" className="add-icon" /> Add
      </button>
    </form>
  );
};

export default AddTodo;
