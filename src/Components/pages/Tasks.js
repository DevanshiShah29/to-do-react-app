import React, { Component } from 'react'
import TaskItem from './TaskItem';

class Tasks extends Component {
    render() {
        let taskVar = this.props.tasks;
        return <div style={getStyle}>
                <table className="table" style={tableStyle}>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    {
                        taskVar.sort((a, b) => a.time - b.time).map((task) => (
                            <TaskItem key={task.id} task={task}/> )
                        )
                    }
                </table>
            </div>;
    }
}

const getStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
};
var tableStyle = {
    "border": "1px solid black",
    "width" : "100%"
 };
export default Tasks;