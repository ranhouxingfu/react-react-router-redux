/**
 * Created by sky on 2018/3/27.
 */
import{types} from '../index';
export const initialState = {
    data: 0,
    articleList: [],
    lifeList: [],
    articleDetail: {},
    archiveList: []
}

export default (state = initialState, action)=> {
    const result = state.data;
    switch (action.type) {
        case types.INCREMENT:
            return Object.assign({}, state, {data: action.data.payLoad + result});
        case types.DECREMENT:
            return Object.assign({}, state, {data: result - action.data.payLoad});
        case types.INCREMENT_IF_ODD:
            return (result % 2 !== 0) ? Object.assign({}, state, {data: result + 1}) : state;
        case types.GET_ARTICLE_LIST_SUCCESS:
            return Object.assign({}, state, {articleList: action.data});
        case types.GET_LIFE_LIST_SUCCESS:
            return Object.assign({}, state, {lifeList: action.data});
        case types.GET_ARTICLE_DETAIL_SUCCESS:
            return Object.assign({}, state, {articleDetail: action.data});
        case types.GET_ARCHIVE_LIST_SUCCESS:
            return Object.assign({}, state, {archiveList: action.data});
        default:
            return state;
    }
}