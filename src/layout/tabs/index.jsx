import React , { useState } from 'react';
import Wrapper from 'components/wrapper';
import './index.css';

function Tabs() {

    const [ list ] = useState( ['发现音乐','我的音乐','朋友','商城','音乐人','下载客户端'] );
    const [ activeIndex , setActiveIndex ] = useState( 0 );

    const handleTabClick = ( index ) => {
        setActiveIndex( index );
    }

    const renderList = () => {
        return list.map((item , index) => {
            return (
                <li 
                    className = { activeIndex === index ? 'active' : '' } 
                    onClick = { () => { handleTabClick( index ) } }
                > { item } </li>
            )
        })
    }
    return (
        <div className="boxs">
            <Wrapper>
                <div className="left">
                    <div className="logo">
                        <a href="#">
                            L o g o
                        </a>
                    </div>
                    <ul>
                        { renderList() }
                    </ul>
                </div>
                <div className="oprationBox right">
                    <input type="text" placeholder="音乐/视频/电台/用户" />
                    <span> 创作者中心 </span>
                    <i onClick = "request"> 登录 </i>
                </div>
            </Wrapper>
        </div>
    )
};

export default Tabs;