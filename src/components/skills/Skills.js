import React from "react";
import "./skills.css";
import SkillsItems from "./SkillsItems";
import java from "../../assets/material/java.png";
import python from "../../assets/material/python.png";
import flask from "../../assets/material/flask.png";
import github from "../../assets/material/github.jpg";
import informatica from "../../assets/material/informatica.png";
import SQL from "../../assets/material/sql.png"
import angular from "../../assets/material/angular.png"
import etl from "../../assets/material/etl.png"
import dw from "../../assets/material/dw.jpg"
import aws from "../../assets/material/aws.png"
import programming from "../../assets/material/programming.png"
import pandas from "../../assets/material/pandas.png"
import skill from '../../assets/material/skill_2.png'


const data = [
  { id: 0, skill_title: "Python", image: python },
  { id: 1, skill_title: "SQL", image: SQL },
  { id: 2, skill_title: "Data Warehousing", image: dw },
  { id: 3, skill_title: "ETL", image: etl },
  { id: 4, skill_title: "Informatica", image: informatica },
  { id: 5, skill_title: "AWS Services", image: aws },
  { id: 6, skill_title: "Github", image: github },
  { id: 8, skill_title: "Angular", image: angular },
  { id: 9, skill_title: "Flask", image: flask },
  { id: 10, skill_title: "Java", image: java },
  { id: 11, skill_title: "Pandas", image: pandas},
  { id: 12, skill_title: "Programming", image: programming }
];
export default function Skills() {
  return (
    <div className="skills" id="skills">
     
      <div className="container">
                <img src={skill} alt="" className="icon" />
                <h3 className="field-header animation">My Skills</h3>
            </div>
      <div className="skill_items">
      {data.map(function(d, idx){
                    return (
                        <SkillsItems skill_title={d.skill_title} skill_image={d.image}/>
                    )
                })}
      </div>
    </div>
  );
}
