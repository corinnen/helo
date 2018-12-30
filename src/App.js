import React, { Component } from 'react';
import './App.css';
import route from './route'
import Nav from './components/Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav />
       {route}
      </div>
    );
  }
}

export default App;
