import React from 'react'
import "./about.css"

export default function About() {
    return (
        

        <div className="about" id="about">
            
            <h3 className="heading"> About me</h3>
            <div className="boxA">
                    <span className='hi'>Hi, there...</span>
                    <p className='myname'>I'm Saurabh</p>
                    <p className='text'>
                    Thank you for viewing my profile.
                    I'm currently working as an ETL developer  
                    skilled in doing data analysis, ETL process, informatica, python scripting and SQL.
                    Looking forward to connecting and exploring new opportunities in the tech industry.<br></br>
                    Let's Connect...
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
    )
}
