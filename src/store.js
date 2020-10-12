import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';
import CRUDReducer from './Reducer/CRUDReducer';

if(localStorage.getItem('tasks')== null)
  localStorage.setItem('tasks', JSON.stringify([]))

const initialState = {
  title:'Learn Redux', 
  time:10,
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem('tasks'))
};

const middleware = [thunk];

const store = createStore( CRUDReducer ,initialState , compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) );

export default store;

//Another Method
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //dev tools access
//const store = createStore(rootReducer,{title:'Learn Redux', time:10}, composeEnhancers(applyMiddleware(thunk)));
