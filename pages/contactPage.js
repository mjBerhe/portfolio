import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

import FOG from 'vanta/dist/vanta.fog.min';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function ContactPage() {

   const [vantaEffect, setVantaEffect] = useState(0);
   const myRef = useRef(null);

   useEffect(() => {
      if (!vantaEffect) {
         setVantaEffect(FOG({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0xaef7,
            baseColor: 0x0,
            speed: 1.0, 
            blurFactor: 0.5,
         }));
      }
      return () => {
         if (vantaEffect) vantaEffect.destroy();
      }
   }, [vantaEffect]);

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
      <div className='container' ref={myRef}>
         <Head>
            <title>Contact Me</title>
            <link rel="icon" type="image/png" href="logos/Berhe_Logo3.png" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
         </Head>

         <div className='contactPage-container'>

            <Nav/>

            <div className='contact-title section-title'>
               <h2>Contact Me</h2>
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
      </div>
   )
}