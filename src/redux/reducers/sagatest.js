/**
 * Created by sky on 2018/3/27.
 */
export const initialState = {
    data: 0,
    articleList: []
}
//export const types ={
//    INCREMENT:'INCREMENT',
//    DECREMENT:'DECREMENT',
//    INCREMENT_IF_ODD:'INCREMENT_IF_ODD'
//}
//
//export const actions={
//    increment:state => ({
//        type: types.INCREMENT,
//        data: list
//    })
//}
export default function counter(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {data: state.data + 1});
        case 'DECREMENT':
            return Object.assign({}, state, {data: state.data - 1});
        case 'INCREMENT_IF_ODD':
            return (state.data % 2 !== 0) ? Object.assign({}, state, {data: state.data + 1}) : state;
        case 'GET_ARTICLE_LIST':

        default:
            return state;
    }
}