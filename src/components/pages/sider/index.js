/**
 * Created by sky on 2018/3/20.
 */
import React from 'react';
import Article from './articleList';
import User from './userDescribe';
import ArticleTypes from './articleTypes';
import FriendlyLink from './friendlyLink';
import '../../../styles/sider.less';
class SiderContent extends React.Component{
    render() {
        return (
            <div className="sider-box">
                <User />
                <Article />
                <ArticleTypes />
                <FriendlyLink />
            </div>
        )
    }
}
export default SiderContent