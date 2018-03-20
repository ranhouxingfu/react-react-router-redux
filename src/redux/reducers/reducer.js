/**
 * Created by sky on 2018/3/20.
 */
import { combineReducers } from 'redux';
import * as actions from '../actions/action';
import initState from '../state/state';
function articleList(state = initState, action) {
    switch (action.type) {
         default:
            return state
    }
}
const articleReducers = combineReducers({
    articleList
})
export default articleReducers;