import React from 'react'
import './projects.scss'

//import IPL from "../assets/material/IPL.jpg"
//import { Link }  from 'react-router-dom'

export default function ProjectItems(props) {
    return (
        <div className='card'>
            <div className="card__body">
                <img src={props.img} alt="" className='card_image'/>
                <h2 className='card_title'>{props.title}</h2>
                <p className='card_desc'>{props.desc}</p>
            </div> 
            <a className="card_btn" href={props.link}>View</a>  
        </div>
    )
}
