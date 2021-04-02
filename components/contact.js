import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

   const sendEmail = (e) => {
      e.preventDefault();
  
      // emailjs.sendForm('service_3cdiee4', 'template_57c2yfl', e.target, 'user_HeqlqbuQa4Ip0GvzY2pRO')
      //    .then((result) => {
      //       console.log(result.text);
      //    }, (error) => {
      //       console.log(error.text);
      //    });
      }

   return (
      <section className='section section-4'>
         <div className='contact-container'>
            <div className='contact-title section-title'>
               <h2>Contact Me</h2>
            </div>

            <div className='contact-message'>
               <h3>Send me a message and let's get talking!</h3>
            </div>
            
            <form className="contact-form" onSubmit={sendEmail} autoComplete='off'>
               <div className='form-item-container form-name'>
                  <input type="text" name="sender" placeholder='Name'/>
               </div>

               <div className='form-item-container form-email'>
                  <input type="text" name="senderEmail" placeholder='Email'/>
               </div>
               
               <div className='form-item-container form-subject'>
                  <input type="text" name="subject" placeholder='Subject'/>
               </div>

               <div className='form-item-container form-message'>
                  <textarea name="message" placeholder='Message'/>
               </div>
               
               <input type="submit" className='form-submit' value="Send Message" />
            </form>

            <div className='footer-container'>
               <div className='footer-logo-container'>
                  <div className='footer-logo'>
                     <img src="logos/GitHub_Logo.png" alt="github logo"/>
                     <a href="https://github.com/mjBerhe" className='footer-logo-overlay' target='blank'>
                        <img src="logos/Github_Logo2.png" alt="github logo blue"/>
                     </a>
                  </div>
                  <div className='footer-logo'>
                     <img src="logos/LinkedIn_Logo.png" alt="linkedin logo"/>
                     <a href="https://www.linkedin.com/in/matthew-berhe-a632b017a/?originalSubdomain=ca" className='footer-logo-overlay' target='blank'>
                        <img src="logos/LinkedIn_Logo2.png" alt="linkedin logo blue"/>
                     </a>
                  </div>
               </div>
               <h4>Created by Matthew Berhe &copy; 2021 </h4>
            </div>
         </div>
      </section>
   )
}