import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {

   const [titleClass, setTitleClass] = useState('preload-title-name');

   useEffect(() => {
      setTimeout(() => {
         setTitleClass('postload-title-name');
      }, 3000);
   }, [])

   return (
      <section className='section section-1' id='section0'>
         <div className='header-container'>
            <div className='header-title'>
               <div className={titleClass}>
                  <h1>M</h1>
                  <h1>a</h1>
                  <h1>t</h1>
                  <h1>t</h1>
                  <h1>h</h1>
                  <h1>e</h1>
                  <h1>w</h1>
                  <h1>&nbsp;</h1>
                  <h1>B</h1>
                  <h1>e</h1>
                  <h1>r</h1>
                  <h1>h</h1>
                  <h1>e</h1>
               </div>
               <div className='subtitle-section'>
                  <h3>WEB DEVELOPER</h3>
                  <div className='header-logo'>
                     <img src="logos/Mail_Logo2.png" alt="mail logo"/>
                     <a href='#section3' className='header-logo-overlay'>
                        <img src="logos/Mail_Logo.png" alt="mail logo blue"/>
                     </a>
                  </div>
               </div>
               <div className='arrow-container'>
                  <a href="#section1">
                     <img src="misc/DownArrow.png" alt=""/>
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}