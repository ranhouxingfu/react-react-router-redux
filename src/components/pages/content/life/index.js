/**
 * Created by sky on 2018/3/20.
 */
import React from 'react';
import { Steps,Icon } from 'antd';
import {connect} from 'react-redux';
import {filterWeather} from '../../../../filters/filter';
import '../../../../styles/content/life.less';
const Step = Steps.Step;
class Life extends React.Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch({type: 'GET_LIFE_LIST'})
    }
    componentDidMount() {
    }
    render() {
        let list =  this.props.lifeList.map((item, index)=> {
            let weather = filterWeather(item.weather)
            let content = <div className="life-content"><p className="content">{item.content}</p><p
                className="postTime">{item.postTime}</p></div>
            return <Step title=""
                         description={content}
                         icon={<Icon type={weather}/>}
                         key={index}/>
        })
        return (
            <div>
                <Steps
                    direction="vertical">
                    {list}
                </Steps>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    lifeList: state.article.lifeList
})
export default connect(mapStateToProps)(Life);
