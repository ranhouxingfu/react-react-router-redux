/**
 * Created by sky on 2018/3/20.
 */
import React from 'react';
import { Timeline,Icon } from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../../../styles/content/archive.less';
//const Step = Steps.Step;
const Item = Timeline.Item;
class Archive extends React.Component {
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch({type: 'GET_ARCHIVE_LIST'});
    }

    goDetail(id) {
        const {dispatch} = this.props;
        this.props.history.push('/detail/' + id)
        dispatch({type: 'GET_ARTICLE_DETAIL', id: id})
    }

    render() {
        let archiveList = this.props.archiveList;
        let list = this.props.archiveList.map((item, index)=> {
            const childrenList = item.children;
            let test1 = childrenList.map((item1, index1)=> {
                return <p key={'arcon'+index1}><a onClick={this.goDetail.bind(this,item1.id)}>{item1.title}</a></p>
            })
            return (
                <Item key={index}
                      dot={<Icon type="clock-circle-o"/>}
                      color="red">
                    <p>{item.time}</p>
                    {test1}
                </Item>
            )
        })
        return (
            <Timeline>
                {list}
            </Timeline>
        )
    }
}
const mapStateToProps = state => ({
    archiveList: state.article.archiveList
})
export default connect(mapStateToProps)(Archive);