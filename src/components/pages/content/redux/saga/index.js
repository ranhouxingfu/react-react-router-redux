/**
 * Created by sky on 2018/3/29.
 */
import {takeLatest,all} from 'redux-saga/effects';
import {types} from '../index';
import { getArticleListAsync,getArticleDetailAsync,getLifeListAsync,incrementAsync,decrementAsync ,addIfOddAsync,getArchiveListAsync} from './saga';
/*
 * takeEvery:在每个action来到时派生一个新的任务；
 * 使用take组织代码有一个小问题：在takeEvery的情况下，被调用的任务无法控制何时被调用，将在每次action
 * 被匹配时一遍一遍的被调用，并且也无法控制何时停止监听*/
export default function* saga() {
    yield all([
        takeLatest(types.GET_ARTICLE_LIST, getArticleListAsync),
        takeLatest(types.GET_ARTICLE_DETAIL,getArticleDetailAsync),
        takeLatest(types.GET_LIFE_LIST, getLifeListAsync),
        takeLatest(types.ADD, incrementAsync),
        takeLatest(types.CUT, decrementAsync),
        takeLatest(types.ADD_IF_ODD, addIfOddAsync),
        takeLatest(types.GET_ARCHIVE_LIST,getArchiveListAsync)
    ])
}