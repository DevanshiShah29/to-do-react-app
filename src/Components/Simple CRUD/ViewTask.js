import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewTask() {

    const [task, setTask] = useState({
        title: "",
        time: "",
        description: ""
    });

    const { id } = useParams();

    const loadTasks = async () => {
        const result = await axios.get(`http://localhost:3003/tasks/${id}`);
        setTask(result.data);
    }

    useEffect(() => {
        loadTasks();
    }, [])
    
    return (
        <div>
            <div className="container py-4">
                <Link className="btn btn-primary" to="/crud">
                    back
                </Link>
                <h1 className="display-4">Task Id: {id}</h1>
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
