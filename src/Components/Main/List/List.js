import React from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, IconButton, Slide} from '@material-ui/core';
import {Delete, MoneyOff} from '@material-ui/icons';
import useStyles from './ListStyle';
import { useSelector } from 'react-redux';
export default function List(){
    const classes=useStyles();
    const currtransState= useSelector(state=>state.transaction);
    
    // const transactions=[
    //     {
    //         id:"1",
    //         type:"Income",
    //         category:"Salary",
    //         amount:50,
    //         date: "Sat 8"
    //     },
    //     {
    //         id:"1",
    //         type:"Expense",
    //         category:"Busniess",
    //         amount:50,
    //         date: "Mon 3"
    //     },
    //     {
    //         id:"1",
    //         type:"Income",
    //         category:"Salary",
    //         amount:50,
    //         date: "Tues 7"
    //     }
    // ];
    return(
        <div>
            <MUIList dense={false} className={classes.list}>
           { currtransState.map((transaction)=>(
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type=='Income'? classes.avatarIncome: classes.avatarExpense}>
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount}-${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' >
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction> 
                    </ListItem>
                </Slide>
            ))}
            </MUIList>
        </div>
    )
}