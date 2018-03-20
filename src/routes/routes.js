/**
 * Created by sky on 2018/3/19.
 */
import React from 'react';
import asyncComponent from './AsyncComponent';
import {Route,Switch} from 'react-router-dom';
import Basic from '../components/index';
const Home = asyncComponent(() => require( '../components/pages/content/home'));
const Login = asyncComponent(() =>require( '../components/pages/content/login'));
const Main = asyncComponent(() => require( '../components/pages/content/main'));
class Routes extends React.Component {
    render() {
        return (
        <Basic>
                <Switch>
                    <Route exact  path="/" component={Main}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/main" component={Main}/>
                </Switch>
            </Basic>
        )
    }
}
export default Routes