/**
 * Created by sky on 2018/3/27.
 */
import { takeLatest,all } from 'redux-saga/effects';
import { requestData } from './saga';
import * as types from '../actionTypes/actionTypes';
export default function* rootSaga() {
    yield all([
        takeLatest(types.FETCH_SUCCEEDED,requestData)
    ])
}