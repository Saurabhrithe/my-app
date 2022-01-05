import React, {useState} from 'react'
import './topbar.scss'

export default function Topbar({menuOpen, setMenuOpen}) {
    

    return (

            <div className="topname">
                
    
                <div className={"topbar " + (menuOpen && "active")}>
                    <div className="hamburger " onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'> </span>
                        <span className='line2'> </span>
                        <span className='line3'> </span>
                    </div>
                </div>
                <h3 className='headerName'>Saurabh Rithe</h3>
            </div>
    )
}
