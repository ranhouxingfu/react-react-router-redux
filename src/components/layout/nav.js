/**
 * Created by sky on 2018/3/19.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/layout.less';
class Nav extends React.Component {
    render() {
        return (
            <div className="menu-box">
                <ul className="menu-contain">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/Archive">归档</Link></li>
                    <li><Link to="/life">生活</Link></li>
                    <li><Link to="/saga">saga学习</Link></li>
                </ul>
            </div>
        )

    }
}
export default Nav