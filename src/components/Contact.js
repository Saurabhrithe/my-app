import React from 'react'
import './contact.scss'
import emailjs from 'emailjs-com'

export default function Contact() {
    
    return (
        <div className='contact' id='contact'>
            
            <div className="box_contact">
                <h3 className="contact_head">
                    Contact Me
                </h3>
                 <form className="form" action="form.php">
                    <div className="Name">
                        <input type="text" className="fname" name="fname" placeholder='First Name'/>
                        <input type="text" className="lname" name="lname" placeholder='Last Name'/>
                    </div>
                    <div className="phone">
                        <input type="text" className="phone_no" name="phone" placeholder='Phone'/>
                    </div>
                    <div className="mail">
                        <input type="text" className="mail_id" name="mail" placeholder='Email'/>
                    </div>
                    <div className="description">
                            <textarea placeholder="Your message" name="msg" className="msg"></textarea>
                    </div>
                    
                    <button type="submit" className="contact_button">Send</button>
                    
                </form>
                <div className="social_contact">
                            <div className="icon"><a href=""><i className="fab fa-instagram"></i></a></div>
                            <div className="icon"><a href=""><i className="fas fa-envelope"></i></a></div>
                            <div className="icon"><a href=""><i className="fab fa-github"></i></a></div>
                            <div className="icon"><a href="https://www.linkedin.com/in/saurabhrithe/"><i className='fab fa-linkedin'/></a></div>
                </div>
            </div>
            
        </div>
    )
}
