import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hub from './pages/Hub';
import Feed from './pages/Feed';
import './styles/App.css'

const App = () => (
  <Switch>
    <Route path='/hub' component={Hub}/>
    <Route path='/feed' component={Feed}/>
    <Home/>
  </Switch>
)

export default App;