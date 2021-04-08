import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

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
      adaptiveHeight: true,
   }

   return (
      <div className='container' ref={myRef}>
         <Head>
            <title>DPS Calculator</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
            <link rel="icon" type="image/png" href="logos/Berhe_Logo3.png" />
         </Head>

         <div className='dps-content-container'>
            
            <Nav/>

            <div className='page-title dps-title'>
               <h2>DPS Calculator</h2>
               <div className='page-title-links'>
                  <div className='footer-logo'>
                     <img src="logos/Link3_Logo.png" alt="link logo"/>
                     <a href="https://osrsdps.com/" className='footer-logo-overlay' target='blank'>
                        <img src="logos/Link3_Logo2.png" alt="link logo blue"/>
                     </a>
                  </div>
                  <div className='footer-logo'>
                     <img src="logos/Github_Logo.png" alt="github logo"/>
                     <a href="https://github.com/mjBerhe/dps-calc" className='footer-logo-overlay' target='blank'>
                        <img src="logos/Github_Logo2.png" alt="github logo blue"/>
                     </a>
                  </div>
               </div>
            </div>

            <div className='page-images dps-images'>
               <Slider {...settings}>
                  <div>
                     <img src="screenshots/DPS_Calc2.PNG" alt="DPS Calculator screenshot 1"/>
                  </div>
                  <div>
                     <img src="screenshots/DPS_Stats.PNG" alt="DPS Calculator screenshot 2"/>
                  </div>
                  <div>
                     <img src="screenshots/DPS_Comparison.PNG" alt="DPS Calculator screenshot 3"/>
                  </div>
                  <div>
                     <img src="screenshots/DPS_Equipment.PNG" alt="DPS Calculator screenshot 4"/>
                  </div>
               </Slider>
            </div>

            <div className='page-info dps-info-1'>
               <div className='page-subheader'>
                  <h3>Motive</h3>
               </div>
               <p>
                  <strong>DPS Calculator</strong> is a web-based visual tool meant to help users
                  make useful calculations for the popular online video game <a href='https://oldschool.runescape.com/' target='_blank'>Oldschool Runescape</a>.
                  Damage per second, or DPS, is an essential metric players optimize to progress as
                  quickly as possible. Since the game’s engine doesn’t provide this metric, speculation
                  and confusion arises between players on which items/setups are better in different situations. 
               </p>
               <p>
                  My goal when creating this tool was to make something both easily accessible for all types of
                  players, yet still detailed and concise where many aspects of the game are covered. A similar
                  tool already existed, however it was a spreadsheet and I felt it was too overwhelming for
                  new players.
               </p>
            </div>

            <div className='dps-info-2'>
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

            <div className='page-info dps-info-3'>
               <div className='page-subheader'>
                  <h3>Progression</h3>
               </div>
               <p>
                  Differentiating between local and global state was a main issue throughout the project.
                  The <a href='https://reactjs.org/docs/hooks-state.html' target='_blank'>useState </a>
                  hook proved to be very powerful and intuitive when working on a local component,
                  however it became more tedious whenever I needed to transfer information between components.
                  The library <a href='https://github.com/pmndrs/zustand' target='_blank'>Zustand </a>
                  was a perfect fix providing a global state store to use between all components.
               </p>
               <p>
                  I used <a href='https://www.mongodb.com/' target='_blank'>MongoDB</a> as a database to store every item in the game. My plan was to query the
                  database when the web page loaded so that all items would be available. This led to
                  a big problem where the initial loading time would be too long. This is when I
                  transferred to <a href='https://nextjs.org/' target='_blank'>Next.js</a> as they provided a way to pre-render the whole page along
                  with the database queries which reduced loading time significantly.
               </p>
               <p>
                  Working on this project made me very comfortable working with React.js + Next.js
                  for any of my front end needs. I also learned how useful a backend database tool
                  such as MongoDB can be for future projects.
               </p>
            </div>

            <Footer className={'page-footer'}/>
            
         </div>
      </div>
   )
}