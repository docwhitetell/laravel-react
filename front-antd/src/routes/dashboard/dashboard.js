import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import {LineChart, Line,
    XAxis, YAxis, CartesianGrid,
    Tooltip, Legend,ResponsiveContainer,
    BarChart,Bar,ReferenceLine,
    Pie,PieChart,RadarChart,Radar,PolarAngleAxis,PolarRadiusAxis,PolarGrid
} from 'recharts';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {Icon} from 'antd'
import style from './style.css'
const sectiontitle={
    color:'#424242',
    textIndent:'2rem',
    marginTop:'10px'
}



class Dashboard extends React.Component{

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch,dashboard} = this.props
        dispatch({
            type:'dashboard/getData'
        })
    }
render(){
    const {dispatch,dashboard,loading} = this.props
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <div>
            <h1 style={sectiontitle}>Dashboard <small style={{fontSize:'12px',color:'#424242',fontWeight:'300'}}>(mock.js data present)</small></h1>
            <Grid container className={style.cardRow}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={style.card}>
                        <div className={style.cardLeft}>
                            <Icon type="user" className={style.icon} style={{color:'#00E676'}} />
                        </div>
                        <div className={style.cardRight}>
                            <h5 className={style.crNum}>Users</h5>
                            <h1 className={style.crTitle}>2,332</h1>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={style.card}>
                        <div className={style.cardLeft}>
                            <Icon type="user-add" className={style.icon} style={{color:'#E91E63'}} />
                        </div>
                        <div className={style.cardRight}>
                            <h5 className={style.crNum}>New Users</h5>
                            <h1 className={style.crTitle}>2,332</h1>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={style.card}>
                        <div className={style.cardLeft}>
                            <Icon type="appstore" className={style.icon} style={{color:'#03A9F4'}} />
                        </div>
                        <div className={style.cardRight}>
                            <h5 className={style.crNum}>Active Project</h5>
                            <h1 className={style.crTitle}>2,332</h1>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className={style.card}>
                        <div className={style.cardLeft}>
                            <Icon type="shopping-cart" className={style.icon} style={{color:'#7E57C2'}} />
                        </div>
                        <div className={style.cardRight}>
                            <h5 className={style.crNum}>Referrals</h5>
                            <h1 className={style.crTitle}>2,332</h1>
                        </div>
                    </Card>
                </Grid>
            </Grid>
            <Grid container className={style.cardRow}>
                <Grid item xs={12} sm={12} md={6}>
                    <ResponsiveContainer minHeight={300}>
                        <PieChart minHeight={300}>
                            <Pie data={dashboard.data.ud.inner_pie} dataKey='value' outerRadius={60} fill="#8884d8"/>
                            <Pie data={dashboard.data.ud.outer_pie} dataKey='value' innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
                            <Tooltip/>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <ResponsiveContainer minHeight={300}>
                        <RadarChart outerRadius={150} minHeight={300} data={dashboard.data.pd}>
                            <Radar name="pv" dataKey="pv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                            <Radar name="Lily" dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
                            <PolarGrid />
                            <Legend />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                        </RadarChart>
                    </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <ResponsiveContainer minHeight={300}>
                        <LineChart layout="vertical" minHeight={300} data={dashboard.data.pd}
                                   margin={{top: 20, right: 30, left: 0, bottom: 5}}>
                            <XAxis type="number"/>
                            <YAxis dataKey="name" type="category"/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line dataKey="pv" stroke="#8884d8" />
                            <Line dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <ResponsiveContainer minHeight={300}>
                        <BarChart minHeight={300} data={dashboard.data.nd} stackOffset="sign"
                                  margin={{top: 5, right: 30, left: 0, bottom: 5}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <ReferenceLine y={0} stroke='#000'/>
                            <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
                            <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </div>
    )
}

}


export default connect(({dashboard,dispatch,loading})=>({dashboard,dispatch,loading}))(Dashboard);
