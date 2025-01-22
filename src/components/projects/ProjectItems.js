import React from 'react'
import './projects.css'

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
