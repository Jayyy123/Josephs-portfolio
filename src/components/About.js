import React, { Component } from 'react'
import joseph from  '../joseph-sittin.jpg'

export class About extends Component {
  render() {
    return (
        <>
        <section id='about' className="about">
            <div className="container">
                <div className="section-title">
                <h2>About</h2>
                <p>I work well under pressure. I see myself as someone who loves staring projects and seeing them through. I am always looking for better more efficient ways to write cleaner and more reusable code.</p>
                </div>

                <div className="about-content">
                <div className="" >
                    <img src={joseph} alt=""/>
                </div>
                <div className="content">
                    <h3> Mobile &amp; Web Developer.</h3>
                    <p className="">
                    I also build backends of websites using both Django and Node.js. I build apis using either Ktor for Kotlin or Django rest framework + dango-rest Knox for Web tokens and authentication and consume them in both python and javascript. I make use of React for the frontend. I also use simple jwt for node tokens.
                    </p>
                    <div className="">
                    <div className="">
                        <ul>
                        <li> <strong>Birthday:</strong> <span>15 May 2000</span></li>
                        <li> <strong>Website:</strong> <span>www.example.com</span></li>
                        <li> <strong>Phone (calls):</strong> <span>+234 7060942709</span></li>
                        <li> <strong>Phone (whatsapp):</strong> <span>+234 8185760425</span></li>
                        <li> <strong>City:</strong> <span>Lagos, Nigeria</span></li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                        <li> <strong>Age:</strong> <span>22</span></li>
                        <li> <strong>Degree:</strong> <span>BSc Computer Science and Engineering</span></li>
                        <li> <strong>Email:</strong> <span>josephofilii@gmail.com</span></li>
                        </ul>
                    </div>
                    </div>
                    <p>
                    I've worked with Firebase, Room, Retrofit libraries, SQL and SQLite, View binding, and MVVM architecture.
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
                <h2>Resume</h2>
                <p>Joseph's Resume</p>
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
                    <h5>2022 - Present</h5>
                    <p><em>Dimechest</em></p>
                    <ul>
                        <li>Responsible for fixing bugs and adding new features to the website </li>
                        <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                        <li>Responsible for maintaining the website and redeploying patches to firebase</li>
                    </ul>
                    </div>
                    <div className="resume-item">
                    <h4>Junior Mobile and Backend Developer(Nodejs, ReactNative + sequelize + postgres)</h4>
                    <h5>2022 - present</h5>
                    <p><em>Honest Properties</em></p>
                    <ul>
                        <li>Responsible for fixing bugs and adding new features to the app</li>
                        <li>Responsible for updating the backend server and deploying to gcp using github actions</li>
                    </ul>
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