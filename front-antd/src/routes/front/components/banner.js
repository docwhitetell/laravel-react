import React from 'react'
import Hidden from 'material-ui/Hidden'
import Slider from 'react-slick';
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
                    <div className={classes.bannerTitle}>
                        Doctor White Personal Website
                        <p className={classes.titleDescription}>
                            Sign up or check back for new updates
                        </p>
                    </div>
                    <Hidden mdDown implementation="css">
                    <div className={classes.bannerImg}>
                        <div className={classes.leftbg}></div>
                        <div className={classes.bannerMainImg}></div>
                        <div className={classes.rightbg}></div>
                    </div>
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