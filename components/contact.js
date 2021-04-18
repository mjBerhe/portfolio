import React, { useState, useEffect, useRef } from 'react';
import Footer from './footer';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Contact() {

   const [formState, setFormState] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
   });

   const handleFormChange = (e) => {
      setFormState(prevForm => ({
         ...prevForm,
         [e.target.name]: e.target.value,
      }));
   }

   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3cdiee4', 'template_57c2yfl', e.target, 'user_HeqlqbuQa4Ip0GvzY2pRO')
         .then((result) => {
            console.log(result.text);
            Swal.fire({
               icon: 'success',
               title: 'Message Sent!',
               confirmButtonText: 'Nice',
            });
            setFormState({
               name: '',
               email: '',
               subject: '',
               message: '',
            });
         }, (error) => {
            console.log(error.text);
      });
   }

   return (
      <section className='section section-4'>
         <div className='contact-container'>
            <div className='contact-title'>
               <h2>Contact Me</h2>
               <div className='contact-document-logo'>
                  <img src="/logos/Document_Logo.png" alt="document pic2"/>
                  <a href="Resume.pdf" className='contact-document-logo-overlay' target='blank'>
                     <img src="logos/Document_Logo2.png" alt="document pic"/>
                  </a>
               </div>
               
            </div>

            <div className='contact-message'>
               <h3>Send me a message and let's get talking!</h3>
            </div>
            
            <form className="contact-form" onSubmit={sendEmail} autoComplete='off'>
               <div className='form-item-container form-name'>
                  <input type="text" name="name" value={formState.name} onChange={handleFormChange} placeholder='Name'/>
               </div>

               <div className='form-item-container form-email' autoComplete='off'>
                  <input type="text" name="email" value={formState.email} onChange={handleFormChange} placeholder='Email'/>
               </div>
               
               <div className='form-item-container form-subject'>
                  <input type="text" name="subject" value={formState.subject} onChange={handleFormChange} placeholder='Subject'/>
               </div>

               <div className='form-item-container form-message'>
                  <textarea name="message" value={formState.message} onChange={handleFormChange} placeholder='Message'/>
               </div>
               
               <input type="submit" className='form-submit' value="Send Message"/>
            </form>

            <Footer className={'contact-footer'}/>
         </div>
      </section>
   )
}