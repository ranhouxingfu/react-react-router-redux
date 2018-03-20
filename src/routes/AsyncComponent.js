/**
 * Created by sky on 2018/3/19.
 */

import React from 'react';
export default function (importComponent) {
    class AsyncComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const {default:component} =await importComponent()
            this.setState({component: component})
        }

        render() {
            const Comp = this.state.component;
            return Comp ? <Comp {...this.props}/> : null
        }
    }
    return AsyncComponent
}