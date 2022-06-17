import React, { Component } from 'react'
import Gallery from './Gallery'

class Project extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         selected:false,
         view:false,
      }
    }
    render() {
      const {element,selected,setSelected} = this.props.value
      const { view } = this.state
    return (
      <div className={ selected === element.title ? 'proj selected-project'  : 'proj'} id='proj'>
        <p className={ selected === element.title ? 'project-hp visible hp'  : 'project-panel'} id='hp'> {element.title} </p>
        <img onClick={() => setSelected(element.title)} src={element.gallery[0]} alt='project'/>
        <div className={ selected === element.title ? 'project-panel visible project-panel-animation'  : 'project-panel'} id='panel'>
            <p onClick={()=>this.setState({view:true})}>⨮</p>
            <p>🔗</p>
        </div>
        { view && (
            <div className='view'>
                <div className='title'>
                    <h2>{element.title}</h2>
                    <p onClick={()=>this.setState({view:false})}>🆇</p>
                </div>
                <p>Scroll left or right to see more images</p>
                <div className='gallery'>
                    {element.gallery.map((el,index)=>{
                        return <Gallery value={el} key={index}/>
                    })}
                </div>
            </div>
        )}
      </div>
    )
  }
}

export default Project