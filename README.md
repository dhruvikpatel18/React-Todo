# React Todo App

A simple and interactive **To-do application** built with **React**. Users can:
- Add tasks
- Remove tasks
- Edit tasks
- Mark tasks as completed
- Drag and drop tasks to reorder them
- Filter tasks by All, Completed, and Pending

The app stores tasks in **local storage** to persist data across page reloads.

## Features
- **Add New Task**: Input field for entering a new task.
- **Edit Task**: Ability to edit any existing task by clicking the edit button.
- **Delete Task**: Remove a task from the list.
- **Mark as Completed**: Mark tasks as complete or pending by clicking on the checkbox.
- **Drag and Drop Reordering**: Drag tasks and drop them in a new order.
- **Filter Tasks**: Filter tasks by "All", "Completed", and "Pending".
- **Local Storage Persistence**: Tasks are saved in the browser’s local storage to ensure persistence between sessions.

## Installation

Follow the steps below to set up and run the Todo app locally:

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine.

### Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/react-todo-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd react-todo-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the application:
    ```bash
    npm start
    ```

The app will be available at `http://localhost:3000`.


## Usage

- **Add Task**: Type a new task into the input field and click the "Add" button.
- **Edit Task**: Click the "Edit" icon next to a task, modify the text, and save it.
- **Delete Task**: Click the "Delete" icon to remove the task.
- **Complete Task**: Click the checkbox to mark a task as completed or pending.
- **Drag and Drop**: Reorder tasks by dragging and dropping them in the desired order.
- **Filter Tasks**: Use the buttons to filter tasks by their completion status.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **ESLint**: Linter for identifying and reporting on patterns in JavaScript.
- **Prettier**: A code formatter to ensure consistent style.
- **Stylelint**: Linter for CSS.

## Scripts

- `npm start`: Runs the app in development mode.
- `npm run lint`: Lints the JavaScript and CSS files for any style violations.
- `npm run lint:fix`: Fixes any linting issues automatically.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


