/**
 * Created by sky on 2018/3/27.
 */
import{types} from '../index';
export const initialState = {
    data: 0,
    articleList: []
}

export default (state = initialState, action)=> {
    debugger
    switch (action.type) {
        case types.INCREMENT:
            return Object.assign({}, state, {data: state.data + 1});
        case types.DECREMENT:
            return Object.assign({}, state, {data: state.data - 1});
        case types.INCREMENT_IF_ODD:
            return (state.data % 2 !== 0) ? Object.assign({}, state, {data: state.data + 1}) : state;
        case types.GET_ARTICLE_LIST_SUCCESS:
            return Object.assign({}, state, {articleList: action.data});
        default:
            return state;
    }
}
export const selectors = {
    articleList: state => state.articleList
}