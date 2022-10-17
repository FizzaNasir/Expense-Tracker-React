import React from 'react';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import formatDate from '../../../Utils/FormatDate';
import * as  actionCreators  from '../../../State/ActionCreators/index';
import {TextField, Typography, MenuItem, FormControl, Button, InputLabel, Select, Grid} from '@material-ui/core';
import useStyles from './FormStyles';
import { incomeCategories, expenseCategories } from '../../../Constants/categories';
import {useSpeechContext} from '@speechly/react-client'
import {v4 as uuidv4} from 'uuid';
import CustomSnackBar from '../../SnackBar/Snackbar';

export default function Form(){ 
    const InitialState=({
        amount: '',
        category: '',
        type:'Income',
        date:formatDate(new Date())
    })
    const classes= useStyles();  //cz makestyles returns a hook. you can use any other name instead of useStyles
    const [FormData, setFormData]=React.useState(InitialState);
    const [open, setOpen]=React.useState(false);
    const dispatch= useDispatch()
    const {addTransaction}=bindActionCreators(actionCreators,dispatch)

    const {segment}=useSpeechContext();
    function CreateTransaction(){
        if (Number.isNaN(Number(FormData.amount)) || !FormData.date.includes('-')) return;
        const transaction = {...FormData, id: uuidv4(), amount: Number(FormData.amount)}
        setOpen(true);
        addTransaction(transaction);
        setFormData(InitialState);
    }

    React.useEffect(()=>{
        if(segment){
            if(segment.intent.intent==='add_expense'){
                setFormData({...FormData, type:'Expense'});
            }
            else if(segment.intent.intent==='add_income'){
                setFormData({...FormData, type:'Income'});
            }
            else if(segment.isFinal && segment.intent.intent ==='create_transaction'){
                return CreateTransaction();
            }
            else if(segment.isFinal && segment.intent.intent ==='cancel_transaction')
            {return setFormData(InitialState);}

            segment.entities.forEach((e)=>{
                const category=`${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`
                switch(e.type){
                    case 'amount':
                        setFormData({...FormData, amount: e.value})
                        break;

                    case 'category':
                        if(incomeCategories.map((ic)=>ic.type).includes(category)){
                        setFormData({...FormData, type:'Income' ,category})}
                        else if(expenseCategories.map((ec)=>ec.type).includes(category))
                            {setFormData({...FormData, type:'Expense' ,category})}
                        
                        break;

                    case 'date':
                        setFormData({...FormData, date: e.value})
                        break;
                    default:
                        break;
                }
            })

            if(segment.isFinal && FormData.amount && FormData.category && FormData.type && FormData.date){
                CreateTransaction();
            }
        }
    }
    ,[segment])
    let seletedCategory=FormData.type==='Income'? incomeCategories: expenseCategories;
    return(

            <Grid container spacing={1}>
                <CustomSnackBar open={open} setOpen={setOpen}></CustomSnackBar>
                <Grid item xs={12}>
                    <Typography variant='subtitle2' align='center' gutterBottom>
                        
                        {segment ? (
                           <div className={classes.segment}>
                             { segment.words.map((w)=>w.value).join(" ")}
                            </div>
                        ): null}
                        
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl  fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value={FormData.type} onChange={(e)=>setFormData({...FormData, type: e.target.value})}>
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={FormData.category} onChange={(e)=>setFormData({...FormData, category: e.target.value})}>
                        {seletedCategory.map((c)=>
                                <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
                            )}
                           
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <TextField type='number' label='Amount' value={FormData.amount} onChange={(e)=>setFormData({...FormData, amount: e.target.value})} fullWidth/>
                </Grid>

                <Grid item xs={6}>
                    <TextField type='Date' label='Date'  value={FormData.date} onChange={(e)=>setFormData({...FormData, date: formatDate(e.target.value)})} fullWidth/>
                </Grid>     

                    <Button className={classes.button} variant='outlined'  fullWidth color='primary' onClick={CreateTransaction} fullwidth>Create</Button>
          </Grid>
     
    )
}