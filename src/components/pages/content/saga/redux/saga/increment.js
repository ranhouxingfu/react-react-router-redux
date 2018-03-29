/**
 * Created by sky on 2018/3/27.
 */
import {delay} from 'redux-saga';
import {call,put} from 'redux-saga/effects';
import {getArticleList} from '@/services/api';
import {actions} from '../index';
// saga练习
//export function* helloSaga() {
//    console.log('Hello Saga!')
//}
//export function* incrementAsync() {
//    yield call(delay, 1000);
//    yield put({ype: 'INCREMENT'})
//}
//export function* watchIncrementAsync() {
//    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
//}


// 获取文章列表
/*
 * call和apply非常适合返回Promise结果的函数
 * cps：可以用来处理Node风格的函数
 * */
export function* getArticleListAsync() {
    debugger
    yield call(delay, 300);
    const data = yield call(getArticleList)
    yield put(actions.getListSuccess(data.data))
}


// 每次 GET_ARTICLE_ASYNC action被发起时候启动上面的任务
//export function* watchGetArticleAsync() {
//    yield takeEvery('GET_ARTICLE_ASYNC', getArticleListAsync)
//}
/*
 * takeEvery： 允许多个 fetchData 实例同时启动。
 * takeLatest：任何时刻只允许执行一个任务，并且这个任务是最后被启动的；如果之前已经有一个任务在执行，那之前的这个任务会自动被取消
 * */

