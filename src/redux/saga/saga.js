/**
 * Created by sky on 2018/3/27.
 */
import { call,put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Api from '../../services/api';
import { actions } from '../reducers/reducer';
/*
 * takeLatest:和takeEvery一样，区别是takeLatest只关注最后，即是最近一次发起的请求，若上次的请求未返回，则会被取消
 * takeEvery:用来监听action ，每个action都触发一次，若对应的是异步操作，每次都发起异步请求，不论上次是否返回
 * */
export function* requestData(action) {
    debugger
    try {
        yield call(delay, 300);
        const data = yield call(Api.getArticleList(), action.data);
        if (data && data.status) {
            yield put(actions.getList(data))
        }
    } catch (e) {
        yield put(actions.failed)
    }
}