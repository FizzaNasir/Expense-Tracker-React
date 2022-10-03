import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './MainStyles';
import Form from '../Form/Form';
export default function Main(){ //we can also destructure the prop({title})
    const classes= useStyles();  //cz makestyles returns a hook. you can use any other name instead of useStyles
    return(
        <div>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="Powered By speechly"/>
                <CardContent>
                    <Typography align="center" variant="h5">Total balance is 100$</Typography>
                    <Typography variant="subtitle1" style={{lineHeight: '1.5rem', marginTop: '20px'}}>Try saying: Add income for 100$ in category salary</Typography>
                <Divider/>
                <Form/>
                    <CardContent>
                        <Grid container spacing={2}>
                         <Grid items xs={12}>                         
                         </Grid> 
                        </Grid>    
                    </CardContent>
                </CardContent>
            </Card>
        </div>
    )
}