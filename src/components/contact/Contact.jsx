import React, { useContext } from 'react';
import "./contact.css";
import Call from "../../images/call.png"
import Email from "../../images/email.png"
import Location from "../../images/location.png"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ThemeContext } from "../../context";

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const submitForm = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oiwgd23', 'template_noefr14', formRef.current, 'xXVIiy5IBxvehiwIC')
        .then((result) => {
            setDone(true);
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

    }

  return (
    <div className='contact'>
        <div className="contact-bg"></div>
        <div className="contact-wrapper">
            <div className="contact-left">
                <h1 className="contact-title">Let's Contact With Each Other</h1>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <img src={Call} alt="" className="contact-ico" />
                        +91 63537 44898
                    </div>
                    <div className="contact-info-item">
                        <img src={Email} alt="" className="contact-ico" />
                        chanabhattimayank@gmail.com
                    </div>
                    <div className="contact-info-item">
                        <img src={Location} alt="" className="contact-ico" />
                        Rajkot, Gujarat, India
                    </div>
                </div>
            </div>

            <div className="contact-right">
                <p className="contact-description">
                    <strong>Want to connect & contribute with me?</strong> A supportive community can't judge anyone. Take me to your community for growth with both sides. More builds are coming soon...</p>

                <form ref = { formRef } onSubmit={submitForm} action="">
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} type="text" placeholder='Enter Your Name' name='user_name' />
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} type="text" placeholder='Subject For Discussion' name='subject' />
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} type="email" placeholder='Enter Your E-mail' name='user_email' />
                    <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} name="message"rows="5" placeholder='Descriptive - Message'></textarea>
                    <button type="submit">Submit</button>
                    {done && "  Thank You For Contacting With Me..."}
                </form>

            </div>
        </div>
    </div>
  );
};

export default Contact;
