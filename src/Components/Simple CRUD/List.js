import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TaskViewer from './TaskViewer';
import TaskEditor from './TaskEditor';
import Modal from 'react-modal';

function List() {
    const [tasks, setTasks] = useState([]);
    const [ selectedTask, setSelectedTask ] = useState(undefined);

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
            {/*{
                selectedTask ? 
                <Modal isOpen={true} onRequestClose={() => setSelectedTask(undefined)}>
                    <TaskViewer id={selectedTask}/>
                    <TaskEditor id={selectedTask}/>
                </Modal>
                :null
            }*/}
            <div className="table-responsive">
                <div className="header"> 
                    <h2>Task List </h2>
                    <Link to="tasks/add" className="btn button btn-outline-light">Add Task</Link> 
                </div>
                
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Task</th>
                            <th scope="col">Time</th>
                            <th scope="col">Action</th>
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
                                        {/*<button onClick={() => setSelectedTask(task.id)} className="btn btn-primary mr-2">View</button>
                                        <button onClick={() => setSelectedTask(task.id)} className="btn btn-outline-primary mr-2">Edit</button>
                                        <button className="btn btn-danger mr-2" onClick={() => deleteTask(task.id)}>Delete</button>*/}
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