import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';

import FOG from 'vanta/dist/vanta.fog.min';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio() {

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

         <div className='portfolio-content-container'>
            <div className='nav'>
               <Link href='/'>
                  <a><h4>Home</h4></a>
               </Link>
            </div>

            <div className='portfolio-title'>
               <h2>Portfolio</h2>
               <div className='portfolio-title-links'>
                  <div className='footer-logo'>
                     <img src="logos/Link2_Logo.png" alt="link logo"/>
                     <a href="https://osrsdps.com/" className='footer-logo-overlay' target='blank'>
                        <img src="logos/Link2_Logo2.png" alt="link logo blue"/>
                     </a>
                  </div>
                  <div className='footer-logo'>
                     <img src="logos/GitHub_Logo.png" alt="github logo"/>
                     <a href="https://github.com/mjBerhe/dps-calc" className='footer-logo-overlay' target='blank'>
                        <img src="logos/Github_Logo2.png" alt="github logo blue"/>
                     </a>
                  </div>
               </div>
            </div>

            <div className='portfolio-images'>
               <Slider {...settings}>
                  <div>
                     <img src="screenshots/Portfolio_1.png" alt="Portfolio screenshot"/>
                  </div>
                  <div>
                     <img src="screenshots/Portfolio_2.png" alt="Portfolio screenshot"/>
                  </div>
                  <div>
                     <img src="screenshots/Portfolio_3.png" alt="Portfolio screenshot"/>
                  </div>
                  <div>
                     <img src="screenshots/Portfolio_4.png" alt="Portfolio screenshot"/>
                  </div>
               </Slider>
            </div>

            <div className='portfolio-info portfolio-info-1'>
               <div className='portfolio-subheader'>
                  <h3>Motive</h3>
               </div>
               <p>
                  I was very excited when brainstorming for my web portfolio as I had many ideas I wanted to
                   experiment with. I took plenty of consideration into the presentation as I believe the showcasing
                  aspect is as valuable as the work itself. 
               </p>
            </div>

            <div className='portfolio-info portfolio-info-2'>
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
                     <a href="https://vercel.com/" target='blank'>
                        <img src="logos/Vercel_Logo.png" alt=""/>
                     </a>                           
                  </div>
               </div>
            </div>

            <div className='portfolio-info portfolio-info-3'>
               <div className='portfolio-subheader'>
                  <h3>Process</h3>
               </div>
               <p>
                  Working on my portfolio gave me plenty of time to explore different libraries that
                  I’ve wanted to implement on a website. Although I enjoy learning new ideas, I find
                  it pointless to reinvent existing functional tools. I had a chance to use several
                  Javascript libraries and I plan to continue using them for future projects.
               </p>
               <p>
                  CSS took a significant portion of time with my portfolio, however this was very
                  valuable as I learned many new tricks and strategies. Prioritizing responsive
                  design from the beginning was critical and I plan to have a similar approach
                  with all my future projects. I was also able to learn more about animations
                  and was happy with the role they played on this project.
               </p>
            </div>

            <Footer className={'portfolio-footer'}/>
            
         </div>
      </div>
   )
}