import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function List() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const result = await axios.get('http://localhost:3003/tasks');
        setTasks(result.data.reverse());
    }

    const deleteTask = async id => {
        await axios.delete(`http://localhost:3003/tasks/${id}`);
        loadTasks();
    };

    return (
        <div className="crud-section">
            List of Tasks
        <div class="table-responsive">
                <Link to="tasks/add" className="btn btn-outline-light">Add User</Link>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Task</th>
                            <th scope="col">Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{task.title}</td>
                                    <td>{task.time} h</td>
                                    <td>
                                        <Link to={`tasks/view/${task.id}`} className="btn btn-primary mr-2">View</Link>
                                        <Link to={`tasks/edit/${task.id}`} className="btn btn-outline-primary mr-2">Edit</Link>
                                        <Link className="btn btn-danger mr-2" onClick={() => deleteTask(task.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default List;