import React, { Component } from 'react'

class ChildMount extends Component {
    constructor(props){
        super(props)

        this.state = {
            name : "Devanshi"
        }
        console.log("Child constructor method");
        console.log("-----------------------------");
    }
    //react snippet rconst
    

    static getDerivedStateFromProps(props, state){
        console.log("Child getDerivedStateFromProps method")
        console.log("-----------------------------");
        return null;
    }

    componentDidMount(){
        console.log("Child componentDidMount method");
        console.log("-----------------------------");
    }

    shouldComponentUpdate(props, state){
        console.log("Child shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(props, state){
        console.log("Child getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(props,state){
        console.log("Child componentDidUpdate");
    }

    render() {
        console.log("Child render method");
        console.log("-----------------------------");
        return (
            <div>
                Child LifeCycle Method
            </div>
        )
    }
}

export default ChildMount
