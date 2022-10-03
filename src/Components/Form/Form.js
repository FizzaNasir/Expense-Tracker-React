import React from 'react';
import {TextField, Typography, MenuItem, FormControl, Button, InputLabel, Select, Grid} from '@material-ui/core';
import useStyles from './FormStyles';
export default function Form(){ 
    const classes= useStyles();  //cz makestyles returns a hook. you can use any other name instead of useStyles
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='subtitle2' align='center' gutterBottom>...</Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select>
                            <MenuItem value='income'>Income</MenuItem>
                            <MenuItem value='expense'>Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select>
                            <MenuItem value='income'>Business</MenuItem>
                            <MenuItem value='expense'>Salary</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <TextField type='number' label='Amount' fullWidth/>
                </Grid>

                <Grid item xs={6}>
                    <TextField type='date' label='Date' fullWidth/>
                </Grid>       
                    <Button className={classes.button} variant='outlined' color='primary' fullwidth>Create</Button>
          </Grid>
        </div>
    )
}