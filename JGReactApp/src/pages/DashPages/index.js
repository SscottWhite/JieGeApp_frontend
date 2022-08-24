
import React, {Component} from 'react';
import styles from './index.css';
import classnames from 'classnames';
import { Popover } from 'antd';


import Item1 from '../../component/itemPage/Item1';

class DashPage extends Component {
    state = {
        content : `参看这个${'<a href="https://www.baidu.com">百度<a/>'}`
    }
    render() {
        const content = (
            <div>
              <p>Content</p>
              <p>Content</p>
            </div>
          );
        return (
            <div>
                
                <div className={styles.dashHold}></div>
                <div className={styles.dashHeader}> 
                    <div className='headerFront'>
                        <img src=''  className={classnames(styles.demo2)}/>
                        <a href='https://www.baidu.com' className={classnames(styles.demo1,styles.demo2)} target='_black'>新闻</a>
                        <a href='https://www.baidu.com' className={classnames(styles.demo1,styles.demo2)} target='_black'>hao123</a>
                        <a href='https://www.baidu.com' className={classnames(styles.demo1,styles.demo2)} target='_black'>地图</a>
                        <a href='https://www.baidu.com' className={classnames(styles.demo1,styles.demo2)} target='_black'>贴吧</a>
                        <a href='https://www.baidu.com' className={classnames(styles.demo1,styles.demo2)} target='_black'>视频</a>
                        <a href='https://www.baidu.com' className={classnames(styles.demo1,styles.demo2)} target='_black'>图片</a>
                        <a href='https://www.baidu.com' className={classnames(styles.demo1,styles.demo2)} target='_black'>网盘</a>
                        {/* <span className={classnames(styles.demo1,styles.demo2,styles.demo3)} data-descr={this.state.content}>更多</span> */}
                        <Popover content={ <Item1 />} >
                            <span className={classnames(styles.demo1,styles.demo2)} >更多</span>
                        </Popover>
                    </div>
                    <div className='headerEnd'>
                    </div>               
                </div>
                {/* <Item1 items={styles.demo3}/> */}
            </div>
        )
    }
}

export default DashPage;