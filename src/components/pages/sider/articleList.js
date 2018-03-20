/**
 * Created by sky on 2018/3/20.
 */
import React from 'react';
import { Card } from 'antd';
class Article extends React.Component {
    render() {
        return (
            <Card title="文章列表" extra={<a>More</a>}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        )
    }
}
export default Article;