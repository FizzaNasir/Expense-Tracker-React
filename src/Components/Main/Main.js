import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './MainStyles';
import Form from './Form/Form';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import List from './List/List';
export default function Main(){ //we can also destructure the prop({title})
    const classes= useStyles();  //cz makestyles returns a hook. you can use any other name instead of useStyles
    const dispatch= useDispatch();
    //const {balance}=bindActionCreators(actionCreators,dispatch)
    const currtransState= useSelector(state=>state.transaction);
   const balance = currtransState.reduce((acc, currVal)=>currVal.type==='Expense'? acc-currVal.amount : acc+currVal.amount,0)    

    return(
        <div>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="Powered By speechly"/>
                <CardContent>
                    <Typography align="center" variant="h5">Total balance is ${balance}</Typography>
                    <Typography variant="subtitle1" style={{lineHeight: '1em', marginTop: '20px'}}>Try saying: Add income for 100$ in category salary</Typography>
                {/* <Divider className={classes.divider}/> */}
                <Form/>
                </CardContent>
                    <CardContent  className={classes.cartContent}>
                        <Grid container spacing={0}>
                         <Grid item xs={12}>   
                         <List/>                      
                         </Grid> 
                        </Grid>    
                    </CardContent>
              
            </Card>
        </div>
    );
};