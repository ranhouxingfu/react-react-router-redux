/**
 * Created by sky on 2018/3/29.
 */
import {takeLatest,all} from 'redux-saga/effects';
import {types} from '../index';
import { getArticleListAsync,incrementAsync,decrementAsync ,addIfOddAsync} from './increment';
export default function* saga() {
    yield all([
        takeLatest(types.GET_ARTICLE_LIST, getArticleListAsync),
        takeLatest(types.ADD, incrementAsync),
        takeLatest(types.CUT,decrementAsync),
        takeLatest(types.ADD_IF_ODD,addIfOddAsync)
    ])
}