import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

import FOG from 'vanta/dist/vanta.fog.min';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TooSlow() {

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

   const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
   }

   return (
      <div className='container' ref={myRef}>
         <Head>
            <title>2Slow</title>
            <link rel="icon" type="image/png" href="logos/Berhe_Logo3.png" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
         </Head>

         <div className='tooslow-content-container'>

            <Nav/>

            <div className='page-title tooslow-title'>
               <div className='tooslow-title-area'>
                  <h2>2Slow</h2>
                  <h4>BETA</h4>
               </div>
               <div className='page-title-links'>
                  <button className='page-button'>
                     <a href="https://www.youtube.com/watch?v=wpV-gGA4PSk" target='_blank'>
                        Visit Website
                     </a>
                  </button>
                  {/* <div className='footer-logo'>
                     <img src="logos/Link3_Logo.png" alt="link logo"/>
                     <a href="https://www.youtube.com/watch?v=wpV-gGA4PSk" className='footer-logo-overlay' target='_blank'>
                        <img src="logos/Link3_Logo2.png" alt="link logo blue"/>
                     </a>
                  </div> */}
                  <div className='footer-logo'>
                     <img src="logos/Github_Logo.png" alt="github logo"/>
                     <a href="https://github.com/mjBerhe/2S" className='footer-logo-overlay' target='blank'>
                        <img src="logos/Github_Logo2.png" alt="github logo blue"/>
                     </a>
                  </div>
               </div>
            </div>

            <div className='page-images tooslow-images'>
               <Slider {...settings}>
                  <div>
                     <img src="screenshots/2Slow_Screenshot.png" alt="2Slow screenshot 1"/>
                  </div>
                  <div>
                     <img src="screenshots/2Slow_2.png" alt="2Slow screenshot 2"/>
                  </div>
               </Slider>
            </div>

            <div className='page-info tooslow-info-1'>
               <div className='page-subheader'>
                  <h3>Motive</h3>
               </div>
               <p>
                  As someone who loved math growing up, I never had many opportunities to see how I matched up
                  against others. The goal with <strong>2Slow</strong> was to create an online platform where people can put
                  their math skills to the test in a fast-paced competitive game. In short, users are pitted
                  against each other answering questions in quick succession, where speed and accuracy are
                  key to winning. 
               </p>
               <p>
                  Accessibility was very important to keep in mind, as I wanted all age groups to compete.
                  The game is designed to be simple enough for anyone to engage with, yet still has room
                  for people to distinguish themselves.
               </p>
            </div>

            <div className='tooslow-info-2'>
               {/* <h3><strong>//&nbsp;&nbsp;</strong>Technologies Used</h3> */}
               <div className='technology-items'>
                  <div className='technology-item'>
                     <a href="https://nodejs.org/en/" target='blank'>
                        <img src="logos/NodeJS_Logo.png" alt=""/>
                     </a>  
                  </div>
                  <div className='technology-item'>
                     <a href="https://reactjs.org/" target='blank'>
                        <img src="logos/ReactJS_Logo.png" alt=""/>
                     </a>                         
                  </div>
                  <div className='technology-item'>
                     <a href="https://nextjs.org/" target='blank'>
                        <img src="logos/NextJS_Logo.png" alt=""/>
                     </a>
                  </div>
                  <div className='technology-item'>
                     <a href="https://sass-lang.com/" target='blank'>
                        <img src="logos/SASS_Logo.png" alt=""/>
                     </a>
                  </div>
                  <div className='technology-item'>
                     <a href="https://socket.io/" target='blank'>
                        <img src="logos/SocketIO_Logo.png" alt=""/>
                     </a>
                  </div>
                  <div className='technology-item'>
                     <a href="https://www.heroku.com/" target='blank'>
                        <img src="logos/Heroku_Logo.png" alt=""/>
                     </a>                           
                  </div>
               </div>
            </div>

            <div className='page-info tooslow-info-3'>
               <div className='page-subheader'>
                  <h3>Progression</h3>
               </div>
               <p>
                  When I started to think how 2Slow would work, I wanted a system where users
                  could interact with each other in near instant time. If users would play against
                  each other online, I wanted the experience to feel 
                  seamless. This is when I found out about <a href="https://socket.io/" target='_blank'>Socket.io</a>.
               </p>
               <p>
                  Socket.io is a tool that enables “real-time, bi-directional and event-based
                  communication”. This was a perfect find for the system I had in mind. Working
                  with Socket.io allowed me to create a functional “room” where users could
                  join and chat.
               </p>
               <p>
                  I was also able to develop the structure of how a game would operate using
                  event based communication. Socket.io is a very powerful tool and I want
                  to explore other areas where it can be used.
               </p>
            </div>

            <Footer className={'page-footer tooslow-footer'}/>
         </div>
      </div>
   )
}