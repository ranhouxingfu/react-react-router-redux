/**
 * Created by sky on 2018/3/29.
 */
import {types} from '../actionTypes/actionTypes';
export const actions = {
    getArticleListAction: ()=>({
        type: types.GET_ARTICLE_LIST
    }),
    getListSuccess: (listData) => ({
        type: types.GET_ARTICLE_LIST_SUCCESS,
        data: listData
    })
}