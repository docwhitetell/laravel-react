import React from 'react'
import {
    Tooltip, Legend,ResponsiveContainer,
   AreaChart, Area
} from 'recharts';

const AreasChart=({height,data,dataKey,margin,stroke,fill})=>{
    return(
        <ResponsiveContainer height={height}>
            <AreaChart data={data}
                       margin={margin}>
                <Tooltip/>
                <Area type='monotone' dataKey={dataKey} stroke={stroke} fill={fill} />
            </AreaChart>
        </ResponsiveContainer>
    )
}
export default AreasChart