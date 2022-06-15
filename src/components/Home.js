import React, { Component } from 'react'
// import joseph from '../joseph-sittin.png'
import About from './About'

class Home extends Component {
    // 

    constructor(props) {
      super(props)
    
      this.state = {
        keywords:""
      }
    }


    componentDidMount = () => {
      let wordArray = ["a Backend developer |", "\n", "a Frontend developer |", "\n", " and a", "\n",  "Mobile developer |"]
      let letters = wordArray.join("").split("")
      let backupLetters = wordArray.join("").split("")
      setInterval(()=>{
          if(letters.length > 0){
              const current =  letters[0]
              const keywords = this.state.keywords + current
              this.setState({keywords})
              letters.shift()
          }else{
            this.setState({keywords:""})
            letters = backupLetters
          }
      },150)
    }

    addEffect = () => {
      
    }

  render() {
      const { keywords } = this.state
    return (
        <div className='body' onScroll={this.addEffect()}>
                <div className='hero'>
        <div id='hero' className="hero-container">
            <h1>Joseph Ofili</h1>
            <p>I'm <span>{keywords}</span></p>
        </div>
      </div>
        <About />
      </div>
    )
  }
}

export default Home