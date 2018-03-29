/**
 * Created by sky on 2018/3/29.
 */
import {fork ,all} from 'redux-saga/effects';
import articleSaga from '../../components/pages/content/saga/redux/saga/index';
export default function* rootSaga() {
    yield all([
        fork(articleSaga)
    ])
}