import React, { Component } from 'react'
import Tasks from './Tasks';
import AddTask from './AddTask';
import {v4 as uuidv4 } from 'uuid';
import TimeTaken from './TotalTime'

class Log extends Component {
    state = {
        tasks: [
          {
            id:uuidv4(),
            title: "Javascript",
            time : "14"
          },
          {
            id:uuidv4(),
            title: "React",
            time : "10"
          },
          {
            id:uuidv4(),
            title: "AWS",
            time : "16"
          },
        ],
        mount : true
      };

      isMount = () => {
        this.setState({mount : true})
      }

      isUnmount = () => {
          this.setState({mount : false})
      }

      addTask = (title,time) =>{
          const addedTask ={
              id:uuidv4(),
              title: title,
              time: time,
          }
          this.setState({tasks: [...this.state.tasks, addedTask]});
      }
    render() {
        //console.log(this.state.tasks,"this.state.tasks");
        let allTasks = this.state.tasks;
        
        let time = allTasks.map((hour) => +(hour.time* 60)).filter((a) => a>=60).reduce((a,b) => a + b,0);
        
        return (
            <>
            <div className="log-wrapper">
                <AddTask addTask={this.addTask}/>
                <Tasks tasks={this.state.tasks}/>
                <button onClick={this.isUnmount} disabled={!this.state.mount}><h3>Unmount</h3></button>
                <button onClick={this.isMount} disabled={this.state.mount}><h3>Mount</h3></button> 
                {this.state.mount ? <TimeTaken time={time} /> : null }
            </div>
          </>
        )
    }
}

export default Log;
