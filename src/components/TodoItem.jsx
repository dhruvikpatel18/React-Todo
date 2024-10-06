import React, { useState, useEffect } from 'react';
import { useNotification } from '../context/NotificationContext';
import '../assets/css/TodoItem.css';
import checkIcon from '../assets/images/check.png';
import checkMarkIcon from '../assets/images/check-mark.png';
import deleteIcon from '../assets/images/delete.png';
import editIcon from '../assets/images/edit.png';
import closeIcon from '../assets/images/close.png';

/**
 * TodoItem component - Represents an individual todo item with options to edit, delete, and mark completion.
 * @param {Object} props - The props object.
 * @param {Object} props.todo - The todo item object.
 * @param {Function} props.toggleCompletion - Function to toggle the completion status of the todo.
 * @param {Function} props.removeTodo - Function to remove the todo.
 * @param {Function} props.editTodo - Function to edit the todo task.
 * @returns {JSX.Element} The rendered todo item component.
 */
const TodoItem = ( { todo, toggleCompletion, removeTodo, editTodo } ) => {
  const [ isEditing, setIsEditing ] = useState( false );
  const [ newTask, setNewTask ] = useState( todo.task );
  const [ isChanged, setIsChanged ] = useState( false );
  const { addNotification } = useNotification();
  const maxCharLimit = 100;

  useEffect( () => {
    if ( newTask !== todo.task ) {
      setIsChanged( true );
    } else {
      setIsChanged( false );
    }
  }, [ newTask, todo.task ] );

  /**
   * Handles toggling of the edit mode and saving the edited task.
   * Validates the task length and shows notifications accordingly.
   * @returns {void}
   */
  const handleEdit = () => {
    if ( isEditing ) {
      if ( newTask.trim().length > maxCharLimit ) {
        addNotification( `Task cannot be longer than ${maxCharLimit} characters.`, 'error' );
        return;
      }

      if ( isChanged ) {
        editTodo( todo.id, newTask );
        addNotification( 'Task edited successfully!', 'success' );
      }
    }
    setIsEditing( ! isEditing );
  };

  /**
   * Handles the deletion of the todo item.
   * @returns {void}
   */
  const handleDelete = () => {
    removeTodo( todo.id );
    addNotification( 'Task deleted successfully!', 'error' );
  };

  /**
   * Handles toggling the completion status of the todo item.
   * Shows a notification indicating the change.
   * @returns {void}
   */
  const handleToggleCompletion = () => {
    toggleCompletion( todo.id );
    const message = todo.completed ? 'Task marked as incomplete!' : 'Task completed successfully!';
    addNotification( message, todo.completed ? 'warning' : 'success' );
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <button
          className="icon-button"
          onClick={handleToggleCompletion}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          <img
            src={todo.completed ? checkMarkIcon : checkIcon}
            alt={todo.completed ? 'Checked' : 'Unchecked'}
            className="check-icon"
            maxLength={maxCharLimit}
          />
        </button>

        {newTask.length > maxCharLimit && (
          <small className="input-error">Task cannot exceed {maxCharLimit} characters.</small>
        )}

        {isEditing ? (
          <input type="text" value={newTask} onChange={( e ) => setNewTask( e.target.value )} />
        ) : (
          <span className={`task-text ${todo.completed ? 'completed' : ''}`}>{todo.task}</span>
        )}

        <div className="todo-actions">
          <button className="icon-button" onClick={handleDelete} aria-label="Delete task">
            <img src={deleteIcon} alt="Delete" className="action-icon delete-icon" />
          </button>

          <button
            className="icon-button"
            onClick={handleEdit}
            aria-label={isEditing && ! isChanged ? 'Close editing' : 'Edit task'}
          >
            <img
              src={isEditing && ! isChanged ? closeIcon : editIcon}
              alt={isEditing && ! isChanged ? 'Close' : 'Edit'}
              className="action-icon edit-icon"
            />
          </button>
        </div>
      </div>

      <div className="task-timestamps">
        {todo.modifiedTime ? (
          <small>Modified: {todo.modifiedTime}</small>
        ) : (
          <small>Added: {todo.addedTime}</small>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
