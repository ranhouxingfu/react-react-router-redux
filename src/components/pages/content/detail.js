/**
 * Created by sky on 2018/3/21.
 */
import React from 'react';
import { connect } from 'react-redux';
//import store from '../../../redux/store';
import '../../../mock/article';
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null
        }
    }

    componentDidMount() {
        console.log( this.props)
    }

    render() {
        return (
            <div>{this.state.article}</div>
        )
    }
}
const mapStateToProps = state => ({
    articleList: state.articleList
})
export default connect(mapStateToProps)(Detail);