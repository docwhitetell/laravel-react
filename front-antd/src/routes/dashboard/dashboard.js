import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import NumberCard from './components/NumberCard'
import DataCard from './components/DataCard'
import TabData from './components/TabData'
import TableData from './components/TableData'
import PieData from './components/PieData'

import styles from './styles'

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
        <div style={{marginTop:-68}}>
            <Grid spacing={0} container className={classes.cardRow}>
                {NumberCards}
            </Grid>
            <DataCard classes={classes} data={dashboard}/>

            <div style={{width:'96%',margin:'0 auto',padding:4}}>
                <TabData data={dashboard} classes={classes} handleTabChange={handleTabChange}/>
                <Grid container spacing={8} >
                    <Grid item xs={12} lg={6}>
                        <TableData data={dashboard} handleTablePageChange={handleTablePageChange}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <PieData data={dashboard} handleChangePieData={handleChangePieData} classes={classes}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )


}


export default connect(({dashboard})=>({dashboard}))(withStyles(styles)(Dashboard));
