import './App.css';
import React, { Component } from 'react'
import Home from './components/Home';
import Sidebar from './components/Header components/Sidebar';
import Splash from './components/Splash components/Splash';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       lines:false,
       done:false,
       skip:false,
       loading:true,
    }
  }
  setLines = () => {
    const { lines } = this.state
    this.setState({lines:!lines})
  }
  setLoaders = (loading=true,done=false,skip=false)=>{
    this.setState({
      loading,
      done,
      skip
    })
  }

  render() {
    const { lines,loading } = this.state
    return (
      <div className='portfolio'>

        {loading && <Splash value={this.setLoaders}/> }
        {!loading && <Sidebar value={{lines,setLines:this.setLines}} /> }
        {!loading &&  <Home value={{lines,setLines:this.setLines}}/> }

      </div>
    )
  }
}

export default App;
