import React from 'react'
import './skills.css'
import {motion} from 'framer-motion'

export default function SkillsItems(props) {
    return (
        <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 0.9,
          transition: {
            duration: 2,
          },
        }}
        className='skill_box'>
            <div className="skill_body">
                <img src={props.skill_image} className='skill_image'/>
            </div>
            <div className='skill_title'>
                <p>{props.skill_title}</p>
            </div>
            
        </motion.div>
    )
}