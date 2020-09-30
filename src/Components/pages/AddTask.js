import React, { Component } from 'react'

class AddTask extends Component {
    state = {
        title: '',
        time: ''
    }

    onTaskChange = (e) => this.setState({ title : e.target.value });
    onTimeChange = (e) => this.setState({ time : e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.time);
        this.setState({ title: '' ,time:''});
    }

    render() {
        return (
            <>
            <form onSubmit={this.onSubmit} className="add-task-from">
            <h2>Log your work</h2>
                Task:<input type="text" name="title" className="input" placeholder="Enter task" value={this.state.title}
                onChange={this.onTaskChange}/>
                <br></br>
                Time:<input type="text" name="time" className="input" placeholder="Enter time" value={this.state.time}
                onChange={this.onTimeChange}/>
                <br></br>
                <input type="Submit" value="Log" className="submit"/>
            </form>
            </>
        )
    }
}

export default AddTask;
