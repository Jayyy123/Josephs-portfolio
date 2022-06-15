import React, { Component } from 'react'
// import joseph from '../joseph-sittin.png'
import About from './About'
import git from '../github.webp'
import linkedin from '../linkedin.png'
import Contact from './Contact'

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
            <div className='right'>
              <img src={git} alt="github" />
              <h4> <a href='https://www.github.com/jayyy123'> <b>Joseph's Githhub</b>  </a> </h4>
              <img src={linkedin} alt="linkedin" className='linkedin'/>
              <h4> <a href='https://www.linkedin.com/in/joseph-ofili/'> <b>Joseph's Linkedin</b> </a> </h4>
            </div>
          </div>
        <About />
        <Contact />
      </div>
    )
  }
}

export default Home