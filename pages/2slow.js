import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
            <title>Matthew Berhe</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
         </Head>

         <div className='tooslow-content-container'>
            <div className='nav'>
               <Link href='/'>
                  <a><h4>Home</h4></a>
               </Link>
            </div>
            <div className='tooslow-title'>
               <h2><strong>//&nbsp;&nbsp;</strong>2Slow</h2>
               <div className='tooslow-title-links'>
                  <a href="http://tooslow.herokuapp.com/gamelobby" target="_blank">
                     <img src="logos/Link_Logo.png" alt=""/>
                  </a>
                  <a href="https://github.com/mjBerhe/2S" target="_blank">
                     <img src="logos/Github_Logo.png" alt=""/>
                  </a>
               </div>
            </div>
            <div className='tooslow-screenshot'>
               <Slider {...settings}>
                  <div>
                     <img src="screenshots/2Slow_Screenshot.png" alt="2Slow screenshot"/>
                  </div>
                  <div>
                     <img src="screenshots/DPS_Stats.png" alt="DPS Calculator screenshot"/>
                  </div>
                  <div>
                     <img src="screenshots/DPS_Comparison.png" alt="DPS Calculator screenshot"/>
                  </div>
                  <div>
                     <img src="screenshots/DPS_Equipment.png" alt="DPS Calculator screenshot"/>
                  </div>
               </Slider>
            </div>
            <div className='tooslow-info tooslow-info-1'>
               <h3><strong>//&nbsp;&nbsp;</strong>Motive</h3>
               <p>
                  As someone who loved math growing up, I never had many opportunities to see how I matched up
                  against others. The goal with <strong>2Slow</strong> was to create an online platform where people can put
                  their math skills to the test in a fast-paced competitive game. In short, users are pitted
                  against each other answering questions in quick succession, where speed and accuracy are
                  key to winning. 
               </p>
               <p>
                  My goal when creating this tool was to make something both easily accessible for all types of
                  players, yet still detailed and concise where all aspects of the game are covered. A similar
                  tool already existed, however it was a spreadsheet and I felt it was too overwhelming for
                  new players.
               </p>
            </div>
            <div className='tooslow-info tooslow-info-2'>
               <h3><strong>//&nbsp;&nbsp;</strong>Process</h3>
               <p>
               </p>
            </div>
            <div className='tooslow-info tooslow-info-3'>
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
         </div>
      </div>
   )
}