// sagas/itemsSaga.ts

import { call, put, takeLatest } from 'redux-saga/effects';
import setItems from '../reducers/itemsReducer';
import getItems from '../src/features/getItems';

function* fetchItems() {
    try {
        const items = yield call(getItems);
        yield put(setItems(items));
    } catch (error) {
        console.log("error : ", error)
    }
}

function* itemsSaga() {
    yield takeLatest('items/fetchItems', fetchItems);
}

export default itemsSaga;
