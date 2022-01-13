import React from 'react'
import './topbar.scss'

export default function Topbar({menuBar, setmenuBar}) {
    return (
            <div className="topname">
                <div className={"topbar " + (menuBar && "active")}>
                    <div className="menuButton " onClick={()=>setmenuBar(!menuBar)}>
                        <span className='line1'> </span>
                        <span className='line2'> </span>
                        <span className='line3'> </span>
                    </div>
                </div>
                <h3 className='headerName'>Saurabh Rithe</h3>
            </div>
    )
}
