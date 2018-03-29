/**
 * Created by sky on 2018/3/29.
 */
import {actions as articleActions} from './actions/actions';
import {types as articleTypes} from './actionTypes/actionTypes';
import articleReducer from './reducers/sagatest';
export const actions = {
    ...articleActions
}
export const types = {
    ...articleTypes
}
export default articleReducer