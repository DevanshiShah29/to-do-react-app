import React, { Component } from 'react'

export default class TotalTime extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           time: 0,
           initializing : true,
        };
    };


    static getDerivedStateFromProps(props, state){
        if(props.time && state.time !== props.time){
            console.log("get derived state from props");
            return{time : props.time}
        }
        console.log(props.time,"&&", state.time, "==", props.time)
        console.log("get derived state from props - not executed");
        return null;
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({initializing : false})
        }, 1000);
        console.log("Component Did Mount");
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.time && this.props.time 
            === nextProps.time){
                console.log("Should Component Update - Do not render");
                return false;
            }
        console.log(nextProps.time,"&&", this.props.time,"===", nextProps.time)
        console.log("Should Component Update - render");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Get Snapshot before Update")
        return null;
    }

    render() {
        console.log("Render");
        let allTasks = this.props.time;
        //let time = allTasks.map((hour) => +(hour.time* 60)).filter((a) => a>=60).reduce((a,b) => a + b,0);

        if(this.state.initializing){
            return <h4 className="loading">Loading...</h4>
        }
        
        return (
            <>
                <div className="time-container">
                    <h3 className="total-time">Time</h3>
                    <h3 className="total-time">{this.state.time} Minutes</h3> 
                </div>
            </>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did Update");
        console.log("-----------------------");
    }

    componentWillUnmount(){
        console.log("Component will Unmount");
        console.log("-----------------------");
    }
}
