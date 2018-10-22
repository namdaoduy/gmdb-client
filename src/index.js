import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import { MainRouter } from './containers/MainRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainRouter />, document.getElementById('root'));
registerServiceWorker();
