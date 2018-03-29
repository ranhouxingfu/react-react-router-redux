/**
 * Created by sky on 2018/3/29.
 */
import { combineReducers } from 'redux';
import articleReducer from '../../components/pages/content/saga/redux/reducers/sagatest';
export default combineReducers({
    article:articleReducer
})