import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as  actionCreators  from '../../../State/ActionCreators/index';
import {TextField, Typography, MenuItem, FormControl, Button, InputLabel, Select, Grid} from '@material-ui/core';
import useStyles from './FormStyles';
// import { addTransaction } from '../../../State/ActionCreators';
import {v4 as uuidv4} from 'uuid';
export default function Form(){ 
    const InitialState=({
        amount: 0,
        category: '',
        type:'',
        date:new Date()
    })
    const classes= useStyles();  //cz makestyles returns a hook. you can use any other name instead of useStyles
    const[FormData, setFormData]=React.useState(InitialState);
    const dispatch= useDispatch()
    const {addTransaction}=bindActionCreators(actionCreators,dispatch)
    function CreateTransaction(){
        const transaction = {...FormData, id: uuidv4(), amount: Number(FormData.amount)}
        addTransaction(transaction);
        setFormData(InitialState);
    }

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='subtitle2' align='center' gutterBottom>...</Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value={FormData.type} onChange={(e)=>setFormData({...FormData, type: e.target.value})}>
                            <MenuItem value='income'>Income</MenuItem>
                            <MenuItem value='expense'>Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={FormData.category} onChange={(e)=>setFormData({...FormData, category: e.target.value})}>
                            <MenuItem value='business'>Business</MenuItem>
                            <MenuItem value='salary'>Salary</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <TextField type='number' label='Amount' value={FormData.amount} onChange={(e)=>({...FormData, amount: e.target.value})} fullWidth/>
                </Grid>

                <Grid item xs={6}>
                    <TextField type='date' label='Date'  value={FormData.date} onChange={(e)=>({...FormData, date: e.target.value})} fullWidth/>
                </Grid>       
                    <Button className={classes.button} variant='outlined' color='primary' onClick={CreateTransaction} fullwidth>Create</Button>
          </Grid>
        </div>
    )
}