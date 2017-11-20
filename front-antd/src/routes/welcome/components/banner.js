import React from 'react'


const Banner =({classes})=>{
    return (
        <div className={classes.banner}>
            <div className={classes.bannerWrapper}>
                <div className={classes.bannerTitle}>
                    Source video hosting
                    <p className={classes.titleDescription}>
                        Sign up or check back for updates
                    </p>
                </div>
                <div className={classes.bannerImg}>
                    <div className={classes.leftbg}></div>
                    <div className={classes.bannerMainImg}></div>
                    <div className={classes.rightbg}></div>
                </div>
            </div>
        </div>
    )
}
export default Banner