/**
 * Created by sky on 2018/3/27.
 */
import * as types from '../actionTypes/actionTypes'
const initialState = {
    articleList: []
}
export const actions = {
    getList: list => ({
        type: types.FETCH_SUCCEEDED,
        data: list
    }),
    failed: () => ({
        type: types.FETCH_FAILED
    })
}
export default function read(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_SUCCEEDED:
            return Object.assign({}, state, {articleList: action.data});
        default:
            return state;
    }
}