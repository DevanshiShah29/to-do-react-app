// export const action = (NextTask) => {
//     return{
//         type: 'CHANGE_TASK', 
//         payload: NextTask
//     }
// }


export const action = (id) => {
    return (dispatch) =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => data.map(title => {
            if(id === title.id){
                dispatch({
                    type: "CHANGE_TASK",
                    payload: title.title
                })
            }
        }));
    }
}


export const timeAction = () => {
    return (dispatch) => {
        const time = Math.floor(Math.random() * 20);
        dispatch({
            type: "CHANGE_TIME",
            payload: time
        })  
    };
}


// export const timeAction = (id) => {
//     return (dispatch) =>{
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(res => res.json())
//         .then(data => data.map(data => {
//             console.log(data.id)
//             if(id === data.id){
//                 dispatch({
//                     type: "CHANGE_TIME",
//                     payload: data.id
//                 })
//             }
//         }));
//     }
// }

export const insert = data => {
    return{
        type: 'INSERT',
        payload: data
    }
}

export const update = data => {
    return{
        type: 'UPDATE',
        payload: data
    }
}

export const Delete = index => {
    return{
        type: 'DELETE',
        payload: index
    }
}

export const UpdateIndex = index => {
    return{
        type: 'UPDATE-INDEX',
        payload: index
    }
}