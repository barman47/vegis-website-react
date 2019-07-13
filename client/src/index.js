import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));