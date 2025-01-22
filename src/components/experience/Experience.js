import React from "react";
import "./experience.css";
export default function Experience() {
  return (
    <div className="experience" id="experience">
      <h3 className="exp-header">Experience & Academics</h3>
      <div className="boxA">
        <div className="timeline-row">
            <div className="timeline-box">
                    <div className="content-box">
                        <h3 className="role-fte">Cognizant Technology Solutions, Pune</h3>
                        <p className="role-date">ETL Developer | Feb 2023 - Present</p>
                        <p className="desc">Experienced in data analysis & transformation with tools like
            Informatica, AWS Redshift for a leading luxury vehicle manufacturing
            company to provide the transformed data to do the campaigns.</p>
                    </div>
                
            </div>
            <div className="timeline-box">
                    <div className="content-box">
                        <h3 className="role-fte">Cognizant Technology Solutions, Pune</h3>
                        <p className="role-date">Intern | Mar 2022 - Aug 2023</p>
                        <p className="desc">
                            Have handson experience in building data visualizer to visualize the state/province wise number of confirmed, deaths, recovered and
                            active covid cases in Python and creating workflows using informatica, SQL.
                        </p>
                    </div>
                
            </div>
            <div className="timeline-box">
                    <div className="content-box">
                        <h3 className="role-fte">Yeshwantrao Chavan College Of Engineering, Nagpur</h3>
                        <p className="role-date"> CGPA:8.15 | Jun 2018 - Jun 2022</p>
                        <p className="desc">
                            Completed B.E in Information Technology
                        </p>
                    </div>
                
            </div>
        </div>
      </div>
    </div>
  );
}
