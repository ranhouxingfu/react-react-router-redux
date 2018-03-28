/**
 * Created by sky on 2018/3/27.
 */
import React from 'react';
import PropTypes from 'prop-types';
const Counter = ({value,onIncrement,onDecrement,onIncrementAsync})=> {
    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onIncrementAsync}>Increment after 1 second</button>
            <hr/>
            <div>
                Clicked:{value} times
            </div>
        </div>
    )
}
Counter.propTyppes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired
}
export default Counter