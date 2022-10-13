import React from 'react';
import 'chart.js/auto';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import useStyles from './DetailStyles';
import useTransaction from '../../CustomHooks/useTransaction';
import { Doughnut } from 'react-chartjs-2';
export default function Detail(props){ //we can also destructure the prop({title})
    const classes= useStyles();  //cz makestyles returns a hook. you can use any other name instead of useStyles
    const {total , chartData}=useTransaction(props.title);
    return(
        <div>
            <Card className={props.title==="Income"? classes.income: classes.expense}>
                <CardHeader title={props.title}/>
                <CardContent>
                    <Typography>${total}</Typography>
                    <Doughnut data={chartData}/>
                </CardContent>
            </Card>
        </div>
    )
}