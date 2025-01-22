import React from 'react'
import './projects.css'

import ProjectItems from './ProjectItems'

import IPL from "../../assets/material/IPL.jpg"
import Pneumonia_detection from "../../assets/material/Pneumonia_detection.jpg"
import portfolio1 from "../../assets/material/portfolio1.jpg"
import Crop_Info from "../../assets/material/Crop_Info.jpg"
import short_notes from "../../assets/material/short_notes.jpg"

export default function ProjectsSection() {
    return (
        <div className="main_projects" id="projects">
            <h3 className='ProjectHead'>My Projects</h3>
            <div className="Items">
                <ProjectItems 
                img={Crop_Info}
                title="Crop Info"
                link="https://cropinfo.onrender.com"
                desc={
                    ["Developed ML model for prediction of suitable crops based on soil compositions along with live weather condition and past year’s weather analysis for a particular region.",
                    "Dataset was taken from Kaggle and then further data analysis was done through pandas, NumPy. Used Python Flask framework and HTML, CSS to deploy the model."]
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
                img={short_notes}
                title="Short Notes Saver"
                link="https://short-note-saver.onrender.com/"
                desc={
                    ["A note taking website build using MERN stack, that allows user to perform the CRUD operation on notes, with user authentication, used bcrypt for securing password.",
                    "Implemented the note, user model with controllers using MVC pattern.React library antd was used to design the UI part with bootstrap, CSS and the project was deployed on Cyclic."]
                    }
                />
            </div>
        </div>
    )
}
