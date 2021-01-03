import { put, call, takeEvery, select } from 'redux-saga/effects';

// import { setImages } from ';
import { IMAGES, setImages } from '../ducks/users';
import { fetchImages } from '../api/fetchImages';

export const getPage = state => state.nextPage;

export function* handleUsersLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        // yield put(setError(error.toString()));
        console.log(error)
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleUsersLoad);
}
