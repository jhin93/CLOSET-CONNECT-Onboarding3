import { all } from 'redux-saga/effects';
import itemsSaga from 'src/features/sagas/itemsSaga'; // 실제 사용 중인 Saga 파일로 변경해야 합니다

function* rootSaga() {
    yield all([
        itemsSaga(),
    ]);
}

export default rootSaga;
