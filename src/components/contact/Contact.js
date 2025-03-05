import React, {useState} from 'react'
import './contact.css'
import axios from 'axios';
import contact from '../../assets/material/contact.jpg'
import footer from '../../assets/material/footer2.jpg'

export default function Contact() {
   	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	



    
	const afterSubmit = () => {
        //a.preventDefault();

    
        const entries = { name, email, message};
        console.log(name, email);

		axios.post(
				'https://sheet.best/api/sheets/ab77291c-2b1d-4da6-9cf6-5b862df93162', entries,
                alert("I received your message. Thank You!")
			)
	};
    

    return (
        <div className='contact' id='contact'>
            <div className="container">
                <img src={contact} alt="" className="icon" />
                <h3 className="field-header"> Contact me</h3>
            </div>
            <div className="box_contact">

                 <form name="contact" onSubmit={afterSubmit} autoComplete='off'>
                    <div className="name">
                        <input className="fname" placeholder='First Name' onChange={(e) => setName(e.target.value)} required/>
                        <input className="lname" placeholder='Last Name' onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <input className="mail_id" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
                    
                    <textarea placeholder="Your message" className="msg" onChange={(e) => setMessage(e.target.value)} required></textarea>
                    
                    <div className="bttn">
                        <button  type="submit" className="contact_button">Send</button>
                        <button  type="reset" className="contact_button">Reset</button>
                    </div>

                </form>
                
                <div className="social_contact">
                    <img src={footer} alt="" />
                    <div className="icon-container">
                        <div className="icon"><a href="mailto:715saurabh@gmail.com"><i className="fas fa-envelope"></i></a></div>
                        <div className="icon"><a href="https://github.com/Saurabhrithe"><i className="fab fa-github"></i></a></div>
                        <div className="icon"><a href="https://www.linkedin.com/in/saurabhrithe/"><i className='fab fa-linkedin'/></a></div>
                    </div>
                    <div className="footer-link">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        
                    </div>
                </div>

            </div>
            
        </div>

        
    )
}
