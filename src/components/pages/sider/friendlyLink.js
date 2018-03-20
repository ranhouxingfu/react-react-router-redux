/**
 * Created by sky on 2018/3/20.
 */
import React from 'react';
import { Card } from 'antd';
export default class FriendlyLink extends React.Component{
    render() {
        return(
            <Card title="友情链接">
                <p><a href="http://baidu.com">http://baidu.com</a></p>
                <p><a href="http://baidu.com">http://baidu.com</a></p>
            </Card>
        )
    }
}