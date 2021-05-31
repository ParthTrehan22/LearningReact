import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Garage from './Props';
import Car from './States';
import Mounting from './Mounting';
import Updating from './Updating';

ReactDOM.render(
  <React.StrictMode>
    {/* <App color = "Red"/> */}
    {/* <Garage></Garage> */}
    {/* <Car></Car> */}
    {/* <Mounting model = "CLS 200"></Mounting> */}
    <Updating color="Black"></Updating>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
