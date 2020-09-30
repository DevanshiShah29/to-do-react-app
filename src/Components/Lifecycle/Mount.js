import React, { Component } from 'react'
import ChildMount from './ChildMount';

class Mount extends Component {
    constructor(props){
        super(props)

        this.state = {
            name : "Devanshi"
        }
        console.log("Parent constructor method");
        console.log("-----------------------------");
    }
    //react snippet rconst
    

    static getDerivedStateFromProps(props, state){
        console.log("Parent getDerivedStateFromProps method")
        console.log("-----------------------------");
        return null;
    }

    componentDidMount(){
        console.log("Parent componentDidMount method");
        console.log("-----------------------------");
    }

    shouldComponentUpdate(props, state){
        console.log("Parent shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(props, state){
        console.log("Parent getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(props,state){
        console.log("Parent componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: 'Devanshi shah'
        })
    }

    render() {
        console.log("Parent render method");
        console.log("-----------------------------");
        return (
            <div>
                <ChildMount/>
                Parent LifeCycle Methods
                <button onClick={this.changeState}>Click to update State</button>
            </div>
        )
    }
}

export default Mount
