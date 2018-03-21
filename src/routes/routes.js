/**
 * Created by sky on 2018/3/19.
 */
import React from 'react';
import asyncComponent from './AsyncComponent';
import {Route,Switch} from 'react-router-dom';
import Basic from '../components/index';
const Home = asyncComponent(() => require('../components/pages/content/home'));
const Archive = asyncComponent(() =>require('../components/pages/content/archive/index'));
const Life = asyncComponent(() => require('../components/pages/content/life/index'));
class Routes extends React.Component {
    render() {
        return (
            <Basic>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Archive" component={Archive}/>
                    <Route path="/life" component={Life}/>
                </Switch>
            </Basic>
        )
    }
}
export default Routes