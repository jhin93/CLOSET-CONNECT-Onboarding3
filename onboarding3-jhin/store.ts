
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import itemsSaga from "sagas/itemsSaga";

// Redux Store와 Redux Saga를 연동하는 createSagaMiddleware 메소드. 간단하고 표준적인 방법 + 코드 관리 용이
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(itemsSaga);

export default store;
