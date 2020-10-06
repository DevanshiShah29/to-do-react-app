// const isState = {
//     id : 1,
//     title : 'Learn Redux',
//     time : 14
// }

const taskReducer = (state = '', action) =>{
    //console.log(action, "Action passed from mapDispatch")
    if(action.type === 'CHANGE_TASK'){
        return action.payload
    }
    return state;
}

export default taskReducer;