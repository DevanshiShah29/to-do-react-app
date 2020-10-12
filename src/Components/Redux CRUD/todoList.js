import React, { Component } from 'react'
import Form from './todoForm';
import { connect } from 'react-redux';
import * as actions from '.././../Action/action';
import Modal from 'react-modal';
import View from './todoViewer';

class todoList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        currentIndex: -1,
        list: this.returnList(),
        selectedTask: ''
      };
    };

    returnList = () => {
        if(localStorage.getItem('tasks')== null)
            localStorage.setItem('tasks', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('tasks'))
       
    }

    onAddOrEdit = (data) => {
        var list = this.returnList();
        if(this.state.currentIndex === -1){
            list.push(data)
        }   
        else{
            list[this.state.currentIndex] = data;
        }   
        localStorage.setItem('tasks', JSON.stringify(list))
        this.setState({list, currentIndex:-1})
    }

    handleEdit = (index) => {
        // this.setState({
        //     currentIndex: index
        // })
        this.props.updateTaskIndex(index);
    }

    handleDelete = (index) => {
        // var list = this.returnList()
        // if (window.confirm("Are you sure you want to delete this task?")) {
        //     list.splice(index , 1)
        //     localStorage.setItem('tasks', JSON.stringify(list))
        //     this.setState({list, currentIndex:-1})
        // } else {
        //     localStorage.setItem('tasks', JSON.stringify(list))
        //     this.setState({list, currentIndex:-1})
        // }

        //this.props.dispatch(actions.Delete(index))

        this.props.deleteTask(index)
    }

    selectedTask = (index) => {
        this.setState({
            selectedTask : index
        })
    }
    
    render() {
        return (
            <div className="redux-crud">
                {
                    this.state.selectedTask ? 
                    <Modal isOpen={true} onRequestClose={() => this.setState({selectedTask: ''})}>
                        <View id={this.state.selectedTask} data={this.state.list}/>
                    </Modal>
                    :null
                }
               <Form onAddOrEdit={this.onAddOrEdit} currentIndex={this.state.currentIndex}
               list = {this.state.list}/>
                <h2>List of tasks:</h2>
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
                            this.props.list.map((task, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{task.title}</td>
                                    <td>{task.time} h</td>
                                    <td>
                                        <button onClick={() => this.selectedTask(index)} className="btn btn-primary mr-2">View</button>
                                        <button onClick={() => this.handleEdit(index)} className="btn btn-outline-primary mr-2">Edit</button>
                                        <button onClick={() => this.handleDelete(index)} className="btn btn-danger mr-2">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    {console.log(state.list,"list")}
    return {
        list: state.list
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteTask : (index) => dispatch(actions.Delete(index)),
        updateTaskIndex: (index) => dispatch(actions.UpdateIndex(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(todoList);
