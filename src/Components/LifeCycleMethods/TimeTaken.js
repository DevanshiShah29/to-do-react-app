import React, { Component } from 'react'
import TimeCount from './TimeCount'

class TimeTaken extends Component {
    constructor(props) {
      super(props)
    
        this.state = {
            mount :true,
            additionalTime : 0,
            random : 1200,
            showErrorComponent: false
        };

        this.isMount = () => {
            this.setState({mount : true})
        }

        this.isUnmount = () => {
            this.setState({mount : false})
        }

        this.additionalTime = () => {
            this.setState(
                {additionalTime : Math.random()}
            )
        }

        this.randomTimeGenerator = () => {
            this.setState (
                {random : Number.parseInt(Math.random() * 1200)}
            )
        }

        this.toggleError = () => {
            this.setState (
                {showErrorComponent : !this.state.showErrorComponent}
            )
        }
    };
    
    render() {
        return (
            <div className="time-taken-page">
                <div className="options">
                    <button onClick={this.isUnmount} disabled={!this.state.mount}><h3>Unmount</h3>(componentWillUnmount)</button>
                    <button onClick={this.isMount} disabled={this.state.mount}><h3>Mount</h3>(componentDidMount)</button>
                    <button onClick={this.additionalTime}><h3>Update Time</h3>(shouldComponentUpdate)</button>
                    <button onClick={this.randomTimeGenerator}><h3>Go random</h3> (getDerivedStateFromProps used)</button>
                    <button onClick={this.toggleError}><h3>Toggle Error</h3>(componentDidCatchX)</button>
                </div>
                {this.state.mount ? <TimeCount additionalTime={this.state.additionalTime} random={this.state.random} showErrorComponent={this.state.showErrorComponent}/> : null }
            </div>
        )
    }
}

export default TimeTaken;
