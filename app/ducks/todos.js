
export const TODOS = {
    LOAD: 'TODOS_LOAD',
    LOAD_SUCCESS: 'TODOS_LOAD_SUCCESS',
    LOAD_FAIL: 'TODOS_LOAD_FAIL',
};
export const setTodos = todos => ({
    type: TODOS.LOAD_SUCCESS,
    todos,
});

export const fetchTodos = () =>({
    type: TODOS.LOAD
})

const todosReducer = (state = [], action) => {
    if (action.type === TODOS.LOAD_SUCCESS) {
        return [...state,...action.todos];
    }
    return state;
};

export default todosReducer