import React, { useState, useEffect } from 'react'
import axios from "axios";

function TaskViewer(props) {
    const [task, setTask] = useState({
        title: "",
        time: "",
        description: ""
    });

    const loadTasks = async () => {
        const result = await axios.get(`http://localhost:3003/tasks/${props.id}`);
        setTask(result.data);
        console.log(props.id)
    }

    useEffect(() => {
        loadTasks();
    }, [])

    return (
        <div>
            <div className="container py-4">
                <h3>Detailed Summary</h3>
                <hr />
                <ul className="list-group w-50">
                    <li className="list-group-item">Task: {task.title}</li>
                    <li className="list-group-item">Total Time: {task.time}</li>
                    <li className="list-group-item">Description: {task.description}</li>
                </ul>
            </div>
        </div>
    )
}

export default TaskViewer;
