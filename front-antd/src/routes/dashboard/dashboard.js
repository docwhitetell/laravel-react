import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import {LineChart, Line,
    XAxis, YAxis, CartesianGrid,
    Tooltip, Legend,ResponsiveContainer,
    BarChart,Bar,ReferenceLine,
    AreaChart,Area,ComposedChart,Pie,PieChart
} from 'recharts';

import Slider from 'react-slick'

import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const breadcrumbData = [
    {
        path:'/',
        name:'App'
    } ,
    {
        path:'/material',
        name:'Dashboard',
    }
];
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
        console.log(dashboard)
        dispatch({
            type:'dashboard/getData'
        })
    }
render(){
    const {dispatch,dashboard} = this.props
    console.log(dashboard.data)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <div>
            <BreadCrumb data={breadcrumbData}/>
            <h1 style={sectiontitle}>Data Present</h1>
            <Grid container spacing={24}>
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
                        <LineChart minHeight={300} data={dashboard.data.pd}
                                   margin={{top: 5, right: 30, left: 0, bottom: 5}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
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
                <Grid item xs={12} sm={12} md={6}>
                    <ResponsiveContainer minHeight={300}>
                        <AreaChart minHeight={300} data={dashboard.data.pd}
                                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
                            <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                            <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
                        </AreaChart>
                    </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <ResponsiveContainer minHeight={300}>
                        <ComposedChart minHeight={300} data={dashboard.data.pd}
                                       margin={{top: 20, right: 80, bottom: 20, left: 20}}>
                            <XAxis dataKey="name"/>
                            <YAxis />
                            <Tooltip/>
                            <Legend/>
                            <CartesianGrid stroke='#f5f5f5' strokeDasharray="3 3"/>
                            <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
                            <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
                            <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
                        </ComposedChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </div>
    )
}

}


export default connect(({dashboard,dispatch})=>({dashboard,dispatch}))(Dashboard);
