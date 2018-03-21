/**
 * Created by sky on 2018/3/20.
 */
import React from 'react';
import { Steps } from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../../../styles/content/archive.less';
const Step = Steps.Step;
class Life extends React.Component {
    render() {
        let archiveList = this.props.archiveList.archiveList;
        let list = archiveList.map((item, index)=> {
            const childrenList = item.children;
            let test1 = childrenList.map((item1, index1)=> {
                return <p key={'arcon'+index1}><Link to={'/home'+item1}>{item1.title}</Link></p>
            })
            return (
                <Steps
                    progressDot
                    direction="vertical"
                    key={'arTime'+index}
                    className="steps-box">
                    <Step
                        title={item.archiveTime}
                        description={test1}/>
                </Steps>
            )
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    archiveList: state.articleList
})
export default connect(mapStateToProps)(Life);