
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import itemsSaga from "sagas/itemsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(itemsSaga);

export default store;
