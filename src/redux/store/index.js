/**
 * Created by sky on 2018/3/19.
 */
import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/index';
import rootSaga from '../saga/index';
const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
export default store;