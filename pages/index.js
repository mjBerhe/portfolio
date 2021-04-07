import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

import FOG from 'vanta/dist/vanta.fog.min';
import ReactFullpage from '@fullpage/react-fullpage';

import Header from '../components/header';
import Projects from '../components/projects';
import Intro from '../components/intro';
import Contact from '../components/contact';

export default function Homepage() {

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

   return (
      <div className='container'>
         <Head>
            <title>Matthew Berhe</title>
            <link rel="icon" type="image/png" href="logos/Berhe_Logo3.png" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
         </Head>

         <ReactFullpage
            scrollOverflow={true}
            scrollOverflowOptions={true}
            render={() => (
               <ReactFullpage.Wrapper>
                  <div className='homepage-container' ref={myRef}>
                     <Header/> 
                     <Intro/>
                     <Projects/>
                     <Contact/>
                  </div>
               </ReactFullpage.Wrapper>
            )}
         />

         <div>
            <h2>Test</h2>
         </div>

         <div className='footer'>
            {/* <h1>This is the footer</h1> */}
         </div>
      </div>
  );
}
