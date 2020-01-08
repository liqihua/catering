import React from 'react';
import './style.css'
import imgAvatar from '../../static/images/merchant_avatar.jpg'
import imgProductPicture1 from '../../static/images/product_picture_1.webp'
import imgProductPicture2 from '../../static/images/product_picture_2.webp'
import imgProductPicture3 from '../../static/images/product_picture_3.webp'
import imgProductPicture4 from '../../static/images/product_picture_4.webp'
import imgBtnAdd from '../../static/images/btn_add.png'
import imgBtnSub from '../../static/images/btn_sub.png'

class Purchase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visualList: [],
            categoryList: [
                {
                    categoryName: '新鲜水果',
                    productList: [],
                    productImg: null
                },
                {
                    categoryName: '鲜榨果汁',
                    productList: [],
                    productImg: null
                },
                {
                    categoryName: '找好茶',
                    productList: [],
                    productImg: null
                },
                {
                    categoryName: '找口感',
                    productList: [],
                    productImg: null
                },
                {
                    categoryName: '一层热销水果蛋糕',
                    productList: [],
                    productImg: null
                },
                {
                    categoryName: '三层热销蛋糕',
                    productList: [],
                    productImg: null
                }
            ]
        }
    }

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
                        {
                            this.state.categoryList.map( (item,index) => {
                                return (
                                    <a key={index}><div><span>{item.categoryName}</span></div></a>
                                )
                            })
                        }
                    </nav>
                    <div className='menu-product' ref='productContainer' onScrollCapture={this.handleProductScroll.bind(this)}>
                        <div id='menu-product-wrap' className='menu-product-wrap' ref='productWrap'>
                        {
                            this.state.categoryList.map( (category,categoryIndex) => {
                                return (
                                    <div className='product-list' key={categoryIndex} title={category.categoryName}>
                                        <dl>
                                            <dt>{category.categoryName}</dt>
                                            {
                                                category.productList.map( (product,productIndex) => {
                                                    return (
                                                        <dd key={productIndex}>
                                                            <div className='product-picture'>
                                                                <img src={product.productImg} alt=''/>
                                                            </div>
                                                            <div className='product-content'>
                                                                <div className='product-title'>{product.title}</div>
                                                                <div className='product-intro'>{product.intro}</div>
                                                                <div className='product-content-footer'>
                                                                    <div className='product-price'>￥{product.price}</div>
                                                                    <div className='product-opt'>
                                                                        <div className='product-opt-item'><img src={imgBtnSub} alt=''/></div>
                                                                        <div className='product-opt-item'><span>2</span></div>
                                                                        <div className='product-opt-item'><img src={imgBtnAdd} alt=''/></div>
                                                                    </div>
                                                                    {/* <div className='product-standards'><span>选规格</span></div> */}
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    )
                                                })
                                            }
                                        </dl>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {
        // 测试数据
        var productIndex = 0
        var newCategoryList = []
        this.state.categoryList.map((category) => {
            var newCategory = {... category}
            newCategory.productList = []
            for(var i=0; i<10; i++) {
                var productImg = null
                const imgIndex = productIndex % 4
                if(imgIndex === 0) {
                    productImg = imgProductPicture1;
                } else if(imgIndex === 1) {
                    productImg = imgProductPicture2;
                } else if(imgIndex === 2) {
                    productImg = imgProductPicture3;
                } else if(imgIndex === 3) {
                    productImg = imgProductPicture4;
                }
                newCategory.productList.push(
                    {
                        title: '(大杯)波霸奶茶',
                        intro: '四季春茶搭配特选植脂末，经由黄金比例调制而成，香滑顺口。主要原料：四季春茶；辅料：植脂末。',
                        price: 18.88,
                        productImg: productImg
                    }
                )
                productIndex += 1
            }
            newCategoryList.push(newCategory)
        })
        this.setState({
            categoryList: newCategoryList
        })
    }

    componentDidMount() {
        var visualList = [];
        var h = 0;
        document.getElementById('menu-product-wrap').childNodes.forEach((category) => {
            var visual = new Object();
            visual.min = h;
            h += category.clientHeight;
            visual.max = h;
            visual.title = category.getAttribute('title');
            visualList.push(visual);
        })
        this.setState({
            visualList: visualList
        })
    }
    
    handleProductScroll = (e) => {
        this.state.visualList.map((visual) => {
            if(this.refs.productContainer.scrollTop > visual.min && this.refs.productContainer.scrollTop <= visual.max) {
                console.log('当前菜单:'+visual.title)
            }
        })
    }
    
}

export default Purchase;
