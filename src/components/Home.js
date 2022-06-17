import React, { Component } from 'react'
// import joseph from '../joseph-sittin.png'
import About from './About'
import git from '../github.webp'
import linkedin from '../linkedin.png'
import cv from '../cv.png'
import Contact from './Contact'
import Portfolio from './Portfolio'

class Home extends Component {
    // 

    constructor(props) {
      super(props)
    
      this.state = {
        keywords:"",
        lines:false,
        filter:'all',
      }
    }


    componentDidMount = () => {
      let wordArray = ["a Backend developer ", " a Frontend developer ", " and a",  " Mobile developer "]
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

    handleFilter = (filter) => {
      this.setState({filter})
    }

  render() {
      const { keywords, filter } = this.state
      const { lines, setLines } = this.props.value
    return (
        <div className='body' onScroll={this.addEffect()}>

          <div className='hamburger'>
            <div onClick={()=>setLines()} className= {lines ? 'line lines' : 'line lines1'}></div>
            <div onClick={()=>setLines()} className={lines ? 'line lines' : 'line lines1'}></div>
            <div onClick={()=>setLines()} className={lines ? 'line lines' : 'line lines1'}></div>
          </div>

          <div className='hero'>
            <div id='hero' className="hero-container">
                <h1>Joseph Ofili</h1>
                <p>I'm <span>{keywords}|</span></p>
            </div>
            <div className='right'>
              <div>
                <img src={git} alt="github" />
                <h4> <a href='https://www.github.com/jayyy123'> <b>Joseph's Githhub</b>  </a> </h4>
              </div>
              <div>
                <img src={linkedin} alt="linkedin" className='linkedin'/>
                <h4> <a href='https://www.linkedin.com/in/joseph-ofili/'> <b>Joseph's Linkedin</b> </a> </h4>
              </div>
              <div>
                <img src={cv} alt="cv" className='cv'/>
                <h4> <a href='https://docs.google.com/document/d/1jM3xDvYeyvY18k68SBtupCqG0NFv8QemlWpuGIqnnVA/edit?usp=sharing'> <b>Josephs Resume </b></a> </h4>
              </div>
            </div>
          </div>
        <About />
        <Portfolio value = {{filter,handleFilter:this.handleFilter}} />
        <Contact />
      </div>
    )
  }
}

export default Home