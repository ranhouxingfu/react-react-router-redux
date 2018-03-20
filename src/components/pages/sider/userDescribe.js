/**
 * Created by sky on 2018/3/20.
 */
import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
class User extends React.Component {
    render() {
        return (
                <Card
                    hoverable
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    className="userImg-box"
                >
                    <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                    />
                </Card>
        )
    }
}
export default User