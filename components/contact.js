import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3cdiee4', 'template_57c2yfl', e.target, 'user_HeqlqbuQa4Ip0GvzY2pRO')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
      }

   return (
      <section className='section section-4'>
         <div className='contact-container'>
            <div className='contact-title section-title'>
               <h2>Contact Me</h2>
            </div>

            <div className='contact-message'>
               <h3>
                  Send me a message and let's get talking!
               </h3>
            </div>
            
            <form className="contact-form" onSubmit={sendEmail}>
               <input type="text" className='form-name' name="sender" placeholder='Name' autoComplete='off'/>

               <input type="text" className='form-email' name="senderEmail" placeholder='Email' autoComplete='off'/>

               <input type="text" className='form-subject' name="subject" placeholder='Subject' autoComplete='off'/>

               <input type='text' className='form-message' name="message" placeholder='Message' autoComplete='off'/>

               <input type="submit" className='form-submit' value="Send Message" />
            </form>
         </div>
      </section>
   )
}