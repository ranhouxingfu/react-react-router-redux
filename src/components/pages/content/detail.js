/**
 * Created by sky on 2018/3/21.
 */
import React from 'react';
import { connect } from 'react-redux';
import '@/styles/content/articleDetail.less';
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <h2 className="article-title">{this.props.articleDetail.title}</h2>
                <p className="article-title">
                    <span>作者：{this.props.articleDetail.author}</span><span>上传时间：{this.props.articleDetail.time}</span><span>文章类型：{this.props.articleDetail.type}</span>
                </p>
                <p className="article-content">{this.props.articleDetail.content}</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    articleDetail: state.article.articleDetail
})
export default connect(mapStateToProps)(Detail);