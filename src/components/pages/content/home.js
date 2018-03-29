/**
 * Created by sky on 2018/3/19.
 */
import React from 'react';
import { Button,Icon, Pagination } from 'antd';
import { connect } from 'react-redux';
import '../../../styles/content/home.less';
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articleList: []
        }
        this.onShowSizeChange = this.onShowSizeChange.bind(this)
        this.onChange = this.onChange.bind(this)
        //this.readDetail = this.readDetail.bind(this)
    }


    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    readDetail(id) {
        this.props.history.push('/detail/' + id)
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch({type: 'GET_ARTICLE_LIST'});
    }

    componentDidMount() {
    }

    render() {
        const list = this.props.articleList.map((item, index)=> {
            return <div className="article-box" key={index}>
                <h2>{item.title}</h2>
                <p className="article-basic">
                    <span>上传时间：{item.time}</span><span>类型：{item.type}</span><span>浏览：{item.scanTimes}</span></p>
                <p className="article-content">{item.content}</p>
                <p><Button type="primary" onClick={this.readDetail.bind(this,item.id)}>阅读更多<Icon type="right"/>
                </Button></p>
            </div>
        })
        return (
            <div>
                {list}
                <Pagination
                    className="pagination-box"
                    defaultCurrent={1}
                    total={this.state.articleList.length}
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
    articleList: state.article.articleList
})
export default connect(mapStateToProps)(Home);