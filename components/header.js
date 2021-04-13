import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {

   return (
      <section className='section section-1 section1'>
         <div className='header-container'>
            <div className='header-title'>
               <div className='title-name'>
                  <h1>M</h1>
                  <h1>a</h1>
                  <h1>t</h1>
                  <h1>t</h1>
                  <h1>h</h1>
                  <h1>e</h1>
                  <h1>w</h1>
                  <h1>&nbsp;</h1>
                  {/* <div className='title-b'><h1>B</h1></div> */}
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
                     <Link href='/contactPage'>
                        <a className='header-logo-overlay' target='blank'>
                           <img src="logos/Mail_Logo.png" alt="mail logo blue"/>
                        </a>
                     </Link>
                  </div>
               </div>
               <div className='arrow-container'>
                  <img src="misc/DownArrow.png" alt=""/>
               </div>
            </div>
         </div>
      </section>
   )
}