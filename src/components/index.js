/**
 * Created by sky on 2018/3/19.
 */
import React from 'react';
import {Layout} from 'antd';
import '../styles/layout.less';
import Nav from './layout/nav';
import Slide from './layout/carousel';
import Bread from './layout/breadcrumb';
import SiderContent from './pages/sider/index'
const { Header, Footer, Sider, Content } = Layout;
class Basic extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <Slide />
                        <Nav />
                    </Header>
                    <Layout>
                        <Content>
                            <Bread />
                            <div className="content-box">
                                {this.props.children}
                            </div>
                        </Content>
                        <Sider width="250">
                            <SiderContent />
                        </Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )

    }
}
export default Basic