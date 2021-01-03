import { all, fork } from 'redux-saga/effects';

import userSaga from './users';
import todosSaga from './todos';
// import statsSaga from './statsSaga';

export default function* rootSaga() {
    // yield all([userSaga(), todosSaga()]);
    yield all([
        fork(userSaga),
        fork(todosSaga)
    ])
}
