import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import PageHeader from '../../components/pageHeader/pageHeader'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import {LineChart, Line,
    XAxis, YAxis, CartesianGrid,
    Tooltip, Legend,ResponsiveContainer,
    BarChart,Bar,ReferenceLine,
    Pie,PieChart,RadarChart,Radar,PolarAngleAxis,PolarRadiusAxis,PolarGrid,AreaChart, Area, Cell
} from 'recharts';
import { LinearProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import Card, { CardHeader, CardMedia, CardContent, CardActions }  from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {Icon,Menu} from 'antd'

import NumberCard from './components/NumberCard'
import AntdTable from '../../components/table/antdTable'
import AreasChart from '../../components/charts/AreasChart'
import BarsChart from '../../components/charts/BarChart'
import BarsChartWithXY from '../../components/charts/BarChartWithXY'
import LinesChartWithXY from '../../components/charts/LineChartWithXY'
import style from './style.css'


const salseData=[
    [{name:'Household appliances',percent:'28.79%',sales:4544,color:'#F44336'},
        {name:'Consumption of alcohol',percent:'21.04%',sales:3321,color:'#E91E63'},
        {name:'Personal health',percent:'19.73%',sales:3113,color:'#3F51B5'},
        {name:'Clothing bags',percent:'14.83%',sales:2341,color:'#2196F3'},
        {name:'Maternal and child products',percent:'7.80',sales:1231,color:'#009688'},
        {name:'Other',percent:'7.80%',sales:1231,color:'#FFEB3B'},
    ],
    [{name:'Household appliances',percent:'18.79%',sales:2544,color:'#F44336'},
        {name:'Consumption of alcohol',percent:'31.04%',sales:4321,color:'#E91E63'},
        {name:'Personal health',percent:'9.73%',sales:1113,color:'#3F51B5'},
        {name:'Clothing bags',percent:'24.83%',sales:2341,color:'#2196F3'},
        {name:'Maternal and child products',percent:'7.80',sales:1231,color:'#009688'},
        {name:'Other',percent:'7.80%',sales:1231,color:'#FFEB3B'},
    ],
    [{name:'Household appliances',percent:'12.79%',sales:1044,color:'#F44336'},
        {name:'Consumption of alcohol',percent:'16.04%',sales:1321,color:'#E91E63'},
        {name:'Personal health',percent:'25.73%',sales:2413,color:'#3F51B5'},
        {name:'Clothing bags',percent:'32.83%',sales:3341,color:'#2196F3'},
        {name:'Maternal and child products',percent:'7.80',sales:1231,color:'#009688'},
        {name:'Other',percent:'7.80%',sales:1231,color:'#FFEB3B'},
    ],

]
const SubMenu = Menu.SubMenu;
const styles = theme => ({
    root: {
        position:'static',
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.background.paper,
    },
    textField:{
        color:'#ffffff'
    },

    formInput:{
        color:'#ffffff',
        fontSize:18,
        padding:'5px 0 4px'
    },
    formLabel:{
        fontSize:18,
        color:'#ffffff'
    }
})

const CircleNumber=({props})=>{
    return (
        <span style={{borderRadius:'50%',background:props.color}}>{props.data}</span>
    )
}
const tableColumns = [{
    title: 'Rank',
    dataIndex: 'id',
    sorter: (a,b)=>a.id-b.id,
}, {
    title: 'Key Word',
    dataIndex: 'word',
}, {
    title: 'User Number',
    dataIndex: 'userNumber',
    sorter:(a,b)=>a.userNumber-b.userNumber,
}, {
    title: 'Rose',
    dataIndex: 'rose',
    sorter:(a,b)=>a.rose-b.rose,
    render: rose => `${rose} %`,
}
];
const Dashboard =({dashboard,dispatch,classes})=>{
    const NumberCards=dashboard.numberCard.map((item,index)=>{
        return <NumberCard data={item} key={index}/>
    })
    function handleTabChange(event, value){
        dispatch({
            type:'dashboard/update',
            payload:{tabs:value}
        })
    }
    function handleCardMenu(e) {
        console.log(e.target)
        //menuEl:event.target
        dispatch({
            type:'dashboard/update',
            payload:{cardMenu:!dashboard.cardMenu,menuEl:e.target}
        })
    }
    function handleTablePageChange(pagination, filters, sorter) {
        if(pagination.current===dashboard.pagination.current){
        }else{
            dispatch({
                type:'dashboard/getTableData',
                payload:pagination
            })
        }
    }
    function handleChangePieData(index) {
        console.log(index)
        dispatch({
            type:'dashboard/update',
            payload:{sales:salseData[index]}
        })
    }
    return(
        <div>
            <PageHeader title="Dashboard" />
            <Grid spacing={0} container className={style.cardRow}>
                {NumberCards}
            </Grid>
            <Grid spacing={0} container className={style.cardRow}>
                <Grid item xs={12} sm={6} md={3} style={{padding:4}}>
                    <Card className={style.dataCard}>
                        <div className={style.dataCardHeader}>
                            <h3 className={style.CardTitle}>Total sales <span className={style.cardHeaderInfo}><Icon type="info-circle-o" /></span></h3>
                            <div className={style.CardMain}>
                                <Grid container spacing={0}  className={style.BigWord}>
                                    <h1 style={{fontSize:28,display:'block',width:'100%'}}>¥126,560</h1>
                                    <div style={{height:48,paddingTop:8,width:'100%'}}>
                                        <span className={style.leftData}>Week:12% <Icon type="up" style={{color:"#D50000"}}/></span>
                                        <span className={style.rightData}>Week:12% <Icon type="down" style={{color:'#00E676'}}/></span>
                                    </div>

                                    <Grid item xs={12} style={{border:'1px solid #e8e8e8',width:'100%'}}></Grid>
                                    <Grid item xs={12}>
                                        <p style={{height: 24, lineHeight: '24px'}}>
                                            <span style={{
                                                marginRight: 20,
                                                lineHeight: '24px',
                                                fontSize: '14px',
                                                fontWeight: 500
                                            }}>Daily sales</span>
                                            <span style={{fontSize: '14px', fontWeight: 500}}>￥12,423</span>
                                        </p>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{padding:4}}>
                    <Card className={style.dataCard}>
                        <div className={style.dataCardHeader}>
                            <h3 className={style.CardTitle}>Visits <span className={style.cardHeaderInfo}><Icon type="info-circle-o" /></span></h3>
                            <div className={style.CardMain}>
                                <Grid container spacing={0}  className={style.BigWord}>
                                    <h1 style={{fontSize:28,display:'block',width:'100%'}}>8,848</h1>
                                    <div style={{height:48,width:'100%'}}>
                                        <AreasChart height={48} data={dashboard.pd} dataKey="pv" stroke='#E91E63' fill='#E91E63' margin={{top: 0, right: 0, left: 0, bottom: 0}}/>
                                    </div>

                                    <Grid item xs={12} style={{border:'1px solid #e8e8e8',width:'100%'}}></Grid>
                                    <Grid item xs={12}>
                                        <p style={{height: 24, lineHeight: '24px'}}>
                                            <span style={{
                                                marginRight: 20,
                                                lineHeight: '24px',
                                                fontSize: '14px',
                                                fontWeight: 500
                                            }}>Daily visits</span>
                                            <span style={{fontSize: '14px', fontWeight: 500}}>￥12,423</span>
                                        </p>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{padding:4}}>
                    <Card className={style.dataCard}>
                        <div className={style.dataCardHeader}>
                            <h3 className={style.CardTitle}>Total Payment <span className={style.cardHeaderInfo}><Icon type="info-circle-o" /></span></h3>
                            <div className={style.CardMain}>
                                <Grid container spacing={0}  className={style.BigWord}>
                                    <h1 style={{fontSize:28,display:'block',width:'100%'}}>6,560</h1>
                                    <div style={{height:48,width:'100%'}}>
                                        <BarsChart
                                            height={48}
                                            data={dashboard.pd}
                                            dataKey={"pv"}
                                            margin={{top: 0, right: 0, left: 0, bottom: 0}}
                                            stroke={'#000'}
                                            fill={'#2196F3'}
                                        />
                                    </div>

                                    <Grid item xs={12} style={{border:'1px solid #e8e8e8',width:'100%'}}></Grid>
                                    <Grid item xs={12}>
                                        <p style={{height: 24, lineHeight: '24px'}}>
                                            <span style={{
                                                marginRight: 20,
                                                lineHeight: '24px',
                                                fontSize: '14px',
                                                fontWeight: 500
                                            }}>Conversion rate</span>
                                            <span style={{fontSize: '14px', fontWeight: 500}}>60%</span>
                                        </p>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{padding:4}}>
                    <Card className={style.dataCard}>
                        <div className={style.dataCardHeader}>
                            <h3 className={style.CardTitle}>Operation effect <span className={style.cardHeaderInfo}><Icon type="info-circle-o" /></span></h3>
                            <div className={style.CardMain}>
                                <Grid container spacing={0}  className={style.BigWord}>
                                    <h1 style={{fontSize:28,display:'block',width:'100%'}}>78%</h1>
                                    <div style={{height:48,width:'100%',position:'relative'}}>
                                        <LinearProgress style={{position:'absolute',bottom:20,height:4,width:'100%'}}
                                         mode="determinate" value={78} color="primary" />
                                    </div>

                                    <Grid item xs={12} style={{border:'1px solid #e8e8e8',width:'100%'}}></Grid>
                                    <Grid item xs={12}>
                                        <div style={{width:'100%',height: 24,}}>
                                            <span className={style.leftData}>Week:12% <Icon type="up" style={{color:"#D50000"}}/></span>
                                            <span className={style.rightData}>Week:12% <Icon type="down" style={{color:'#00E676'}}/></span>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Card>
                </Grid>
            </Grid>

            <div style={{width:'96%',margin:'0 auto',padding:4}}>
                <Card style={{width:'100%',minHeight:400}}>
                        <AppBar position="static" style={{position:'relative'}}>
                            <Tabs value={dashboard.tabs} onChange={handleTabChange} style={{width:'50%'}}>
                                <Tab label="Sales Number" />
                                <Tab label="Visits" />
                            </Tabs>
                            <form style={{width:'160px',position:'absolute',top:2,right:20}}>
                                <TextField
                                    id="date"
                                    label="Choice Date"
                                    type="date"
                                    style={{color:'#ffffff'}}
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    inputClassName={classes.formInput}
                                    labelClassName={classes.formLabel}
                                    InputLabelProps={{
                                        shrink: true,
                                        color:'#ffffff'
                                    }}
                                />
                            </form>
                        </AppBar>
                        {dashboard.tabs === 0 &&
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6}  md={7} lg={8}>
                                <BarsChartWithXY
                                    height={352}
                                    data={dashboard.pd}
                                    dataKey="pv"
                                    margin={{top: 20, right: 20, left: -20, bottom: 20}}
                                    stroke='#000'
                                    fill="#8884d8"/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={5} lg={4}>
                                <h1 style={{fontWeight:400,fontSize:28,color:'#263238',paddingTop:10}}>Store Sales Rank 1.0</h1>
                                <ul className={style.salesRank}>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeftTop}>1</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 1 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeftTop}>2</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 2 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeftTop}>3</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 3 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeft}>4</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 4 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeft}>5</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 5 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeft}>6</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 6 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeft}>7</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 7 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeft}>8</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 8 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                        }
                        {dashboard.tabs === 1 &&
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6}  md={7} lg={8}>
                                <LinesChartWithXY
                                    height={352}
                                    data={dashboard.bd}
                                    dataKey="pv"
                                    XAxisKey="name"
                                    margin={{top: 20, right: 20, left: -20, bottom: 0}}
                                    stroke="#8884d8"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={5} lg={4}>
                                <h1 style={{fontWeight:400,fontSize:28,color:'#263238',paddingTop:10}}>Store Sales Rank 2.0</h1>
                                <ul className={style.salesRank}>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeftTop}>1</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 1 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeftTop}>2</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 2 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeftTop}>3</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 3 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeft}>4</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 4 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeft}>5</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 5 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeft}>6</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 6 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeft}>7</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 7 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                    <li className={style.salesRankItem}>
                                        <span className={style.salesItemLeft}>8</span>
                                        <span className={style.salesItemMid}>Doc.White 官方旗舰店 8 号店</span>
                                        <span className={style.salesItemRight}>323,234</span>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                        }
                </Card>
                <Grid container spacing={8} >
                    <Grid item xs={12} lg={6}>
                        <Card style={{width: '100%', marginTop: 20, minHeight: 400}}>
                            <AppBar position="static" style={{position: 'relative', height: '50px'}}>
                        <span style={{
                            position: 'absolute',
                            left: 20,
                            top: 0,
                            height: 50,
                            lineHeight: '50px',
                            fontSize: 16
                        }}>Online Hot Search</span>
                                <Menu
                                    mode="horizontal"
                                    style={{
                                        backgroundColor: 'inherit',
                                        position: 'absolute',
                                        right: 0,
                                        top: 0,
                                        height: '50px',
                                        borderBottom: 0
                                    }}
                                >
                                    <SubMenu style={{borderBottom: 0}} title={<Icon type="ellipsis" style={{
                                        fontSize: 18,
                                        marginTop: 14,
                                        color: '#ffffff'
                                    }}/>}>
                                        <Menu.Item key={0}>Action 1</Menu.Item>
                                        <Menu.Item key={1}>Action 2</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </AppBar>
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={6} style={{padding: 20}}>
                                    <h3 style={{color: '#757575'}}>
                                        Search Users  &nbsp;&nbsp;
                                        <span><Icon type="info-circle-o"/></span>
                                    </h3>
                                    <ResponsiveContainer height={80}>
                                        <AreaChart data={dashboard.pd}
                                                   margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                                            <Tooltip/>
                                            <Area type='monotone' dataKey='pv' stroke='#108ee9' fill='#108ee9'/>
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </Grid>
                                <Grid item xs={12} sm={6} style={{padding: 20}}>
                                    <h3 style={{color: '#757575'}}>
                                        Per capita search times  &nbsp;&nbsp;
                                        <span><Icon type="info-circle-o"/></span>
                                    </h3>
                                    <ResponsiveContainer height={80}>
                                        <AreaChart data={dashboard.bd}
                                                   margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                                            <Tooltip/>
                                            <Area type='monotone' dataKey='pv' stroke='#108ee9' fill='#108ee9'/>
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </Grid>
                                <Grid item xs={12} style={{padding:20}}>
                                    <AntdTable data={dashboard.search} columns={tableColumns} pagination={dashboard.pagination} handleChange={handleTablePageChange}/>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Card style={{width: '100%', marginTop: 20, height:598}}>
                            <AppBar position="static" style={{position: 'relative', height: '50px'}}>
                        <span style={{
                            position: 'absolute',
                            left: 20,
                            top: 0,
                            height: 50,
                            lineHeight: '50px',
                            fontSize: 16
                        }}>Online Hot Search</span>
                                <Menu
                                    mode="horizontal"
                                    style={{
                                        backgroundColor: 'inherit',
                                        position: 'absolute',
                                        right: 0,
                                        top: 0,
                                        height: '50px',
                                        borderBottom: 0
                                    }}
                                >
                                    <SubMenu style={{borderBottom: 0}} title={<Icon type="ellipsis" style={{
                                        fontSize: 18,
                                        marginTop: 14,
                                        color: '#ffffff'
                                    }}/>}>
                                        <Menu.Item key={0}>Action 1</Menu.Item>
                                        <Menu.Item key={1}>Action 2</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </AppBar>
                            <Grid container spacing={0}>
                                <Grid item xs={12} style={{padding:"30px 20px",}}>
                                    <Button raised color="primary" className={classes.button} onClick={()=>handleChangePieData(0)}>
                                        All Channels
                                    </Button>
                                    <Button raised color="primary" className={classes.button} onClick={()=>handleChangePieData(1)}>
                                        Online
                                    </Button>
                                    <Button raised color="primary" className={classes.button} onClick={()=>handleChangePieData(2)}>
                                        Stores
                                    </Button>
                                </Grid>
                                <div style={{border:'1px solid #e8e8e8',width:'100%'}}></div>
                                <ResponsiveContainer minHeight={400}>
                                    <PieChart minHeight={300}>
                                        <Pie data={dashboard.sales} dataKey='sales' innerRadius={70} outerRadius={90} fill="#82ca9d" label>
                                            {
                                                dashboard.sales.map((entry, index) => <Cell key={index} fill={entry.color}/>)
                                            }
                                        </Pie>
                                        <Tooltip/>
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )


}


export default connect(({dashboard})=>({dashboard}))(withStyles(styles)(Dashboard));
