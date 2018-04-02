/**
 * Created by sky on 2018/3/29.
 */
import {fork ,all} from 'redux-saga/effects';
import articleSaga from '../../components/pages/content/redux/saga/index';
/*
* fork:无阻塞调用------》当我们fork一个任务，任务会在后台启动，调用者也可以继续它自己的流程，而不用等待被fork的任务结束
*
*
* 为了取消fork任务，可以使用指定的effect    cancel来结束fork任务
* */
export default function* rootSaga() {
    yield all([
        fork(articleSaga)
    ])
}