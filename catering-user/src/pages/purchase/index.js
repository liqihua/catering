import React from 'react';
import './style.css'
import imgAvatar from '../../static/images/merchant_avatar.jpg'

class Purchase extends React.Component {
    render() {
        return (
            <div className='purchase'>
                <div className='banner'>
                    <div className='banner-avatar'>
                        <img src={imgAvatar} alt=''/>
                    </div>
                    <div className='banner-content'>
                        <div className='banner-content-title'>周杰伦蛋糕</div>
                        <div className='banner-content-notice'><p>公告：公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告</p></div>
                    </div>
                </div>
                <div className='menu'>
                    <nav className='menu-nav'>
                        <a><div><span>热销</span></div></a>
                        <a><div><span>店长推荐</span></div></a>
                        <a><div><span>新鲜水果</span></div></a>
                        <a><div><span>鲜榨果汁</span></div></a>
                    </nav>
                    <div className='menu-product'>menu-product</div>
                </div>
                {/* <div className='cart'>cart</div> */}
            </div>
        );
    }
}

export default Purchase;
