import React, { useState, useEffect } from 'react'
import axios from 'axios';

function TaskEditor(props) {

    const [task, setTask] = useState({
        title: "",
        time: "",
        description: ""
    });

    const onInputChange = e => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const { title, time, description } = task;

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/tasks/${props.id}`, task);
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/tasks/${props.id}`);
        setTask(result.data);
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit Task</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Task"
                                name="title"
                                value={title}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Time Taken"
                                name="time"
                                value={time}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Description"
                                name="description"
                                value={description}
                                onChange={e => onInputChange(e)}
                            />
                        </div>


                        <button className="btn btn-warning btn-block">Update Task</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TaskEditor;