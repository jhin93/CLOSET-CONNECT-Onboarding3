
import { call, put, takeLatest } from 'redux-saga/effects';
import setItems from '../reducers/itemsReducer';
import getItems from '../src/features/getItems'; // 아이템 metadata 리스트를 불러오는 함수 getItems

function* fetchItems() {
    try {
        const items = yield call(getItems); // 'call' : API 호출과 같은 비동기 작업을 처리하고 해당 함수가 완료될 때까지 Generator 함수를 일시중지.
        yield put(setItems(items)); // 'put' : Redux 액션을 디스패치할 때 사용. 액션을 디스패치하여 Redux 스토어의 상태를 업데이트.
        // yield : 뒤에 오는 표현식은 일시 중지된 함수의 결과로 반환됨. 모든 yield가 순서에 따라 전부 종료되고 나면 함수가 종료.
    } catch (error) {
        console.log("error : ", error)
    }
}

function* itemsSaga() {
    yield takeLatest('items/fetchItems', fetchItems);
}

export default itemsSaga;
