import React from 'react';
import { connect } from 'dva';
import {withStyles} from 'material-ui/styles'
import classnames from 'classnames'

import NavHeader from './components/header'
import Banner from './components/banner'
import Service from './components/service'
import Footer from './components/footer'

import Button from 'material-ui/Button';
import DraggableList from '../../components/draggable/DraggableList'
import GradientProgress from '../../components/progress/gradient'
import {Icon} from 'antd'

import Hidden from 'material-ui/Hidden'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './styles'
function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className}
            style={{...style, display: 'block', right:10,zIndex:200}}
            onClick={onClick}
        ></div>
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className}
            style={{...style, display: 'block',left:10,zIndex:200}}
            onClick={onClick}
        ></div>
    );
}


class Index extends React.Component{
    constructor(props){
        super(props)
    }

    handleOnWheel=(e)=>{
        console.log(e.deltaY)
    }

    componentDidMount(){
        const {dispatch}=this.props
        dispatch({type:'app/update',payload:{pageloading:false}})
    }
    render(){
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        const {app,classes,dispatch}=this.props
        return (
            <div className={classes.root}>
                <NavHeader/>
                <Banner classes={classes}/>
                <Service classes={classes}/>
                <div className={classes.products}>
                    <Hidden mdDown implementation="css">
                        <div className={classes.productItemWrapper}>
                            <div className={classes.productItemLeft}>
                                <div className={classnames(classes.pBg,classes.plBg)}></div>
                                <div className={classnames(classes.pMain)}>
                                    <div className={classnames(classes.pPrice)}>
                                        <h1 style={{fontSize:56, color:'rgba(0,0,0,0.86)'}}>
                                            <small style={{fontSize:32}}>$</small>
                                            <strong>27</strong>
                                        </h1>
                                        <span style={{fontSize:14,fontWeight:600}}>Basic plan</span>
                                        <h1 className={classnames(classes.pPriceBg,classes.pPriceBgMid)}>
                                            27
                                        </h1>
                                    </div>
                                </div>
                                <div className={classnames(classes.pMask,classes.plMask)}></div>
                                <Button className={classnames(classes.pButton,classes.plButton)}>
                                    <Icon type="plus"/>
                                    <div className={classnames(classes.pButtonDenseTop,classes.plButtonDenseTop)}></div>
                                    <div className={classnames(classes.pButtonDenseLeft,classes.plButtonDenseLeft)}></div>
                                    <div className={classnames(classes.pButtonDenseRight,classes.plButtonDenseRight)}></div>
                                </Button>
                            </div>
                            <div className={classes.productItemMid}>
                                <div className={classnames(classes.pBg,classes.pmBg)}></div>
                                <div className={classnames(classes.pMain)}>
                                    <div className={classnames(classes.pPrice)}>
                                        <h1 style={{fontSize:78, color:'rgba(0,0,0,0.86)'}}>
                                            <small style={{fontSize:42}}>$</small>
                                            <strong>95</strong>
                                        </h1>
                                        <span style={{fontSize:14,fontWeight:600}}>Professional plan</span>
                                        <h1 className={classnames(classes.pPriceBg,classes.pPriceBgBig)}>
                                            95
                                        </h1>
                                    </div>
                                </div>
                                <div className={classnames(classes.pMask,classes.pmMask)}></div>
                                <Button className={classnames(classes.pButton,classes.pmButton)}>
                                    <Icon type="check"/>
                                    <div className={classnames(classes.pButtonDenseTop,classes.pmButtonDenseTop)}></div>
                                    <div className={classnames(classes.pButtonDenseLeft,classes.pmButtonDenseLeft)}></div>
                                    <div className={classnames(classes.pButtonDenseRight,classes.pmButtonDenseRight)}></div>
                                </Button>
                            </div>
                            <div className={classes.productItemRight}>
                                <div className={classnames(classes.pBg,classes.prBg)}></div>
                                <div className={classnames(classes.pMain)}>
                                    <div className={classnames(classes.pPrice)}>
                                        <h1 style={{fontSize:56, color:'rgba(0,0,0,0.86)'}}>
                                            <small style={{fontSize:32}}>$</small>
                                            <strong>63</strong>
                                        </h1>
                                        <span style={{fontSize:14,fontWeight:600}}>Medium plan</span>
                                        <h1 className={classnames(classes.pPriceBg,classes.pPriceBgMid)}>
                                            63
                                        </h1>
                                    </div>
                                </div>
                                <div className={classnames(classes.pMask,classes.prMask)}></div>
                                <Button className={classnames(classes.pButton,classes.prButton)}>
                                    <Icon type="plus"/>
                                    <div className={classnames(classes.pButtonDenseTop,classes.prButtonDenseTop)}></div>
                                    <div className={classnames(classes.pButtonDenseLeft,classes.prButtonDenseLeft)}></div>
                                    <div className={classnames(classes.pButtonDenseRight,classes.prButtonDenseRight)}></div>
                                </Button>
                            </div>
                        </div>
                    </Hidden>
                    <Hidden mdUp implementation="css">
                        <div style={{width:'100%',height:360}}>
                            <Slider {...settings}>
                                <div className={classes.slickproduct}>
                                    <div className={classes.productItemLeft}>
                                        <div className={classnames(classes.pBg, classes.plBg)}></div>
                                        <div className={classnames(classes.pMain)}>
                                            <div className={classnames(classes.pPrice)}>
                                                <h1 style={{fontSize: 56, color: 'rgba(0,0,0,0.86)'}}>
                                                    <small style={{fontSize: 32}}>$</small>
                                                    <strong>27</strong>
                                                </h1>
                                                <span style={{fontSize: 14, fontWeight: 600}}>Basic plan</span>
                                                <h1 className={classnames(classes.pPriceBg, classes.pPriceBgMid)}>
                                                    27
                                                </h1>
                                            </div>
                                        </div>
                                        <div className={classnames(classes.pMask, classes.plMask)}></div>
                                        <Button className={classnames(classes.pButton, classes.plButton)}>
                                            <Icon type="plus"/>
                                            <div
                                                className={classnames(classes.pButtonDenseTop, classes.plButtonDenseTop)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseLeft, classes.plButtonDenseLeft)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseRight, classes.plButtonDenseRight)}></div>
                                        </Button>
                                    </div>
                                </div>
                                <div className={classes.slickproduct}>
                                    <div className={classes.productItemMid}>
                                        <div className={classnames(classes.pBg, classes.pmBg)}></div>
                                        <div className={classnames(classes.pMain)}>
                                            <div className={classnames(classes.pPrice)}>
                                                <h1 style={{fontSize: 78, color: 'rgba(0,0,0,0.86)'}}>
                                                    <small style={{fontSize: 42}}>$</small>
                                                    <strong>95</strong>
                                                </h1>
                                                <span style={{fontSize: 14, fontWeight: 600}}>Professional plan</span>
                                                <h1 className={classnames(classes.pPriceBg, classes.pPriceBgBig)}>
                                                    95
                                                </h1>
                                            </div>
                                        </div>
                                        <div className={classnames(classes.pMask, classes.pmMask)}></div>
                                        <Button className={classnames(classes.pButton, classes.pmButton)}>
                                            <Icon type="check"/>
                                            <div
                                                className={classnames(classes.pButtonDenseTop, classes.pmButtonDenseTop)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseLeft, classes.pmButtonDenseLeft)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseRight, classes.pmButtonDenseRight)}></div>
                                        </Button>
                                    </div>
                                </div>
                                <div className={classes.slickproduct}>
                                    <div className={classes.productItemRight}>
                                        <div className={classnames(classes.pBg, classes.prBg)}></div>
                                        <div className={classnames(classes.pMain)}>
                                            <div className={classnames(classes.pPrice)}>
                                                <h1 style={{fontSize: 56, color: 'rgba(0,0,0,0.86)'}}>
                                                    <small style={{fontSize: 32}}>$</small>
                                                    <strong>63</strong>
                                                </h1>
                                                <span style={{fontSize: 14, fontWeight: 600}}>Medium plan</span>
                                                <h1 className={classnames(classes.pPriceBg, classes.pPriceBgMid)}>
                                                    63
                                                </h1>
                                            </div>
                                        </div>
                                        <div className={classnames(classes.pMask, classes.prMask)}></div>
                                        <Button className={classnames(classes.pButton, classes.prButton)}>
                                            <Icon type="plus"/>
                                            <div
                                                className={classnames(classes.pButtonDenseTop, classes.prButtonDenseTop)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseLeft, classes.prButtonDenseLeft)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseRight, classes.prButtonDenseRight)}></div>
                                        </Button>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </Hidden>
                    <div className={classes.proDetails}>
                        <div className={classes.pdLeft}>
                            <h1 style={{color:'#ffffff',fontSize:28}}>Professional Plan</h1>
                            <p style={{color:'rgba(255,255,255,0.6)'}}>
                                They don't rely on any global styles like normalize.css.
                                You can use any of the components as demonstrated in the documentation.
                            </p>
                        </div>
                        <div className={classes.pdRight}>
                            <div className={classes.pdDataProgress}>
                                <span className={classes.pddpName}>500GB</span>
                                <GradientProgress
                                    data={{
                                        data:78,
                                        height:24,width:'calc(100% - 100px)',
                                        color:'linear-gradient(127deg, rgb(255,101,165),rgb(255,137,101))',
                                        bgcolor:'#000',
                                    }}/>
                            </div>
                            <div className={classes.pdDataProgress}>
                                <span className={classes.pddpName}>3 Years</span>
                                <GradientProgress
                                    data={{
                                        data:64,
                                        height:24,width:'calc(100% - 100px)',
                                        color:'linear-gradient(127deg, rgb(100,108,254),rgb(181,70,240))',
                                        bgcolor:'#000',
                                    }}/>
                            </div>
                        </div>
                    </div>
                    <Button className={classes.moreProducts}>Custom <Icon type="arrow-right"/></Button>
                </div>
                <Footer/>
            </div>
        );
    }

}

Index.propTypes = {
};

export default connect(({app})=>({app}))(withStyles(styles)(Index));
