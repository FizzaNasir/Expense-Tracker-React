import React from 'react';
import {Grid} from '@material-ui/core';
import Detail from "./Components/Details/Detail"
import Main from "./Components/Main/Main"
import useStyles from './styles';
import { useEffect } from 'react';
// import { SpeechState, useSpeechContext } from "@speechly/react-client";

import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
export default function App(){
    const classes=useStyles();
    // const main=React.useRef(null);
    // const { speechState } = useSpeechContext();
    // const executeScroll = () => main.current.scrollIntoView()    
  
    // useEffect(() => {
    //   if (speechState === SpeechState.Recording) {
    //     executeScroll();
    //   }
    // }, [speechState]);
    return(
        <div>
            <Grid className={classes.grid} container spacing={0} justify='center' alignItems='center' style={{height: '100vh'}}>
            <Grid item xs={12} sm={4} className={classes.mobile}>
                    <Detail title="Income"/>
                </Grid>

                <Grid item xs={12} sm={3} className={classes.main}>
                     <Main/>
                </Grid>

                <Grid item xs={12} sm={4} className={classes.desktop}>
                    <Detail title="Income" />
                </Grid>

                <Grid item xs={12} sm={4} className={classes.last}>
                    <Detail title="Expense"/>
                </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton/>
            </PushToTalkButtonContainer>
            </Grid>
        </div>
    )
}