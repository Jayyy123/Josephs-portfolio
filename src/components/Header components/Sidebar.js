import React, { Component } from 'react'
import joseph from '../../jo.jpg'

class Sidebar extends Component {
  render() {
    const { lines } = this.props.value
    return (
      <div className={lines ? 'sidebar-container' : 'sidebar-container side-c'}>

          <img src={joseph} alt="Joseph"/>

          <h1>Joseph Chukwuemeka Ofili </h1>

          <div className='socials'>
          <a href="https://twitter.com/JosephOfili3"><img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="social"/></a> 
          <a href="https://www.linkedin.com/in/joseph-ofili-b102801a4/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="social"/></a> 
          <a href="https://www.instagram.com/ofilijoseph/"><img src="https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white" alt="social"/></a> 
          <a href="https://medium.com/@josephofilii"><img src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" alt="social"/></a>
          </div>

          <div className='links'>
            <ul>
                <li><a href="#hero" className="nav-link scrollto active">🏡 <span>Home</span></a></li>
                <li><a href="#about" className="nav-link scrollto">👤 <span>About</span></a></li>
                <li><a href="#resume" className="nav-link scrollto">📄 <span>Resume</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto">🔖 <span>Portfolio</span></a></li>
                <li><a href="#services" className="nav-link scrollto">📦 <span>Services</span></a></li>
                <li><a href="#contact" className="nav-link scrollto">📨 <span>Contact</span></a></li>
            </ul>
          </div>

      </div>
    )
  }
}

export default Sidebar