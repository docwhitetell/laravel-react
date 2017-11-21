const headerHeight=54
const styles=theme=>({
    root:{
        height:'auto',
        overflow:'hidden'
    },
    header:{
        position:'absolute',
        top:64,left:'50%',
        display:'flex',
        width:'100%',height:`${headerHeight}px`,
        maxWidth:'1000px',
        padding:'0 40px',
        transform:'translate(-50%,0)',
        zIndex:9999,
    },
    navIconHide:{
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logo:{
        flex:2,
        height:`${headerHeight}px`,
        lineHeight:`${headerHeight}px`,
    },
    nav:{
        flex:4,
        height:`${headerHeight}px`
    },
    navLists:{
        height:`${headerHeight}px`,
        textAlign:'right',
    },
    navItem:{
        display:'inline-block',
        height:`${headerHeight}px`,
        lineHeight:`${headerHeight}px`,
        marginRight:48,
    },
    navItemName:{
        color:'#BDBDBD',
        fontSize:'16px',

        '&:hover':{
            color:'#ffffff'
        }
    },
    signIU:{
        flex:3,
        height:`${headerHeight}px`,
        textAlign:'right',
        marginTop:5
    },
    register:{
        background:'rgba(255,255,255,0.16)',
        height:'44px',
        borderRadius:4,
        fontSize:'16px',
        color:'#ffffff',
        padding:'0 24px',
        display:'inline-block',
        lineHeight:'44px',
        marginRight:10,
        float:'right'
    },
    login:{
        border:'2px solid rgba(255,255,255,0.16)',
        height:'44px',
        borderRadius:4,
        fontSize:'16px',
        color:'#ffffff',
        padding:'0 24px',
        display:'inline-block',
        lineHeight:'40px',
        float:'right'
    },

    banner:{
        height:'800px',
        background:'linear-gradient(127deg, #462EB4, #AF61D1)'
    },
    bannerWrapper:{
        height:'100%',
        position:'relative'
    },
    bannerTitle:{
        position:'absolute',
        top:'300px',left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'40px',
        color:'#ffffff',
        fontFamily:'ChannelSlanted2e7519d26e1b090',
        textAlign:'center'
    },
    titleDescription:{
        marginTop:18,
        fontFamily:'apple',
        fontSize:'16px',
        color:'rgba(255,255,255,0.45)'
    },
    bannerImg:{
        position:'absolute',
        bottom:'0',
        height:'400px',
        width:'100%',
    },
    bannerMainImg:{
        width:800,height:400,
        position:'absolute',
        left:'50%',  bottom:0,
        transform:'translate(-50%,0)',
        borderTopLeftRadius:'6px',
        borderTopRightRadius:'6px',
        overflow:'hidden',
        backgroundImage:"url('/assets/index/banner1.png')",
        backgroundSize:'100%',
        zIndex:200
    },
    leftbg:{
        position:'absolute',
        width:800,height:370,
        bottom:0,
        left:'50%',
        zIndex:1,
        transform:'translate(-56%,0)',
        borderTopLeftRadius:'8px',
        overflow:'hidden',
        backgroundImage:"url('/assets/index/banner2.png')",
        backgroundSize:'100%',
        opacity:0.4
    },
    rightbg:{
        position:'absolute',
        width:800,height:370,
        bottom:0,
        left:'50%',
        zIndex:1,
        borderTopRightRadius:'8px',
        overflow:'hidden',
        transform:'translate(-44%,0)',
        backgroundImage:"url('/assets/index/banner2.png')",
        backgroundSize:'100%',
        opacity:0.4
    },
    mainContent:{
        position:'relative',
        zIndex:300,
        marginBottom:0
    },
    about:{
        width:'90%', maxWidth:1140,
        margin:'-30px auto 0 auto',
        height:260,
        boxShadow:'0px 17px 27px rgba(0,0,0,0.07)',
        background:'#ffffff',
        borderRadius:5,
        display:'flex',
        alignItems:'center',
        padding:'0 80px',
        [theme.breakpoints.down('md')]: {
            flexDirection:'column',
            justifyContent:'center'
        },

    },
    aboutLeft:{
        marginRight:80,
        [theme.breakpoints.down('md')]: {
            marginRight:0,
            width:'100%',
        },
    },
    aboutTitle:{
        fontSize:32,whiteSpace:'nowrap',
        [theme.breakpoints.up('lg')]: {
            fontSize:32,
        },
        [theme.breakpoints.up('md')]: {
            fontSize:26,
        },
        [theme.breakpoints.down('md')]: {
            fontSize:22,
        },
    },
    gradientDivider:{
        marginTop:18,
        width:96,
        height:4,
        background:'linear-gradient(127deg, #AF61D1, #717BFE)',
        [theme.breakpoints.down('md')]: {
            marginBottom:20
        },
    },
    aboutWord:{
        fontSize:15,
        fontWeight:500
    },
    work:{
        width:'90%',
        maxWidth:1140,
        margin:'100px auto'
    },
    serviceItem:{
        height:340,width:'100%',
        boxShadow:'0px 17px 27px rgba(0,0,0,0.07)',
        borderRadius:6,overflow:'hidden'
    },
    borderTop:{
        height:3,width:'100%',
        background:'linear-gradient(127deg, #AF61D1, #717BFE)'
    },
    serviceContent:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        height:'100%',
        justifyContent:'center'
    },
    serviceName:{
        fontSize:21,
        margin:'20px 0'
    },
    serviceDesc:{
        fontSize:16,
        width:'70%',
        textAlign:'center',
        fontWeight:500
    },
    footer:{
        background:'#262741',
        height:400,
    },
    registerForm:{
        height:200,
        width:'96%',margin:'0 auto',
        maxWidth:1140,
        padding:'0 40px',
        top:-100,
        position:'relative',
        background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
        borderRadius:100,
        display:'flex',
        alignItems:'center',
    },
    form:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        [theme.breakpoints.down('sm')]: {
            alignItems:'center',
            flexDirection:'column',
        },
    },
    formGroup:{
        [theme.breakpoints.down('md')]: {
            width:140
        },
    },
    formIcon:{
        color:'#ffffff',
        fontSize:18,
        marginRight:14,
        display:'inline-block',
        float:'left'
    },
    formInput:{
        border:'none',
        display:'inline-block',
        background:'transparent',
        outline:'none',
        color:'#ffffff',
        fontSize:14,
        '&::-moz-placeholder':{
            color:'#ffffff'
        },
        '&::-webkit-input-placeholder':{
            color:'#ffffff',
            fontSize:16,
            lineHeight:'22px',
        },
        [theme.breakpoints.down('md')]: {
            width:108
        },
        [theme.breakpoints.down('sm')]: {
            '&::-webkit-input-placeholder':{
                textAlign:'center'
            },
        },
    },
    footerMain:{
        height:300,
        position:'relative',
        top:-100,
        padding:'0 40px',
        maxWidth:1140,margin:'0 auto',
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'start',
    },
    footcopyright:{

    },
    author:{
        color:'#ffffff',
        fontSize:14,
        textAlign:'center'
    },
    authorImg:{
        display:'block',margin:'0 auto'
    },
    footLinks:{
        [theme.breakpoints.down('md')]: {
            display:'flex',
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'center',
        },
    },
    footLinksTitle:{
        textAlign:'right',color:'rgba(255,255,255,0.4)',
        [theme.breakpoints.down('md')]: {
            textAlign:'center',
        },
    },
    footLinksItem:{
        textAlign:'right',lineHeight:'32px',
        [theme.breakpoints.down('md')]: {
            display:'inline-block',
            textAlign:'center',
            padding:'0 20px'
        },
    },
    flink:{
        fontSize:16,
        color:'#ffffff',
        textDecoration:'underline'
    },
    products:{
        borderRadius:20,
        margin:'160px auto',
        background:'rgb(30,36,58)',
        height:600,
        width:'90%',
        maxWidth:1140,
        position:'relative'
    },
    productItemWrapper:{
        position:"relative",
        height:"auto"
    },
    pBg:{
        position:'absolute',width:'100%',
        height:'100%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:"-2px -2px",
        zIndex:-1,
        overflow:'hidden',
        borderRadius:20,
    },
    pMain:{
        width:'100%',
        height:"100%",
        overflow:'hidden',
        borderRadius:20,
    },
    pPrice:{
        position:'absolute',
        left:40,
        bottom:60,
        webkitUserSelect:'none',
        mozUserSelect:'none',
        msUserSelect:'none',
        userSelect:'none',
    },
    pPriceBg:{
        position:'absolute',
        left:40,
        bottom:0,
        color:'rgba(0,0,0,0.1)',
    },
    pPriceBgBig:{
        fontSize:120,
        bottom:10
    },
    pPriceBgMid:{
        fontSize:100,
    },
    pMask:{
        position:'absolute',
        width:'100%',height:'100%',
        top:0,
        opacity:0.2,
        overflow:'hidden',
        borderRadius:20,
    },
    pButton:{
        position:'absolute',
        borderRadius:'50%',
        bottom:0,
        left:'50%',
        transform:"translate(-50%,40%)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        cursor:'pointer',
        color:'#ffffff',
        fontSize:24,
        fontWeight:600,
        minWidth:0
    },
    pButtonDenseTop:{
        position:'absolute',
        width:'100%',height:'100%',
        borderRadius:'50%',
        top:-10,
        opacity:0.2,
        zIndex:-1
    },
    pButtonDenseLeft:{
        position:'absolute',
        width:'100%',height:'100%',
        borderRadius:'50%',
        top:0,left:-6,
        opacity:0.2,
        zIndex:-1
    },
    pButtonDenseRight:{
        position:'absolute',
        width:'100%',height:'100%',
        borderRadius:'50%',
        top:0,right:-6,
        opacity:0.2,
        zIndex:-1
    },
    productItemLeft:{
        height:360,
        width:280,
        borderRadius:20,
        position:'absolute',
        background:'#ffffff',
        top:-30,
        left:'50%',
        transform:'translate(-140%,0)'
    },
    plMain:{
        width:'100%',
        height:"100%",
        overflow:'hidden',
        borderRadius:20,
    },
    plBg:{
        backgroundImage:"url('/assets/index/2.png')",
    },
    plPriceBg:{
        position:'absolute',
        left:40,
        bottom:0,
        fontSize:100,
        color:'rgba(0,0,0,0.1)',
    },
    plMask:{
        background:'linear-gradient(127deg, rgb(255,240,253),rgb(254,220,250))',
    },
    plButton:{
        width:64,height:64,
        background: 'linear-gradient(127deg, rgb(38,162,200),rgb(64,195,198))',
        fontSize:24,
    },
    plButtonDenseTop:{
        background: 'linear-gradient(127deg, rgb(38,162,200),rgb(64,195,198))',
    },
    plButtonDenseLeft:{
        background: 'linear-gradient(127deg, rgb(38,162,200),rgb(64,195,198))',
    },
    plButtonDenseRight:{
        background: 'linear-gradient(127deg, rgb(38,162,200),rgb(64,195,198))',
    },
    productItemMid:{
        height:400,
        width:300,
        borderRadius:20,
        position:'absolute',
        background:'#ffffff',
        top:-60,
        left:'50%',
        transform:'translate(-50%,0)',
        zIndex:2
    },
    pmBg:{
        backgroundImage:"url('/assets/index/1.png')",
    },
    pmPrice:{
        position:'absolute',
        left:40,
        bottom:60,
        webkitUserSelect:'none',
        mozUserSelect:'none',
        msUserSelect:'none',
        userSelect:'none',
    },
    pmPriceBg:{
        position:'absolute',
        left:40,
        bottom:10,
        fontSize:120,
        color:'rgba(0,0,0,0.1)',
    },
    pmMask:{
        background:'linear-gradient(127deg, rgb(255,240,253),rgb(254,220,250))',
    },
    pmButton:{
        width:72,height:72,
        background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
        fontSize:24,
    },
    pmButtonDenseTop:{
        background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
    },
    pmButtonDenseLeft:{
        background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
    },
    pmButtonDenseRight:{
        background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
    },
    productItemRight:{
        height:360,
        width:280,
        borderRadius:20,
        background:'#ffffff',
        position:'absolute',
        top:-30,
        left:'50%',
        transform:'translate(40%,0)',
        zIndex:1,

    },
    prBg:{
        backgroundImage:"url('/assets/index/3.png')",
        backgroundPosition:'right top'
    },
    prPrice:{
        position:'absolute',
        left:40,
        bottom:60,
        webkitUserSelect:'none',
        mozUserSelect:'none',
        msUserSelect:'none',
        userSelect:'none',
    },
    prPriceBg:{
        position:'absolute',
        left:40,
        bottom:0,
        fontSize:100,
        color:'rgba(0,0,0,0.1)',
    },
    prMask:{
        background:'linear-gradient(127deg, rgb(255,240,253),rgb(254,220,250))',
    },
    prButton:{
        width:64,height:64,
        background: 'linear-gradient(127deg, rgb(255,106,151),rgb(255,128,118))',
    },
    prButtonDenseTop:{
        background: 'linear-gradient(127deg, rgb(255,106,151),rgb(255,128,118))',
    },
    prButtonDenseLeft:{
        background: 'linear-gradient(127deg, rgb(255,106,151),rgb(255,128,118))',
    },
    prButtonDenseRight:{
        background: 'linear-gradient(127deg, rgb(255,106,151),rgb(255,128,118))',
    },


    proDetails:{
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        height:260,
        display:'flex',
        padding:'0 100px',
        alignItems:'center',
        justifyContent:'start'
    },
    pdLeft:{
        display:'inline-block',
        paddingRight:40
    },
    pdRight:{
        display:'inline-block'
    },
    pdDataProgress:{
        display:'flex',
        justifyContent:'start',
        marginTop:30
    },
    pddpName:{
        lineHeight:'24x',
        width:100,
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    moreProducts:{
        position:'absolute',
        bottom:0,
        left:'50%',height:46,width:160,
        transform:'translate(-50%,50%)',
        background:'linear-gradient(127deg, #AF61D1, #717BFE)',
        borderRadius:14,
        color:'#ffffff'
    }

})

export default styles