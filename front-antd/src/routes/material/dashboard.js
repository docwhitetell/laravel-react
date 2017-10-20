import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';

import Layout from '../../components/material/layout/Layout'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import {LineChart, Line,
    XAxis, YAxis, CartesianGrid,
    Tooltip, Legend,ResponsiveContainer,
    BarChart,Bar,ReferenceLine,
    AreaChart,Area,ComposedChart
} from 'recharts';

import BreadCrumb from '../../components/material/components/BreadCrumb/BreadCrumb'

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
const data2 = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: -3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: -2000, pv: -9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: -1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: -3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
const data3 = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
    {name: 'Page B', uv: 868, pv: 967, amt: 1506},
    {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
    {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
    {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
    {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];
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
const Dashboard=({dashboard})=>{


return(
    <Layout>
        <BreadCrumb data={breadcrumbData}/>
        <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={6}>
                <ResponsiveContainer minHeight={300}>
                <LineChart minHeight={300} data={data}
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
                    <LineChart layout="vertical" minHeight={300} data={data}
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
                    <BarChart minHeight={300} data={data}
                              margin={{top: 5, right: 30, left: 0, bottom: 5}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <ResponsiveContainer minHeight={300}>
                    <BarChart minHeight={300} data={data2} stackOffset="sign"
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
                    <AreaChart minHeight={300} data={data}
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
                    <ComposedChart minHeight={300} data={data3}
                                   margin={{top: 20, right: 80, bottom: 20, left: 20}}>
                        <XAxis dataKey="name" label="Pages"/>
                        <YAxis label="Index"/>
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
    </Layout>
    )
}
Dashboard.propTypes = {
};

export default connect(({dashboard})=>({dashboard}))(Dashboard);
