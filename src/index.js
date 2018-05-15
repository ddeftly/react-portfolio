import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HashRouter onUpdate={() => window.scrollTo(0, 0)}> 
                    <App/>
                </HashRouter>
                , document.getElementById('root'));
registerServiceWorker();
