import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
   return (
      <section className='section section-1'>
         <div className='header-container'>
            {/* <div className='nav'>
               <Link href='/'>
                  <a><h4>Home</h4></a>
               </Link>
            </div> */}
            <div className='header-title'>
               <h1>Matthew Berhe</h1>
               <h3><strong>//&nbsp;&nbsp;</strong>WEB DEVELOPER</h3>
            </div> 
         </div>
      </section>
   )
}