import React, { Component } from 'react'

class Gallery extends Component {
  render() {
      const element = this.props.value
    return (
      <div className='gal'>
        <img src={element} alt='viewing'/>
      </div>
    )
  }
}

export default Gallery