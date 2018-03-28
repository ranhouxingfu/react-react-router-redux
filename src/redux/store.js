/**
 * Created by sky on 2018/3/19.
 */
//import {createStore, applyMiddleware } from 'redux';
//import createSagaMiddleware from 'redux-saga';
//import reducer from './reducers/reducer';
//import rootSaga from './saga/rootSaga';
//const sagaMiddleware = createSagaMiddleware();
//const store = createStore(
//    reducer,
//    applyMiddleware(sagaMiddleware)
//);
//sagaMiddleware.run(rootSaga);
//export default store;

import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/sagatest';
import rootSaga from './saga/increment';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
export default store;