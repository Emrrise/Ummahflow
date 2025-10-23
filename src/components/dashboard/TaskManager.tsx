import React, { useEffect, useState } from 'react';

type Task = { id: string; text: string; done: boolean };

const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        const raw = localStorage.getItem('ummah_tasks');
        if (raw) setTasks(JSON.parse(raw));
    }, []);

    useEffect(() => {
        localStorage.setItem('ummah_tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        const text = taskInput.trim();
        if (!text) return;
        const newTask: Task = { id: Date.now().toString(), text, done: false };
        setTasks(prev => [newTask, ...prev]);
        setTaskInput('');
    };

    const toggleDone = (id: string) => {
        setTasks(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
    };

    const removeTask = (id: string) => {
        setTasks(prev => prev.filter(t => t.id !== id));
    };

    const editTask = (id: string) => {
        const t = tasks.find(x => x.id === id);
        if (!t) return;
        const newText = prompt('Edit task', t.text);
        if (newText !== null) setTasks(prev => prev.map(x => (x.id === id ? { ...x, text: newText } : x)));
    };

    const completedCount = tasks.filter(t => t.done).length;
    const progress = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0;

    const syncDaily = () => {
        // Simple daily reset but keep incomplete tasks
        const todayKey = 'ummah_tasks_day_' + new Date().toDateString();
        localStorage.setItem(todayKey, JSON.stringify(tasks));
        alert('Tasks synced for today');
    };

    return (
        <div className="task-manager card">
            <h2>Daily Task Manager</h2>
            <div style={{ margin: '12px 0' }}>
                <div className="progress" style={{ marginBottom: 8 }}>
                    <i style={{ width: `${progress}%` }} />
                </div>
                <small>{progress}% completed</small>
            </div>

            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <input value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder="Add a new task (e.g., Read 2 pages of Quran)" />
                <button className="button" onClick={addTask}>Add</button>
                <button className="button alt" onClick={syncDaily}>Sync</button>
            </div>

            <ul className="task-list">
                {tasks.map(task => (
                    <li className={`task-item ${task.done ? 'done' : ''}`} key={task.id}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <input type="checkbox" checked={task.done} onChange={() => toggleDone(task.id)} />
                            <div>{task.text}</div>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                            <button className="button" onClick={() => editTask(task.id)}>Edit</button>
                            <button className="button alt" onClick={() => removeTask(task.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;