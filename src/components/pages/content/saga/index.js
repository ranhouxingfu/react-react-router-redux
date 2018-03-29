/**
 * Created by sky on 2018/3/27.
 */
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Counter from './Counter';
class SagaTest extends React.Component {
    static propTypes = {
        loginAction: propTypes.func
    }

    componentDidMount() {
    }

    render() {
        const {dispatch} = this.props;
        return (
            <Counter
                value={this.props.state}
                onIncrement={()=>dispatch({type:'ADD'})}
                onDecrement={()=>dispatch({type:'CUT'})}
                onIncrementAsync={()=>dispatch({type:'ADD_IF_ODD'})}
            />
        )
    }
}
const mapStateToProps = function (state) {
    return {state: state.article.data}
}
export default connect(mapStateToProps)(SagaTest);