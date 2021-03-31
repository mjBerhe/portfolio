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
               <div className='message-main'>
                  <h3>Send me a message and let's get talking!</h3>
               </div>
               <div className='message-hidden'>
                  <h3>Hidden Message</h3>
               </div>
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
         </div>
      </section>
   )
}