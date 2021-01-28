import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '.././../Action/action';

class todoForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...this.returnStateObject()
        }
    };
    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                title: '',
                time: '',
                description: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    };

    componentDidUpdate(prevProps){
        if(prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length){
            this.setState({...this.returnStateObject()})
        }

    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.onAddOrEdit(this.state)

        if (this.props.currentIndex === -1){
            this.props.insertTask(this.state)
        }
        else{
            this.props.updateTask(this.state)
        }
    }
    
    render() {
        return (
            <div className="redux-crud">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Time Taken"
                        name="time"
                        value={this.state.time}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                    />
                </div>

                <button className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    {console.log(state.list,"list",state, state.currentIndex)}
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        insertTask : (data) => dispatch(actions.insert(data)),
        updateTask : (data) => dispatch(actions.update(data))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(todoForm);
