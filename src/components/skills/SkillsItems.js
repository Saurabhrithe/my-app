import React from 'react'
import './skills.css'

export default function SkillsItems(props) {
    return (
        // <div className='skill_box'>
        <div className='boxA'>
            {/* <div className="skill_body">
                <img src={props.skill_image} alt="" className='skill_image'/>
            </div> 
            <h2 className='skill_title'>{props.skill_title}</h2> */}
            <ul>
            <li>&bull; Azure Data Fundamentals(DP-900) <a href='https://www.credly.com/badges/c4300a90-0d45-4424-abb7-f6bd48fe04c9'>&#128279;</a></li>
            <li>&bull; GitHub Foundations <a href="https://www.credly.com/badges/5f2e3489-a67e-40ef-abcb-11e3ad21d235">&#128279;</a></li>
            <li>&bull; Promising New Star (Associated with cognizant, Nov-20230</li>
            <li>&bull; Always striving, never settling (Associated with cognizant, May-2024)</li>
        </ul> 
        </div>
    )
}
