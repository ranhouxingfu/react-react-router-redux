/**
 * Created by sky on 2018/3/27.
 */
import React from 'react';
import {connect } from 'react-redux';
import Counter from './Counter';
import store from '../../../../redux/store';
const action = type => store.dispatch({type})
//console.log(store)
class SagaTest extends React.Component {
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