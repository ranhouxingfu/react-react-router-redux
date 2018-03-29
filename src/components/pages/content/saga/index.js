/**
 * Created by sky on 2018/3/27.
 */
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Counter from './Counter';
import store from './redux/index';
import { actions,selectors } from './redux/index';
const action = type => store.dispatch({type})
//console.log(store)
//@connect(null, {
//    loginAction: actions.getArticleListAction,
//})

class SagaTest extends React.Component {
    static propTypes = {
        loginAction: propTypes.func
    }

    componentDidMount() {
        debugger
        console.log(actions)
        actions.getArticleListAction()
        console.log(selectors.articleList)
    }

    render() {
        return (
            <Counter
                value={this.props.state}
                onIncrement={()=>action('INCREMENT')}
                onDecrement={()=>action('DECREMENT')}
                onIncrementAsync={()=>action('INCREMENT_IF_ODD')}
            />
        )
    }
}
const mapStateToProps = state => ({
    state: state.data
})
export default connect(mapStateToProps)(SagaTest);