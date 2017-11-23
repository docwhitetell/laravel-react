const headerHeight=54
const styles=theme=>({
    header:{
        position:'absolute',
        top:64,left:'50%',
        width:'100%',height:`${headerHeight}px`,
        maxWidth:'1000px',
        padding:'0 40px',
        transform:'translate(-50%,0)',
        zIndex:300,
        [theme.breakpoints.down('sm')]: {
            padding:'0 20px',
            top:24
        },
        [theme.breakpoints.down('xs')]: {
            padding:'0 10px',
            top:16
        },
    },
    navIconHide:{
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            lineHeight:'42px',
            height:42,width:42
        },
    },
    logo:{
        display:'inline-block',
        float:'left',
        height:`${headerHeight}px`,
        lineHeight:`${headerHeight}px`,
        [theme.breakpoints.down('sm')]: {
            lineHeight:'32px',
            height:42
        },
    },
    headerLogo:{
        color:'#ffffff',fontSize:'32px',fontWeight:700,fontFamily:'baloo',
        [theme.breakpoints.down('sm')]: {
            fontSize:'32px',
            lineHeight:'20px',
        },
    },
    nav:{
        float:'right',
        display:'inline-block',
        height:`${headerHeight}px`,
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
        color:'#ffffff',
        fontSize:'16px',
        fontWeight:300,
        '&:hover':{
            color:"#ffffff",
            textDecoration:'underline'
        }
    },
    drawerListLink:{
        color:'rgba(0,0,0,0.8)',
        fontSize:18,

    },
    drawerListItem:{
        paddingLeft:40,
        textAlign:'center'
    },
    signIU:{
        float:'right',
        display:'inline-block',
        height:`${headerHeight}px`,
        textAlign:'right',
        marginTop:5
    },
    register:{
        background:'rgba(255,255,255,0.16)',
        height:44,
        borderRadius:4,
        fontSize:16,
        color:'#ffffff',
        padding:'0 24px',
        display:'inline-block',
        lineHeight:'44px',
        marginRight:10,
        float:'right',
        [theme.breakpoints.down('sm')]: {
            height:32,fontSize:14,
            padding:'0 16px',
            lineHeight:"32px"
        },
        '&:hover':{
            color:'#ffffff',
        }
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
        float:'right',
        [theme.breakpoints.down('sm')]: {
            height:32,fontSize:14,
            padding:'0 16px',
            lineHeight:"32px"
        },
        '&:hover':{
            color:'#ffffff',
        }
    },

})

export default styles