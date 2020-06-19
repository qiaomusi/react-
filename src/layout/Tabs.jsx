import React from 'react';
import { 
    TopTabBarBox ,
    Wrapper , 
    TabBarBox ,
    Logo 
} from './style';
import './tabs.css';

function Tabs() {
    return (
        <TopTabBarBox>
            <Wrapper>
                <TabBarBox>
                    <div className="tabbarLeftBox">
                        <Logo></Logo>
                        <ul>
                            <li> 首页 </li>
                            <li> 沸点 </li>
                            <li> 话题 </li>
                            <li> 小册 </li>
                            <li> 活动 </li>
                        </ul>
                    </div>
                </TabBarBox>
            </Wrapper>
        </TopTabBarBox>
    )
};

export default Tabs;