import React from 'react';
import ReactDOM from 'react-dom';
import {Provider  } from 'react-redux';
import { createStore } from 'redux';       
import './index.css';
import App from './containers/App';
import {searchRobots } from './reducers'; 


import 'tachyons';
//import { robots } from './robots';

import reportWebVitals from './reportWebVitals';
//import 'tachyons';

//multiple card components wrap the Card
//in a div becoz we can only return one
//component

const store = createStore(searchRobots  )

ReactDOM.render(
  <React.StrictMode>,<App store={store}/>
    
     
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
