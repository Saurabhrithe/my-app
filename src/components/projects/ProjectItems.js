import React from 'react'
import './projects.css'
import {motion} from 'framer-motion'


export default function ProjectItems(props) {
    return (
        <motion.div 
        initial={{
            opacity:0
        }}
        whileInView={
            {
                opacity:1,
                transition:{
                    
                    duration:2
                }
            }
        }

        className='card'>
            <div className="card__body animation">
                <img src={props.img} alt="" className='card_image'/>
                <h2 className='card_title'>{props.title}</h2>
                <p className='card_desc'>{props.desc}</p>
            </div> 
            <a className="card_btn" href={props.link}>View</a> 
             
        </motion.div>
    )
}
