import React, { Component } from 'react'
import Project from './Project'
import { app, web, all, live } from './Projects'

class Portfolio extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         selected:undefined
      }
    }

    setSelected = (a)=>{
        this.setState({selected:a})
    }

  render() {
      const { filter, handleFilter } = this.props.value
      const {selected} = this.state
      const projects = filter === 'all' ? all : filter === 'app' ? app : filter === 'web' ? web : filter === 'live' ? live : []
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">
    
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Feel free to explore some of my past projects!</p>
                </div>
        
                <div className="row" >
                    <div className="filters">
                        <ul >
                            <li onClick={() => handleFilter('all') } className={ filter === 'all' ? 'li filter-active' : 'li'}>All</li>
                            <li onClick={() => handleFilter('app') } className={ filter === 'app' ? 'li filter-active' : 'li'}>App</li>
                            <li onClick={() => handleFilter('web') } className={ filter === 'web' ? 'li filter-active' : 'li'}>Web</li>
                            <li onClick={() => handleFilter('live') } className={ filter === 'live' ? 'li filter-active' : 'li'}>Live</li>
                        </ul>
                    </div>
                    <div className='lang'>
                        <select>
                            <option value="">Filter by language/framework</option>
                            <option value = 'Python/Django'> Python/Django </option>
                            <option value = 'React'> React </option>
                            <option value = 'Node'> Node </option>
                            <option value = 'Kotlin'> Kotlin </option>
                            <option value = 'Flutter'> Flutter </option>
                            <option value = 'Reactnative'> Reactnative </option>
                        </select>
                    </div>
                </div>

                <div className='projects'>
                    {projects.map((element,index) => <Project value={{element,selected,setSelected:this.setSelected}} key={index}/>
                    )}
                </div>
                
            </div>
        </section>
    )
  }
}

export default Portfolio