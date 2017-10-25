import React from 'react'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import {Icon} from 'antd'
import CountUp from 'react-countup';

import styles from '../style.css'
const NumberCard=(data)=>{
    return (
        <Grid item xs={12} sm={6} md={3} style={{padding:4}}>
            <Card className={styles.card}>
                <div className={styles.cardLeft}>
                    <Icon type={data.data.icon} className={styles.icon} style={{color:data.data.color}} />
                </div>
                <div className={styles.cardRight}>
                    <h5 className={styles.crNum}>{data.data.title}</h5>
                    <h1 className={styles.crTitle}>
                        <CountUp
                            start={0}
                            end={data.data.number}
                            duration={2.75}
                            useEasing
                            separator=","
                        />
                    </h1>
                </div>
            </Card>
        </Grid>
    )
}
NumberCard.propTypes = {

}
export default NumberCard