import React from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, IconButton, Slide} from '@material-ui/core';
import {Delete, MoneyOff} from '@material-ui/icons';
import useStyles from './ListStyle';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as  actionCreators  from '../../../State/ActionCreators/index';
export default function List(){
    const classes=useStyles();
    const dispatch= useDispatch();
    const currtransState= useSelector(state=>state.transaction);
    const {deleteTransaction}=bindActionCreators(actionCreators,dispatch)
    return(
        <div>
            <MUIList dense={false} className={classes.list}>
           { currtransState.map((transaction)=>(
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type==='Income'? classes.avatarIncome: classes.avatarExpense}>
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount}-${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' >
                                <Delete onClick={()=>deleteTransaction(transaction.id)}/>
                            </IconButton>
                        </ListItemSecondaryAction> 
                    </ListItem>
                </Slide>
            ))}
            </MUIList>
        </div>
    )
}