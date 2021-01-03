import { put, call, takeEvery, select } from 'redux-saga/effects';
import { fetchTodos } from '../api/fetchTodos';

import { TODOS, setTodos } from '../ducks/todos';

export function* handleUsersLoad() {
    try {
        const todos = yield call(fetchTodos);
        yield put(setTodos(todos));
    } catch (error) {
        console.log(error)
    }
}

export default function* watchTodosLoad() {
    yield takeEvery(TODOS.LOAD, handleUsersLoad);
}
