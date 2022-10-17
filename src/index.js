import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./State/store";
import App from './App';
import './index.css'
import {SpeechProvider} from '@speechly/react-client';
ReactDOM.render(
    <SpeechProvider appId="5b1f1376-b002-4935-a319-e034a16625f1" language="en-US">
   <Provider store={store}> 
     <App/>
   </Provider>
   </SpeechProvider>,
document.getElementById('root')
);