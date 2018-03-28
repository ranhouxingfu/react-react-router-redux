/**
 * Created by sky on 2018/3/27.
 */
export const initialState = {
    data: 0,
    articleList: []
}
export const types = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    INCREMENT_IF_ODD: 'INCREMENT_IF_ODD',
    GET_ARTICLE_LIST: 'GET_ARTICLE_LIST',
    GET_ARTICLE_ASYNC: 'GET_ARTICLE_ASYNC'
}

export const actions = {
    getArticleListAction: obj => ({
        type: types.GET_ARTICLE_LIST,
        data: obj
    })
}
export default function counter(state = initialState, action) {
    debugger
    switch (action.type) {
        case types.INCREMENT:
            return Object.assign({}, state, {data: state.data + 1});
        case types.DECREMENT:
            return Object.assign({}, state, {data: state.data - 1});
        case types.INCREMENT_IF_ODD:
            return (state.data % 2 !== 0) ? Object.assign({}, state, {data: state.data + 1}) : state;
        case types.GET_ARTICLE_LIST:
            return Object.assign({}, state, {articleList: action.data.data});
        case types.GET_ARTICLE_ASYNC:
            return Object.assign({}, state, {articleList: action.data.data});
        default:
            return state;
    }
}