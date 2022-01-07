import React, {useState} from 'react'
import './contact.scss'
import { useEffect } from 'react';
//import form from "./form.php"

export default function Contact() {
    const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);
    return (
        <div className='contact' id='contact'>
            
            <div className="box_contact">
                <h3 className="contact_head">
                    Contact Me
                </h3>
                 <form name="contact" method="POST" data-netlify="true" 
                 >
                    <input type="hidden" name="contact" value="contact" />
                    
                    <input type="text" className="name" name="name" placeholder='Name'/>
                    
                    <input type="text" className="mail_id" name="mail" placeholder='Email'/>
        
                    
                    <textarea placeholder="Your message" name="msg" className="msg"></textarea>
                    
                    <button type="submit" className="contact_button">Send</button>
                    
                </form>
                <div className="social_contact">
                    <div className="icon"><a href="https://www.instagram.com/saurabhrithe/"><i className="fab fa-instagram"></i></a></div>
                    <div className="icon"><a href="mailto:715saurabh@gmail.com"><i className="fas fa-envelope"></i></a></div>
                    <div className="icon"><a href="https://github.com/Saurabhrithe"><i className="fab fa-github"></i></a></div>
                    <div className="icon"><a href="https://www.linkedin.com/in/saurabhrithe/"><i className='fab fa-linkedin'/></a></div>
                </div>
            </div>
            
        </div>
    )
}
