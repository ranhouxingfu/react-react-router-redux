/**
 * Created by sky on 2018/3/29.
 */
import {takeLatest,all} from 'redux-saga/effects';
import {types} from '../index';
import { getArticleListAsync } from './increment';
export default function* saga() {
    debugger
    yield all([
        takeLatest(types.GET_ARTICLE_LIST, getArticleListAsync)
    ])
}