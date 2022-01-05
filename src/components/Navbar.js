import React from 'react'
import "./navbar.scss"
import Photo from '../assets/material/Photo.jpg'

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        
            <div className={"wrapper "+(menuOpen && "active")}>
                <div className="top">
                    <div className="outer">
                    <img src={Photo} alt="" />
                    </div>
                    
                    <h2 className='name'>Saurabh Rithe</h2>
                    <p>B.E Information Technology, YCCE</p>
                </div>
                <div className="menu">
                    <ul >
                        <li><a href="#about" onClick={()=>setMenuOpen(false)}>About Me</a></li>
                        <li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a></li>
                        <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={()=>setMenuOpen(false)} >Contact</a></li>

                    </ul>
                </div>
                
            </div>
    )
}
