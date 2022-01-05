import React from 'react'
import './skills.scss'

export default function SkillsItems(props) {
    return (
        <div className='skill_box'>
            <div className="skill_body">
                <img src={props.skill_image} className='skill_image'/>
                
            </div> 
            <h2 className='skill_title'>{props.skill_title}</h2>
        </div>
    )
}
