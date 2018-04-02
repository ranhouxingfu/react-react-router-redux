/**
 * Created by sky on 2018/3/27.
 */
//import {delay} from 'redux-saga';
import {call,put} from 'redux-saga/effects';
import {getArticleList,getLifeList,getArticleDetail,getArchiveList} from '@/services/api';
import {actions} from '../index';
// saga练习
export function* incrementAsync() {
    yield put(actions.increment({payLoad: 1}))
}

export function* decrementAsync() {
    yield put(actions.decrement({payLoad: 1}))
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
export function* getArticleDetailAsync(params) {
    const data = yield call(getArticleDetail, params.id)
    yield put(actions.getArticleDetail(data.data))
}
// 获取生活列表
export function* getLifeListAsync() {
    const lifeData = yield call(getLifeList);
    yield put(actions.getLifeListSuccess(lifeData.data))
}
// 获取归档列表
export function* getArchiveListAsync() {
    const archiveData = yield call(getArchiveList);
    yield put(actions.getArchiveSuccess(archiveData.data))
}

/*// 可以通过yield* 操作符来组合多个Sagas，使得他们保持顺序
 // 例如：
 // export function* getArchiveListAsync() {
 // const archiveData = yield* call(getArchiveList);
 //  put(actions.getArchiveSuccess(archiveData.data))
 //}
 * 注：yield* 将导致JavaScript运行环境蔓延至整个序列
 */

