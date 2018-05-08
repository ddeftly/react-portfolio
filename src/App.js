import React, { Component } from 'react';
import Hub from './pages/Hub'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div>
        <Hub/>
      </div>
    );
  }
}

export default App;
