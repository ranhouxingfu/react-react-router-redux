/**
 * Created by sky on 2018/3/19.
 */
import React from 'react';
import { Button,Icon, Pagination } from 'antd';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import store from '../../../redux/store';
import api from '../../../services/api';
import '../../../styles/content/home.less';
//const action = type => store.dispatch({type})
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.onShowSizeChange = this.onShowSizeChange.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    componentDidMount() {
        api.getArticleList().then((res)=> {
            debugger
            console.log(res)
        })
    }

    render() {
        let articleList = [];
        const list = articleList.map((item, index)=> {
            return <div className="article-box" key={index}>
                <h2>{item.title}</h2>
                <p className="article-basic">
                    <span>上传时间：{item.uploadTime}</span><span>类型：{item.type}</span><span>浏览：{item.scanNum}</span></p>
                <p className="article-content">{item.content}</p>
                <p><Button type="primary">
                    <Link to={"/detail/"+item.id}>阅读更多<Icon type="right"/></Link>
                </Button></p>
            </div>
        })
        return (
            <div>
                {list}
                <Pagination
                    className="pagination-box"
                    defaultCurrent={1}
                    total={articleList.length}
                    showSizeChanger
                    showQuickJumper
                    onShowSizeChange={this.onShowSizeChange}
                    onChange={this.onChange}>
                </Pagination>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    articleList: state
})
export default connect(mapStateToProps)(Home);