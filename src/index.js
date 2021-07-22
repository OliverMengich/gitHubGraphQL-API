import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './custom.scss'

ReactDOM.render(
  <App authorize={ false }/> 
  ,document.getElementById('root')
);

