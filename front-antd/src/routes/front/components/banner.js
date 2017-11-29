import React from 'react';
import Hidden from 'material-ui/Hidden';
import Slider from 'react-slick';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
class Banner extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        const {classes}=this.props
        return (
            <div className={classes.banner}>
                <div className={classes.bannerWrapper}>
                    <div className={classes.bannerBg}></div>

                        <div className={classes.bannerTitle} key="title">
                            <TweenOne animation={[{y:0},{y:90,opacity:1}]} style={{opacity:0}} >
                            <h1 className={classes.titleWord}>Doctor White Personal Website</h1>
                            </TweenOne>
                            <TweenOne animation={[{y:0},{y:-60,opacity:1,delay:450}]} style={{opacity:0}} >
                            <p className={classes.titleDescription}>
                                Sign up or check back for new updates
                            </p>
                            </TweenOne>
                        </div>

                    <Hidden mdDown implementation="css">
                    <TweenOne className={classes.bannerImg} animation={[{y:400,delay:700},{y:0,opacity:1}]} style={{opacity:0}} >
                        <div className={classes.leftbg}></div>
                        <div className={classes.bannerMainImg}></div>
                        <div className={classes.rightbg}></div>
                    </TweenOne>
                    </Hidden>
                    <Hidden mdUp implementation="css">
                        <div style={{width:'100%',height:'60vw',overflow:'hidden'}}>
                            <Slider {...settings}>
                                <div><img src="/assets/index/banner2.png" style={{width:'100%'}} alt=""/></div>
                                <div><img src="/assets/index/banner2.png" style={{width:'100%'}} alt=""/></div>
                                <div><img src="/assets/index/banner2.png" style={{width:'100%'}} alt=""/></div>
                            </Slider>
                        </div>

                    </Hidden>
                </div>
            </div>
        )
    }

}
export default Banner