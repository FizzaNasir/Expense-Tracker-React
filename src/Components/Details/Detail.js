import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import useStyles from './DetailStyles';
export default function Detail(props){ //we can also destructure the prop({title})
    const classes= useStyles();  //cz makestyles returns a hook. you can use any other name instead of useStyles
    return(
        <div>
            <Card className={props.title==="Income"? classes.income: classes.expense}>
                <CardHeader title={props.title}/>
                <CardContent>
                    <Typography>
                        $50
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}