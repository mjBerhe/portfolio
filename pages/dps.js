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
      dots: true,
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
            <div className='section-title dps-title'>
               <h2><strong>//&nbsp;&nbsp;</strong>DPS Calculator</h2>
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
               <h3><strong>//&nbsp;</strong> Description</h3>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget est  
                  placerat, aliquet elit a, tempus elit. Vestibulum finibus, eros in fringilla
                  ultrices, risus arcu semper libero, in rutrum erat sapien ac lacus. Mauris sollicitudin
                  feugiat varius. Nunc quis ultrices nulla. Cras dictum ligula ac leo rhoncus sollicitudin.
               </p>
            </div>
            <div className='dps-info dps-info-2'>
               <h3><strong>//&nbsp;</strong> Process</h3>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget est  
                  placerat, aliquet elit a, tempus elit. Vestibulum finibus, eros in fringilla
                  ultrices, risus arcu semper libero, in rutrum erat sapien ac lacus. Mauris sollicitudin
                  feugiat varius. Nunc quis ultrices nulla. Cras dictum ligula ac leo rhoncus sollicitudin.
               </p>
            </div>
         </div>
      </div>
   )
}