import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/styles.css';
import App from './App';
import { NotificationProvider } from './context/NotificationContext';
import './assets/css/Notification.css';

/**
 * Root element of the application where the React app will be mounted.
 * @type {HTMLElement}
 */
const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

/**
 * Renders the main React application within the NotificationProvider context.
 * @returns {void}
 */
root.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
);
