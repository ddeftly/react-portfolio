import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './pages/Home';
import Hub from './pages/Hub';
import Feed from './pages/Feed';
import './styles/App.css'

const App = () => (
  <AnimatedSwitch
    atEnter={transition.atEnter}
    atLeave={transition.atLeave}
    atActive={transition.atActive}
    mapStyles={mapStyles}
    className='switch-wrapper'
  >
    <Route path='/hub' component={Hub}/>
    <Route path='/feed' component={Feed}/>
    <Home/>
  </AnimatedSwitch>
)

export default App;

const mapStyles = (styles) => {
  return {
    opacity:styles.opacity,
    transform:`translateY(${styles.y}%)`,
  }
}


const transition = {
  atEnter: {
    opacity:0,
    y:100,
  },
  atLeave:{
    opacity:0,
    y:-100
  },
  atActive: {
    opacity:1,
    y:0,
  },
}
