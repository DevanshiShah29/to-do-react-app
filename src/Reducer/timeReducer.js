const timeReducer = (state = '', action) =>{
    //console.log(action, "Action passed from mapDispatch")
    if(action.type === 'CHANGE_TIME'){
        return action.payload
    }
    return state;
}

export default timeReducer;