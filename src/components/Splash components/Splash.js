import React, { Component } from 'react'

class Splash extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         keywords:"",
         skip:false,
         loading:true,
         done:false,
         cont:false,
         entry:true,
         message:'',
         spin:''
      }
    }

    componentDidMount = () => {
        let wordArray = ["Hello there 👋🏼", "Welcome to my website!!", "Feel free to explore and contact me!"]

        this.printLetters(["Jays'......."],110,true)

        setTimeout(()=>{
            this.setState({entry:false})
            this.printLetters([wordArray[0]],90)
            setTimeout(()=>{
                this.printLetters([wordArray[1]],150)
            },2000)
            setTimeout(()=>{
                this.printLetters([wordArray[2]],150)
            },6000)
            setTimeout(()=>{
                this.setState({cont:true})
            },11800)
            setTimeout(()=>{
                // setLoaders(false,false,true)
            },12600)
        },2000)
    }


    printLetters = (value,time,message=false) => {
        let letters = value.join("").split("")
        setInterval(()=>{
            if(letters.length > 0){
                const current =  letters[0]
                const keywords = this.state.keywords + current
                const messag = this.state.message + current
                message ? this.setState({message:messag,spin:current}) : this.setState({keywords})
                letters.shift()
            }
        },time)
    }

    skipIntro = () => {
        this.setState({skip:true})
        const setLoaders = this.props.value
        this.setState({done:true})
        setTimeout(()=>{
            setLoaders(false,false,true)
        },700)
    }

    continue = () => {
        const setLoaders = this.props.value
        this.setState({done:true})
        setTimeout(()=>{
            setLoaders(false,false,true)
        },1000)
    }

  render() {
      const { keywords, done, cont, entry, message, spin } = this.state
    return (
        <>
            {entry ? (
                <div className='before-intro'>
                    <h1>{message}{spin}|</h1>
                </div>
            ) : 
            (
            <div className={done ? 'splash text' : 'splash' }>
                <h1 className={done ? 'text' : ''} >{keywords}|</h1>
                <p className={done ? 'text' : ''} onClick={cont ? this.continue : this.skipIntro}> {cont ? 'continue →' : 'skip intro ⏭'} </p>
            </div>
            )}
        </>
    )
  }
}

export default Splash