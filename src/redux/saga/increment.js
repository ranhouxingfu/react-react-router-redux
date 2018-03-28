/**
 * Created by sky on 2018/3/27.
 */
import {delay} from 'redux-saga';
import {call,put,takeEvery} from 'redux-saga/effects';
import Api from '../../services/api'
// saga练习
export function* helloSaga() {
    console.log('Hello Saga!')
}
export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({ype: 'INCREMENT'})
}
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// 获取文章列表
//export function* getArticleListAsync() {
//    const data = yield call(Api.getArticleList())
//    console.log(data)
//    yield put({ype: 'GET_ARTICLE_LIST', data})
//}

export default function* rootSaga() {
    yield [
        helloSaga(),
        watchIncrementAsync(),
        //getArticleListAsync()
    ]
}
