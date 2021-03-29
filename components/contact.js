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
               <h2><strong>//&nbsp;&nbsp;</strong>Contact Me</h2>
            </div>
            
            <form className="contact-form" onSubmit={sendEmail}>
               <input type="text" name="sender" placeholder='Name' autoComplete={false}/>

               <input type="text" name="senderEmail" placeholder='Email' autoComplete={false}/>

               <input type="text" name="subject" placeholder='Subject' autoComplete={false}/>

               <input type='text' name="message" placeholder='Message' autoComplete={false}/>

               <input type="submit" value="Send" />
            </form>
         </div>
      </section>
   )
}