/**
 * Created by sky on 2018/3/29.
 */
import {types} from '../actionTypes/actionTypes';
export const actions = {
    // 文章相关
    getListSuccess: (listData) => ({
        type: types.GET_ARTICLE_LIST_SUCCESS,
        data: listData
    }),
    getArticleDetail: (articleDetail)=>({
        type: types.GET_ARTICLE_DETAIL_SUCCESS,
        data: articleDetail
    }),
    // 日志相关
    getLifeListSuccess: (lifeData) => ( {
        type: types.GET_LIFE_LIST_SUCCESS,
        data: lifeData
    }),
    //归档相关
    getArchiveSuccess: (archiveList)=>({
        type: types.GET_ARCHIVE_LIST_SUCCESS,
        data: archiveList
    }),
    //saga入门练习加减
    increment: (data) => ({
        type: types.INCREMENT,
        data: data
    }),
    decrement: (data) =>({
        type: types.DECREMENT,
        data: data
    }),
    addIfOdd: () => ({
        type: types.INCREMENT_IF_ODD
    })
}