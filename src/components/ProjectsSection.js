import React from 'react'
import './projects.scss'
//import projects from '../assets/data/projects'
import ProjectItems from './ProjectItems'

import IPL from "../assets/material/IPL.jpg"
import Pneumonia_detection from "../assets/material/Pneumonia_detection.jpg"
import portfolio1 from "../assets/material/portfolio1.jpg"


export default function ProjectsSection() {
    return (
        <div className="main_projects" id="projects">
            <h3 className='ProjectHead'>My Projects</h3>
            <div className="Items">
                
                <ProjectItems
                img={IPL} 
                title="IPL First Innings Score Predictor"
                desc={
                    ["Developed ML model that predicts first inning score in the IPL match using Random Forest Regression Algorithm.", 
                    "Used Python Flask framework and html, CSS to deploy the model."]
                    }
                />
                <ProjectItems 
                img={Pneumonia_detection}
                title="Pneumonia Detection Webapp"
                desc={
                    ["Developed a model for classification of pneumonia and normal image with a Kaggle Dataset using Convolutional Neural Network.",
                    "After training and evaluation, model was saved for the future use",
                    "To deploy it on Heroku HTML, CSS was used to build the GUI and trained model was used in the backend."]
                    }
                />
                <ProjectItems 
                img={portfolio1}
                title="Portfolio"
                desc={
                    ["In this project, I made my portfolio website by using react and HTML/CSS"]
                    }
                />
            </div>
            
           

        </div>
    )
}
