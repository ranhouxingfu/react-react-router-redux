/**
 * Created by sky on 2018/3/20.
 */
import React from 'react';
import {Carousel} from 'antd';
class Slide extends React.Component {
    render() {
        return (
            <Carousel autoplay className="carsousel-box">
                <div><h1>1</h1></div>
                <div><h1>2</h1></div>
                <div><h1>3</h1></div>
            </Carousel>
        )
    }
}
export default Slide;