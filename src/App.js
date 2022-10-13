import React from 'react';
import {Grid} from '@material-ui/core';
import Detail from "./Components/Details/Detail"
import Main from "./Components/Main/Main"
import useStyles from './styles';
export default function App(){
    const classes=useStyles();
    return(
        <div>
            <Grid className={classes.grid} container spacing={0} justify='center' alignItems='center' style={{height: '100vh'}}>
                <Grid items xm={12} sm={4}>
                    <Detail title="Income"/>
                </Grid>
                <Grid items xm={12} sm={3}>
                     <Main/>
                </Grid>
                <Grid items xm={12} sm={4}>
                    <Detail title="Expense"/>
                </Grid>
            </Grid>
        </div>
    )
}