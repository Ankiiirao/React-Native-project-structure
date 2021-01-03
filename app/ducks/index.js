import { combineReducers } from 'redux';
import todosReducer from './todos';
import imagesReducer from './users';


const rootReducer = combineReducers({
    images: imagesReducer,
    todos: todosReducer
});

export default rootReducer;