/**
 * Created by sky on 2018/3/19.
 */
import {createStore} from 'redux';
import articleList from './reducers/reducer';
const store = createStore(articleList)
export default store;