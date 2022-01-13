import React from 'react'
import "./navbar.scss"
import Photo1 from '../../assets/material/Photo1.jpg'

export default function Navbar({menuBar, setmenuBar}) {
    return (
        
            <div className={"wrapper "+(menuBar && "active")}>
                <div className="top">
                    <div className="outer">
                    <img src={Photo1} alt="" />
                    </div>
                    
                    <h2 className='name'>Saurabh Rithe</h2>
                    <p>B.E Information Technology, YCCE</p>
                </div>
                <div className="menu">
                    <ul >
                        <li><a href="#about" onClick={()=>setmenuBar(false)}>About Me</a></li>
                        <li><a href="#skills" onClick={()=>setmenuBar(false)}>Skills</a></li>
                        <li><a href="#projects" onClick={()=>setmenuBar(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={()=>setmenuBar(false)} >Contact</a></li>

                    </ul>
                </div>
            </div>
    )
}
