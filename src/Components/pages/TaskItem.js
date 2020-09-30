import React, { Component } from 'react'

class TaskItem extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>{this.props.task.title}</td>
                    <td>{this.props.task.time} hours</td>
                </tr>
            </tbody>
        )
    }
}


export default TaskItem;
