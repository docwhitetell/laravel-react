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

import Card from 'material-ui/Card';
import {Icon} from 'antd'
import CountUp from 'react-countup';
import NumberCard from './components/NumberCard'

import style from './style.css'
const sectiontitle={
    color:'#424242',
    textIndent:'2rem',
    marginTop:'10px'
}



const Dashboard =({dashboard,dispatch})=>{
    const NumberCards=dashboard.numberCard.map((item,index)=>{
        return <NumberCard data={item} key={index}/>
    })
    return(
        <div>
            <h1 style={sectiontitle}>Dashboard <small style={{fontSize:'12px',color:'#424242',fontWeight:'300'}}>(mock.js data present)</small></h1>
            <Grid spacing={0} container className={style.cardRow}>
                {NumberCards}
            </Grid>
            <Grid spacing={8} container className={style.cardRow}>
                <Grid item xs={12} sm={12} md={6} lg={8} className={style.chartItem}>
                    <Card>
                    <ResponsiveContainer minHeight={400}>
                        <PieChart minHeight={300}>
                            <Pie data={dashboard.ud.inner_pie} dataKey='value' outerRadius={60} fill="#8884d8"/>
                            <Pie data={dashboard.ud.outer_pie} dataKey='value' innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
                            <Tooltip/>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} className={style.chartItem}>
                    <Card>
                    <ResponsiveContainer minHeight={400}>
                        <RadarChart outerRadius={150} minHeight={300} data={dashboard.pd}>
                            <Radar name="pv" dataKey="pv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                            <Radar name="Lily" dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
                            <PolarGrid />
                            <Legend />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                        </RadarChart>
                    </ResponsiveContainer>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={style.chartItem}>
                    <Card>
                        <ResponsiveContainer minHeight={400}>
                            <LineChart layout="vertical" minHeight={300} data={dashboard.pd}
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
                    </Card>


                </Grid>
                <Grid item xs={12} sm={12} md={6}className={style.chartItem}>
                    <Card>
                        <ResponsiveContainer minHeight={400}>
                            <BarChart minHeight={300} data={dashboard.nd} stackOffset="sign"
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
                    </Card>
                </Grid>
            </Grid>
        </div>
    )


}


export default connect(({dashboard})=>({dashboard}))(Dashboard);
