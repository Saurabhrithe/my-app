import React from 'react'
import "./certification.css"
import certification from '../../assets/material/certificate_5.png'


export default function Certification() {
  return (
    <div className="certifications" id="certification">
      <div className="container">
        <img src={certification} alt="" className="icon" />
        <h3 className="field-header"> Certifications 
          & Awards</h3>
      </div>        
      <div className="boxA">
             <p> &bull; Azure Data Fundamentals(DP-900)<a href='https://www.credly.com/badges/c4300a90-0d45-4424-abb7-f6bd48fe04c9'>&#128279;</a></p> 
             <p> &bull; GitHub Foundations <a href="https://www.credly.com/badges/5f2e3489-a67e-40ef-abcb-11e3ad21d235">&#128279;</a> </p>
             <p> &bull; Cloud Data Integration Practioner Certification</p>
             <p> &bull; Promising New Star [Associated with cognizant, Nov-2023]</p>
             <p> &bull; Always striving, never settling [Associated with cognizant, May-2024]</p>
      
        </div> 
    </div>
  )
}
