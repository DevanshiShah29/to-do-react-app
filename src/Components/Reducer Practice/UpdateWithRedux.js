import React, { Component , useState , useEffect} from 'react';
import { connect } from 'react-redux';
import { action , timeAction } from '../../Action/action';


function UpdateWithReducer(props) {
    const [id, updateId] = useState(0);

    useEffect(() => {
        updateId(id => id + 1);
    }, [props.mytask])
    //console.log(props)

    const UpdateTaskAndTime = (id) => {
        props.changeTask(id)
        props.displayTime()
    }
    return (
        <div className="redux">
            <div className="container">
                <h2 className="heading">My tasks</h2>
                <div className="number task_title"> Task <span>{id}</span></div>
                <div className="task_title">{props.mytask}</div>
                <div className="time_consumed">Time taken: {props.myTime}h</div>
                <button className="button" onClick={() => {UpdateTaskAndTime(id)}}>Next Task</button>
                {/*<button className="button" onClick={() => {props.changeTask("Start Learning Redux thunk")}}>Task Completed</button>*/}
                {/*<button className="button" onClick={() => {props.changeTask(id)} }>Show me my next Task</button>*/}
            </div>
        </div>
    )
}

const mapStateToProps = state => (
    {
        mytask: state.title,
        myTime: state.time
    }
)

const mapDispatchToProps = (dispatch) => {
    return{
        changeTask: (id) => { dispatch(action(id))},
        displayTime: () => { dispatch(timeAction())}
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         changeTask: (NextTask) => {
//             dispatch(action(NextTask))
//         }
//     }
// }

export default connect(mapStateToProps,mapDispatchToProps)(UpdateWithReducer);
