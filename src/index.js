import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from 'react-redux';
import store from './redusers/store';


//const storeForAxios=createStore(reduser)

ReactDOM.render(
  
  <React.StrictMode> 
  <Provider store={store}> 
    <App />
   </Provider>
</React.StrictMode>
  ,document.getElementById('root')
);

 
