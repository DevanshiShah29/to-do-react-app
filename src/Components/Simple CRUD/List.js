import React, { useState, useEffect , useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TaskViewer from './TaskViewer';
import TaskEditor from './TaskEditor';
import Modal from 'react-modal';
import ReactTable from 'react-table';
import "react-table/react-table.css";  
import Pagination from "../../Pagination";

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

    const columns = [
        {
            Header:'No.',
            accessor:'id',
            filterable: true,
            sortable:true,
        },
        {
            Header:'Task',
            accessor:'title',
            filterable: true,
            sortable:true
        },
        {
            Header:'Time',
            accessor:'time',
            className: "thead-dark",
            headerClassName: "thead-dark",
            filterable: true,
            sortable:true
        },
        {
            Header:'Actions',
            accessor: "Action",
            className: "td_action action-td",
            filterable: false,
            sortable:false,
            headerClassName: "action-th",
            Cell: ({ tasks }) => (
                <>
                <Link to={`tasks/view/`} className="btn btn-primary mr-2">View</Link>
                <Link to={`tasks/edit/`} className="btn btn-outline-primary mr-2">Edit</Link>
                <Link className="btn btn-danger mr-2" >Delete</Link>
                </>
            )
            
        }

    ]

    const apiData = tasks;
    
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
                
                <ReactTable
                    data={apiData}  
                    columns={columns} 
                    defaultPageSize={10} 
                    PaginationComponent={Pagination}
                />
            </div>
        </div>
    )
}
export default List;