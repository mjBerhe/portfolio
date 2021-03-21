import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import FOG from 'vanta/dist/vanta.fog.min';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Dps() {

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
   }

   return (
      <div className='dps-container' ref={myRef}>
         <Head>
            <title>Matthew Berhe</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
         </Head>

         <div className='dps-content-container'>
            <div className='nav'>
               <Link href='/'>
                  <a><h4>Home</h4></a>
               </Link>
            </div>
            <div className='dps-title'>
               <h2><strong>//&nbsp;&nbsp;</strong>DPS Calculator</h2>
               <div className='dps-title-links'>
                  <a href="https://osrsdps.com/" target="_blank">
                     <img src="logos/Link_Logo.png" alt=""/>
                  </a>
                  <a href="https://github.com/mjBerhe/dps-calc" target="_blank">
                     <img src="logos/Github_Logo.png" alt=""/>
                  </a>
               </div>
            </div>
            <div className='dps-screenshot'>
               <Slider {...settings}>
                  <div>
                     <img src="DPS_Calc.png" alt="DPS Calculator screenshot"/>
                  </div>
                  <div>
                     <img src="DPS_Calc.png" alt="DPS Calculator screenshot"/>
                  </div>
               </Slider>
            </div>
            <div className='dps-info dps-info-1'>
               <h3><strong>//&nbsp;&nbsp;</strong>Motive</h3>
               <p>
                  <strong>DPS Calculator</strong> is a web-based visual tool meant to help users
                  make useful calculations for the popular online video game <i>Oldschool Runescape</i>.
                  Damage per second, or DPS, is an essential metric players optimize to progress as
                  quickly as possible. Since the game’s engine doesn’t provide this metric, speculation
                  and confusion arises between players on which items/setups are better in different situations. 
               </p>
               <p>
                  My goal when creating this tool was to make something both easily accessible for all types of
                  players, yet still detailed and concise where all aspects of the game are covered. A similar
                  tool already existed, however it was a spreadsheet and I felt it was too overwhelming for
                  new players.
               </p>
            </div>
            <div className='dps-info dps-info-2'>
               <h3><strong>//&nbsp;&nbsp;</strong>Process</h3>
               <p>
                  Differentiating between local state vs global state was a main issue throughout the project.
                  The useState hook proved to be very powerful and intuitive when working on a local component,
                  however it became more tedious whenever I needed to transfer information between components.
                  The library Zustand was a perfect fix providing a global state store to use between all components.
               </p>
               <p>
                  I used MongoDB as a database to store every item in the game. My plan was to query the database when the web page loaded so that all items would be available. This led to a big problem where the initial loading time would be too long. This is when I transferred to Next.js as they provided a way to pre-render the whole page along with the database queries which reduced loading time significantly.
               </p>
               <p>
                  Working on this project made me very comfortable working with React.js + Next.js for any of my front end needs. I also learned how useful a backend database tool such as MongoDB can be for future projects.
               </p>
            </div>
            <div className='dps-info dps-info-3'>
               {/* <h3><strong>//&nbsp;&nbsp;</strong>Technologies Used</h3> */}
               <div className='technology-items'>
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
                     <a href="https://www.mongodb.com/" target='blank'>
                        <img src="logos/MongoDB_Logo2.png" alt=""/>
                     </a>
                  </div>
                  <div className='technology-item'>
                     <a href="https://vercel.com/" target='blank'>
                        <img src="logos/Vercel_Logo.png" alt=""/>
                     </a>                           
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}