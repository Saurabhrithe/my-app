import React from 'react'
import './skills.scss'
import SkillsItems from './SkillsItems'

import html from "../assets/material/html.png"
import css from "../assets/material/css.png"
import react from "../assets/material/react.jpg"
import java from "../assets/material/java.png"
import python from "../assets/material/python.png"
import flask from "../assets/material/flask.png"
import github from "../assets/material/github.jpg"
import ml from "../assets/material/ml.jpg"




const data =[
    {
        id: 0,
        skill_title:"HTML5",
        image: html
    },
    {
        id: 1,
        skill_title: "CSS",
        image: css

    },
    {
        id: 2,
        skill_title:"React",
        image: react
    },
    {
        id: 3,
        skill_title:"Java",
        image: java
    },
    {
        id: 4,
        skill_title:"Python",
        image: python
    },
    {
        id: 5,
        skill_title:"Flask",
        image: flask
    },
    {
        id: 6,
        skill_title:"Github",
        image: github
    },
    {
        id: 7,
        skill_title:"Machine Learning",
        image: ml
    },
    
];
export default function Skills() {
    return (
        <div className="skills" id="skills">
           <h3 className="skill_head">
               My Skills
           </h3>
           <div className="skill_items">
                {data.map(function(d, idx){
                    return (
                        <SkillsItems skill_title={d.skill_title} skill_image={d.image}/>
            
                    )
                })}
           </div>
        </div>
    )
}
