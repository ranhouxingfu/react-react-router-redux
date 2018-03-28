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
class Life extends React.Component {
    render() {
        let archiveList = this.props.archiveList.archiveList;
        let list = archiveList.map((item, index)=> {
            const childrenList = item.children;
            let test1 = childrenList.map((item1, index1)=> {
                return <p key={'arcon'+index1}><Link to={'/home/'+item1.id}>{item1.title}</Link></p>
            })
            return (
                <Item key={index}
                      dot={<Icon type="clock-circle-o"/>}
                      color="red">
                    <p>{item.archiveTime}</p>
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
    archiveList: state.articleList
})
export default connect(mapStateToProps)(Life);