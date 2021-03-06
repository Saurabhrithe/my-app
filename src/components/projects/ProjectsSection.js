import React from 'react'
import './projects.scss'

import ProjectItems from './ProjectItems'

import IPL from "../../assets/material/IPL.jpg"
import Pneumonia_detection from "../../assets/material/Pneumonia_detection.jpg"
import portfolio1 from "../../assets/material/portfolio1.jpg"


export default function ProjectsSection() {
    return (
        <div className="main_projects" id="projects">
            <h3 className='ProjectHead'>My Projects</h3>
            <div className="Items">
                
                <ProjectItems
                img={IPL} 
                title="IPL First Innings Score Predictor"
                link="https://ml-scorepredictor.herokuapp.com/"
                desc={
                    ["Developed ML model that predicts first inning score in the IPL match using Random Forest Regression Algorithm.", 
                    "Used Python Flask framework and html, CSS to deploy the model."]
                    }
                />
                <ProjectItems 
                img={Pneumonia_detection}
                title="Pneumonia Detection Webapp"
                link="https://pneumonia--detection.herokuapp.com/"
                desc={
                    ["The classification model was build to detect the pneumonia and normal image with a Kaggle Dataset using Convolutional Neural Network.",
                    " To deploy it on Heroku HTML, CSS was used to build the GUI and trained model was used in the backend."]
                    }
                />
                <ProjectItems 
                img={portfolio1}
                title="Portfolio website"
                link="#"
                desc={
                    ["This portfolio website gives you an information about my skills and projects. Build by using react, HTML5/CSS."]
                    }
                />
            </div>
        </div>
    )
}
