import React from 'react'
import "./about.css"
import profile from '../../assets/material/profile.png'
import Photo1 from '../../assets/material/p1.jpeg'

export default function About() {
    return (
        

        <div className="about" id="about">
            <div className="container">
                {/* <img src={profile} alt="" className="icon" /> */}
                <h3 className="field-header"> About me</h3>
            </div>
            
            <div className="boxA">
            <div className="profile-img">
            <img src={Photo1} alt="" />
            </div>
                    <div className="content">
                    <span className='hi'>Hi, there...</span>
                    <p className='myname'>I'm Saurabh</p>
                    <p className='text'>
                    
                    A Data professional experienced in Informatica, ETL process, SQL and Python with a
                    ability to design data pipelines for end users.  
                    Looking forward to connecting and exploring new opportunities in the tech industry.<br></br>
                    Thank you for viewing my profile.<br></br>
                    <div className="btn">
                    <a href='https://www.linkedin.com/in/saurabhrithe/'>Let's Connect</a>
                    </div>
                    </p>
                
                    <div className="cv">
                        <div className="social">
                            <div className="icon"><a href="mailto:715saurabh@gmail.com"><i className="fas fa-envelope"></i></a></div>
                            <div className="icon"><a href="https://github.com/Saurabhrithe"><i className="fab fa-github"></i></a></div>
                            <div className="icon"><a href="https://www.linkedin.com/in/saurabhrithe/"><i className='fab fa-linkedin'/></a></div>
                        </div>
                    </div>
                    </div>
            </div>    
        </div>
    )
}
