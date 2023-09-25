import React, { Component } from 'react'
import joseph from  '../jo-cool.jpeg'

export class About extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            age:0,
        }
      }

    setDate = () => {
        const date = new Date()
        const birthDate = new Date(2000, 5, 15)
        const age = Math.floor((date - birthDate) / 31557600000)
        this.setState({age})
    }

    componentDidMount = () => {
        this.setDate()
    }

  render() {
    const { age } = this.state
    return (
        <>
        <section id='about' className="about">
            <div className="container">
                <div className="section-title">
                <h2>About</h2>
                <h4>Personally: </h4>
                <p>
                    I'm an avid fan of animes, movies, and DC content. I enjoy TV shows and find relaxation in chess.
                </p>
                <h4>
                    Professionally: 
                    </h4>
                <p>
                    I serve as a Full Stack Engineer at Manaknightdigital, focusing on backend development, data science, and cloud technologies. My skill set includes Node.js, Express.js, CSS, React, AWS services, and more. Currently pursuing a Computer Engineering degree at Obafemi Awolowo University, I'm passionate about mentoring as a Backend Lead at Google Developer Student Club OAU. My goal is to contribute to impactful projects and continually expand my tech expertise.
                </p>
                </div>

                <div className="about-content">
                <div className="" >
                    <img src={joseph} alt=""/>
                </div>
                <div className="content">
                    <h3> Web &amp; Mobile Developer.</h3>
                    <p className="">
                    I have professional experience in backend development, data science, cloud technologies, and payment services, using Node.js, Express.js, Sequelize, CSS, Bootstrap, React, Tailwind CSS, ETA, Git, Jenkins, AWS Lambdas, EC2, RDS, SSD, Stripe, and more. I have also written bash scripts and cronjobs for backup, automation, and communication purposes.
                    </p>
                    <div className="">
                    <div className="">
                        <ul>
                        <li> <strong>Birthday:</strong> <span>15 May 2000</span></li>
                        <li> <strong>Website:</strong> <a style={{color:'white'}} href='josephofili.live'>josephofili.live</a></li>
                        <li> <strong>Skype:</strong> <span>live:.cid.246d4705ff34582</span></li>
                        <li> <strong>Phone (calls):</strong> <span>+234 7060942709</span></li>
                        <li> <strong>Phone (whatsapp):</strong> <span>+234 8185760425</span></li>
                        <li> <strong>City:</strong> <span>Lagos, Nigeria</span></li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                        <li> <strong>Age:</strong> <span>{age}</span></li>
                        <li> <strong>Degree:</strong> <span>BSc Computer Science and Engineering</span></li>
                        <li> <strong>Email:</strong> <span>josephofilii@gmail.com</span></li>
                        </ul>
                    </div>
                    </div>
                    <p>
                    I am passionate about learning new technologies and applying them to real-world problems.I am looking for opportunities to grow as a Full Stack Engineer and to work on challenging and impactful projects that align with my values and goals. I am confident that my skills, experience, and education make me a valuable asset for any organization.
                    </p>
                </div>
                </div>

            </div>
        </section>
        <section id="skills" className="skills section-bg">
            <div className="container">
        
                <div className="section-title">
                <h2>Skills</h2>
                <p>My Skillsets include</p>
                <hr/>
                <p>
                    <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
                    <img alt="Webpack" src="https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white" /> 
                    <img alt="Docker" src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white" />
                    <img alt="github actions" src="https://img.shields.io/badge/-Github_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white" />
                    <img alt="Google Cloud Platform" src="https://img.shields.io/badge/-Google_Cloud_Platform-1a73e8?style=flat-square&logo=google-cloud&logoColor=white" />
                    <img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" />
                    <img alt="redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" />
                    <img alt="Styled Components" src="https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white" />
                    <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
                    <img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
                    <img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
                    <img alt="Prettier" src="https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" />
                    <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />
                    <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
                    <img alt="PyPI - Django Version" src="https://img.shields.io/pypi/djversions/djangorestframework" />
                </p>
                <p>My Language Stats</p>
                <img src="https://wakatime.com/share/@Jokeseph/1e5680cc-a3c9-4f3e-9d83-9f8206c55d9b.svg" alt="stats"/>
                </div>
        
            </div>
            </section>

        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                <h2>Resume </h2>
                <p>Joseph's Resume <span> <a href='https://docs.google.com/document/d/1jM3xDvYeyvY18k68SBtupCqG0NFv8QemlWpuGIqnnVA/edit?usp=sharing'> View </a> </span> </p>
                </div>

                <div className="resume-div">
                <div className="resume-div-container">
                    <h3 className="resume-title">Summary</h3>
                    <div className="resume-item pb-0">
                    <h4>Joseph Ofili</h4>
                    <p><em>Innovative and deadline-driven Web and Mobile developer with 3+ years of experience developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                    <ul>
                        <li>Adewale street Ajao Estate, Lagos, Nigeria</li>
                        <li>(234) 706-0942709</li>
                        <li>josephofilii@gmail.com</li>
                    </ul>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                    <h4>Bachelor of Science &amp; Computer Science and Engineering</h4>
                    <h5>2018 - present</h5>
                    <p><em>Obafemi Awolowo University</em></p>
                    <p></p>
                    </div>
                    <div className="resume-item">
                    <h4>Diploma &amp; Mathematics and Sciences</h4>
                    <h5>2020</h5>
                    <p><em>Alison</em></p>
                    <p></p>
                    </div>
                </div>
                <div className="col-lg-6" >
                    <h3 className="resume-title">Professional Experience</h3>
                    <div className="resume-item">
                    <h4>Junior Backend and Frontend Developer(Nodejs, Reactjs + Firebase)</h4>
                    <h5>2022</h5>
                    <p><em>Dimechest</em></p>
                    <ul>
                        <li>Responsible for fixing bugs and adding new features to the website </li>
                        <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                        <li>Responsible for maintaining the website and redeploying patches to firebase</li>
                    </ul>
                    </div>
                    <div className="resume-item">
                    <h4>Junior Web Developer</h4>
                    <h5>2022</h5>
                    <p><em>Zummit Africa</em></p>
                    </div>
                    <div className="resume-item">
                    <h4>Backend Developer</h4>
                    <h5>2022</h5>
                    <p><em>Ajo Card</em></p>
                    </div>
                    <div className="resume-item">
                    <h4>Backend Developer</h4>
                    <h5>2022 - 2023</h5>
                    <p><em>Elva Learn Academy · Internship</em></p>
                    </div>
                    <div className="resume-item">
                    <h4>Full Stack Engineer</h4>
                    <h5>2022 - Present</h5>
                    <p><em>
                    Manaknightdigital Ontario, CanadaOntario, Canada
                    Full Stack Engineer
                    <ul>
                    My day to day involves
                    <li>
                     using git as version controlling system, Jenkins as CI/CD Pipeline, Aws lambdas, ec2 instances, RDS, SSD nodes
                    </li>
                    <li>
                     writing bash scripts to run on the server, building and maintaining cronjobs for backing up to aws or google drive or making posts or sending emails and sms and working with stripe as a payment service.
                    </li>
                    <li>
                      using git as version controlling system, Jenkins as CI/CD Pipeline, Aws lambdas, ec2 instances, RDS, SSD nodes 
                    </li>
                    <li>
                      writing bash scripts to run on the server, building and maintaining cronjobs for backing up to aws or google drive or making posts or sending emails and sms and working with stripe as a payment service.  
                    </li>
                    <li>
                     utilizing NodeJs, ExpressJs, Sequelize, Mysql as main Database and Redis for caching, writing unit tests for apis
                    </li>
                    <li>
                     using HTML, CSS, Bootstrap with ETA templating engine to support frontend.My day to day involves me working on projects 
                    </li>
                    <li>
                     utilizing NodeJs, ExpressJs, Sequelize, Mysql as main Database and Redis for caching, writing unit tests for apis 
                    </li>
                    <li>
                     using HTML, CSS, Bootstrap with ETA templating to support frontend
                    </li>
                    </ul>
                    Skills: Amazon Web Services (AWS)Skills: Amazon Web Services (AWS), Node.js · Express.js · MySQL · Embedded JavaScript (EJS) · JavaScript · Cascading Style Sheets (CSS)
                    </em></p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
  }
}

export default About