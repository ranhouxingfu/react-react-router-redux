/**
 * Created by sky on 2018/3/29.
 */
import {types} from '../actionTypes/actionTypes';
export const actions = {
    getListSuccess: (listData) => ({
        type: types.GET_ARTICLE_LIST_SUCCESS,
        data: listData
    }),
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