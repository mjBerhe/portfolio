import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {

   return (
      <section className='section section-1'>
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
               <h3>WEB DEVELOPER</h3>
            </div>
         </div>
      </section>
   )
}