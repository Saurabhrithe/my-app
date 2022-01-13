import React from 'react'
import "./about.scss"

export default function About() {
    return (
        

        <div className="about" id="about">
            
            <h3 className='AboutMe'> About me</h3>
            <div className="boxA">
                    <span className='hi'>Hi, there...</span>
                    <p className='myname'>I'm Saurabh Rithe</p>
                    <p className='text'>
                    Currently pursuing a Bachelors Of Engineering in INFORMATION TECHNOLOGY at Yeshwantrao Chavan College of Engineering (YCCE), Nagpur. 
                    I am a Tech enthusiast interested in Machine Learning, Compititive Programming and Web Development.
                    </p>
                
                    <div className="cv">
                        <div className="social">
                            <div className="icon"><a href="https://www.instagram.com/saurabhrithe/"><i className="fab fa-instagram"></i></a></div>
                            <div className="icon"><a href="mailto:715saurabh@gmail.com"><i className="fas fa-envelope"></i></a></div>
                            <div className="icon"><a href="https://github.com/Saurabhrithe"><i className="fab fa-github"></i></a></div>
                            <div className="icon"><a href="https://www.linkedin.com/in/saurabhrithe/"><i className='fab fa-linkedin'/></a></div>
                        </div>
                    </div>
            </div>    
        </div>
    )
}
//<a className='Resume' href="#">Download Resume</a>