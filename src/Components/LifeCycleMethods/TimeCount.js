import React, { Component } from 'react'
import Error from './ErrorComponent'

class TimeCount extends Component {
    constructor(props) {
        console.log('Constructor');
        super(props)
      
        this.state = {
            time: 1200,
            random : 0,
            initializing : true
        };

        this.increment = () => {
            this.setState(
                {time :this.state.time + 60}
            )
        }
  
        this.decrement = () => {
            this.setState(
                {time :this.state.time - 60}
            )
        }
  
    };

    //This method will give you a chance to copy any values from props that you may be interested
    //in transferring over to state
    
    static getDerivedStateFromProps(props, state){
        if(props.random && state.random !== props.random){
            return{
                time : props.random,
                random : props.random
            }
        }
        return null;
    }
    
    //Good method to do network requests and initial loading
    componentDidMount(){
        setTimeout(() => {
            this.setState({initializing : false})
        }, 1000);
        console.log("Component Did Mount");
        console.log("---------------");
    }
    

    // let react know if render should be triggered or not, react does it well. 
    //But sometimes if your state/ props get updated and you don't really need render to be triggered,
    //beacuse you're not changing anything in the UI, and especially when your render method is expensive
    // to compute then you can definitely gain performance here
    
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.additionalTime && this.props.additionalTime 
            === nextProps.additionalTime){
                console.log("Should Component Update - Do render");
                console.log("---------------");
                return true;
            }
        console.log("Should Component Update - Do not render");
        console.log("---------------");
        return false;
    }

    //This method allows us to capture some properties that are not stored in the state 
    //Before we re-render that component, its return is passed as snapshot to CDU
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Get Snapshot before Update")
        return null;
    }
    
    render() {
        console.log('Render', this.state.error);

        if(this.state.initializing){
            return <h4 className="loading">Loading...</h4>
        }

        if(this.props.showErrorComponent && this.state.error){
            return <div>We have encountered an Error : {this.state.error.message}</div>
        }
        return (
            <div className="time">
                <h3>Utilizing all life cycle methods</h3>
                <br></br>
                <div>Total Time taken : {this.state.time} minutes</div>
                <div><button className="button" onClick={this.increment}>Increment</button>
                <button className="button" onClick={this.decrement}>Decrement</button></div>
                <div><h4>(componentDidUpdate)</h4></div>
                {this.state.showErrorComponent ? <Error/> : null}
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did Update");
        console.log("---------------");
    }

    componentWillUnmount(){
        console.log("Component will Unmount");
        console.log("---------------");
    }

    // componentDidCatch(error, info){
    //     console.log("Component Did Catch");
    //     this.setState({error, info})
    // }
}
export default TimeCount;
