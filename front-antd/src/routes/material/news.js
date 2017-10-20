import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'dva'
import {Pagination} from 'antd'
import { withStyles } from 'material-ui/styles';
import Layout from '../../components/material/layout/Layout'
import BreadCrumb from '../../components/material/components/BreadCrumb/BreadCrumb'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = {
    card: {
    },
    media: {
        height: 200,
    },
    content:{
        height:120
    },
    title:{
        height:64
    },
    description: {
        height:40,
        textOverflow:'ellipsis',
        display:'-webkit-box',
        wordBreak:'break-all',
        webkitBoxOrient:'vertical',
        webkitLineClamp:3,
        overflow:'hidden'
    },
    pagination:{
        margin:'10px auto'
    }

};

class News extends React.Component{
    queryNews=()=>{
        const {dispatch}=this.props
        dispatch({
            type:'news/getNewsdata'
        })
    }
    onChange=()=>{}
    componentDidMount() {
        this.queryNews()
    }
    render(){
        const {classes,news}=this.props
        const breadcrumbNameMap = [
            {
                path:'/',
                name:'App'
            } ,
            {
                path:'/material',
                name:'Material-Design',
            },
            {
                path:'/material/user',
                name: 'News',
            }
        ];

        return(
            <Layout>
                <BreadCrumb data={breadcrumbNameMap}/>

                <Grid container spacing={24} style={{margin:'0 auto',maxWidth:1200}}>
                    { news.list.map((item,index)=>(  <Grid key={item.id} item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <Link to={item.link}>
                                <CardMedia
                                        className={classes.media}
                                        image={item.poster}
                                        title="Contemplative Reptile"
                                />
                            </Link>
                            <CardContent className={classes.content}>
                                <Typography type="headline" component="h2" className={classes.title}>
                                    {item.title}
                                </Typography>
                                <Typography component="p"  className={classes.description}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button dense color="primary">
                                    Share
                                </Button>
                                <Button dense color="primary" href={item.link}>
                                    Learn More
                                </Button>
                                <Button dense color="primary" href={item.link}>
                                    {item.createTime}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>)) }
                    <Pagination className={classes.pagination} showQuickJumper defaultCurrent={news.current} total={news.total} onChange={this.onChange} />
                </Grid>
            </Layout>
        )
    }

}
export default connect(({news,dispatch})=>({news,dispatch}))(withStyles(styles)(News))