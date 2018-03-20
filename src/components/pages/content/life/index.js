/**
 * Created by sky on 2018/3/20.
 */
import React from 'react';
import { Steps } from 'antd';
const Step = Steps.Step;
class Life extends React.Component {
    render() {
        const test = <a>fasdfasd</a>
        return (
            <div>
                <Steps progressDot current={1} direction="vertical">
                    <Step title="Finished" description={test} />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
            </div>
        )
    }
}
export default Life;