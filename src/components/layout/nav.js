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
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/main">Main</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        )

    }
}
export default Nav