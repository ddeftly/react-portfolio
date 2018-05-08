import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hub from './pages/Hub'
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter basename='dfig'> 
                    <Hub />
                </BrowserRouter>
                , document.getElementById('root'));
registerServiceWorker();
