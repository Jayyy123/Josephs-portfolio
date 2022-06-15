import './App.css';
import React, { Component } from 'react'
import Home from './components/Home';
import Sidebar from './components/Header components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className='portfolio'>
        <Sidebar />
        <Home />
      </div>
    )
  }
}

export default App;
