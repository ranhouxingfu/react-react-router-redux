/**
 * Created by sky on 2018/3/20.
 */
import React from 'react';
import {Breadcrumb} from 'antd';
class Bread extends React.Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
export default Bread;