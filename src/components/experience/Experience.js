import React from "react";
import "./experience.css";
import exp from '../../assets/material/experience_3.jpg'
import {motion} from 'framer-motion'

export default function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="container">
        <img src={exp} alt="" className="icon" />
        <h3 className="field-header"> Experience & Academics</h3>
      </div>
      <div className="boxA">
        <div className="timeline-row">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 2,
              },
            }}
            viewport={{once:true}}

            className="timeline-box"
          >
            <div className="content-box">
              <h3 className="role-fte">Cognizant Technology Solutions</h3>
              <p className="role-date">ETL developer | Feb 2023 - Present | Pune</p>
              <p className="desc">
                Experienced in data analysis, data validation & transformation with tools like
                Informatica, Redshift & DBeaver. <br></br> Worked on designing of an UI application with Angular for 
                internal team to manage user consent
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 2,
              },
            }}
            viewport={{once:true}}
            className="timeline-box"
          >
            <div className="content-box">
              <h3 className="role-fte">Cognizant Technology Solutions</h3>
              <p className="role-date">Intern | Mar 2022 - Aug 2023 | Pune</p>
              <p className="desc">
                Have handson experience in building data visualizer to visualize
                the state/province wise number of confirmed, deaths, recovered
                and active covid cases in Python and creating workflows using
                informatica, SQL.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 2,
              },
            }}
            viewport={{once:true}}

            className="timeline-box"
          >
            <div className="content-box">
              <h3 className="role-fte">
                Yeshwantrao Chavan College Of Engineering, Nagpur
              </h3>
              <p className="role-date"> Jun 2018 - Jun 2022 | Nagpur</p>
              <p className="desc">Completed B.E in Information Technology</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
