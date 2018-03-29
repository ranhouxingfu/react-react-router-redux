/**
 * Created by sky on 2018/3/27.
 */
//import {delay} from 'redux-saga';
import {call,put} from 'redux-saga/effects';
import {getArticleList} from '@/services/api';
import {actions} from '../index';
// saga练习
//export function* helloSaga() {
//    console.log('Hello Saga!')
//}
export function* incrementAsync() {
    yield put(actions.increment({payLoad: 1}))
}

export function* decrementAsync() {
    yield put(actions.decrement({payLoad:1}))
}

export function* addIfOddAsync() {
    yield put(actions.addIfOdd())
}
/*
 * call和apply非常适合返回Promise结果的函数
 * cps：可以用来处理Node风格的函数
 * */
// 获取文章列表
export function* getArticleListAsync() {
    const data = yield call(getArticleList)
    yield put(actions.getListSuccess(data.data))
}


