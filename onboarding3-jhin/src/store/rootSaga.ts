import { put, takeLatest, all } from 'redux-saga/effects';
import { fetchData } from './dataSlice'; // Import the action

// Define a saga to fetch data
function* fetchDataSaga() {
    try {
        const response = yield axios.get('https://test.com');
        yield put(fetchData.fulfilled(response.data));
    } catch (error) {
        console.error('Failed to fetch data', error);
    }
}

// Root Saga
export function* rootSaga() {
    yield all([takeLatest(fetchData.type, fetchDataSaga)]);
}
