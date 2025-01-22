import React, {useState} from 'react'
import './contact.css'
import axios from 'axios';


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
            
            <div className="box_contact">
                <h3 className="contact_head">
                    Contact Me
                </h3>
                 <form name="contact" onSubmit={afterSubmit} autoComplete='off'>
                    <input className="name" placeholder='Name' onChange={(e) => setName(e.target.value)} required/>

                    <input className="mail_id" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
                    
                    <textarea placeholder="Your message" className="msg" onChange={(e) => setMessage(e.target.value)} required></textarea>
                    
                    <div className="bttn">
                        <button  type="submit" className="contact_button">Send</button>
                        <button  type="reset" className="contact_button">Reset</button>
                    </div>

                </form>
                <div className="social_contact">
                    <div className="icon"><a href="mailto:715saurabh@gmail.com"><i className="fas fa-envelope"></i></a></div>
                    <div className="icon"><a href="https://github.com/Saurabhrithe"><i className="fab fa-github"></i></a></div>
                    <div className="icon"><a href="https://www.linkedin.com/in/saurabhrithe/"><i className='fab fa-linkedin'/></a></div>
                </div>
            </div>

        </div>

        
    )
}
