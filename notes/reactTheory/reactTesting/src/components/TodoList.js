import React, { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleRemoveTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const handleCompleteTask = (taskId) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Enter task..."
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleCompleteTask(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                        <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
