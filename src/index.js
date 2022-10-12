import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./State/store";
import App from './App';
import './index.css'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
   
//   </React.StrictMode>
// );
ReactDOM.render(
<Provider store={store}> 
<App/>
</Provider>,  
document.getElementById('root')
);