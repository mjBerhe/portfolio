import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
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
            <title>Portfolio</title>
            <link rel="icon" type="image/png" href="logos/Berhe_Logo3.png" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
         </Head>

         <div className='portfolio-content-container'>

            <Nav/>

            <div className='page-title portfolio-title'>
               <h2>Portfolio</h2>
               <div className='page-title-links'>
                  <button className='page-button'>
                     <a href="https://www.matthewberhe.com" target='_blank'>
                        Visit Website
                     </a>
                  </button>
                  {/* <div className='footer-logo'>
                     <img src="logos/Link3_Logo.png" alt="link logo"/>
                     <a href="https://www.matthewberhe.com" className='footer-logo-overlay' target='blank'>
                        <img src="logos/Link3_Logo2.png" alt="link logo blue"/>
                     </a>
                  </div> */}
                  <div className='footer-logo'>
                     <img src="logos/Github_Logo_W.png" alt="github logo"/>
                     <a href="https://github.com/mjBerhe/portfolio" className='footer-logo-overlay' target='blank'>
                        <img src="logos/Github_Logo2.png" alt="github logo blue"/>
                     </a>
                  </div>
               </div>
            </div>

            <div className='page-images portfolio-images'>
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

            <div className='page-info portfolio-info-1'>
               <div className='page-subheader'>
                  <h3>Motive</h3>
               </div>
               <p>
                  My goal was to display my featured projects in a way that is both informative
                  and enjoyable, as I believe the showcasing aspect is as valuable as the work itself.
               </p>
            </div>

            <div className='portfolio-info portfolio-info-2'>
               <div className='technology-items'>
                  <div className='technology-item'>
                     <img src="logos/ReactJS_Logo_W.png" alt="react logo white"/>
                     <a href="https://reactjs.org/" className='technology-item-overlay' target='blank'>
                        <img src="logos/ReactJS_Logo.png" alt="react logo"/>
                     </a>                         
                  </div>
                  <div className='technology-item'>
                     <img src="logos/NextJS_Logo_W.png" alt="nextjs logo white"/>
                     <a href="https://nextjs.org/" className='technology-item-overlay' target='blank'>
                        <img src="logos/NextJS_Logo_W.png" alt="nextjs logo"/>
                     </a>
                  </div>
                  <div className='technology-item'>
                     <img src="logos/SASS_Logo_W.png" alt="sass logo white"/>
                     <a href="https://sass-lang.com/" className='technology-item-overlay' target='blank'>
                        <img src="logos/SASS_Logo.png" alt=""/>
                     </a>
                  </div>
                  <div className='technology-item'>
                     <img src="logos/Vercel_Logo_W.png" alt="vercel logo white"/>
                     <a href="https://vercel.com/" className='technology-item-overlay' target='blank'>
                        <img src="logos/Vercel_Logo_W.png" alt="vercel logo"/>
                     </a>                           
                  </div>
               </div>
            </div>

            <div className='page-info portfolio-info-3'>
               <div className='page-subheader'>
                  <h3>Process</h3>
               </div>
               <p>
                  Working on my portfolio gave me plenty of time to explore different libraries that
                  I???ve wanted to implement on a website. Although I enjoy learning new ideas, I find
                  it pointless to reinvent existing functional tools. I had a chance to use several
                  Javascript libraries and I plan to continue using them for future projects.
               </p>
               <p>
                  <a href='https://alvarotrigo.com/fullPage/' target='_blank'>Fullpage.js</a> provided the functionality to scroll one full page at a time. My title
                  page didn???t have its initial look when you would scroll down, so I wanted the first
                  scroll to move all the way down to the next section. Fullpage.js provided the
                  solution and I used this scroll design throughout the website. <a href='https://kenwheeler.github.io/slick/' target='_blank'>Slick</a> allowed me
                  to display my images in a carousel type format. I found this very appealing
                  and I plan to use this for future projects.
               </p>
               <p>
                  CSS took a significant portion of time with my portfolio. It proved to be very
                  valuable as I learned many new tricks and strategies. Prioritizing responsive
                  design from the beginning was critical and I plan to have a similar approach
                  with all my future projects. I was also able to learn more about animations
                  and was very satisfied with how they enhanced the user experience.
               </p>
            </div>

            <Footer className={'page-footer'}/>
            
         </div>
      </div>
   )
}