import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zt1vza8', 'template_xqjhegf', form.current, {publicKey: '4jhZnZJGzEgxCVd7Z',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setDone(true)
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode? 'white':''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: "var(--skyblue)"}}>
                </div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="text" name='user_email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type="submit" value="send" className='button'/>
                <span>{done && "Thanks for contact me"}</span>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact