import { useState } from 'react';

export default function Intro() {

   const [isFrontEnd, setIsFrontEnd] = useState({
      on: true,
      class: 'button-1 button-on'
   });
   const [isBackEnd, setIsBackEnd] = useState({
      on: false,
      class: 'button-1 button-off'
   });
   const [isDeployment, setIsDeployment] = useState({
      on: false,
      class: 'button-1 button-off'
   });

   const handleFrontItems = (e) => {
      if (!isFrontEnd.on) {
         setIsFrontEnd({
            on: true,
            class: 'button-1 button-on'
         });
         setIsBackEnd({
            on: false,
            class: 'button-1 button-off'
         });
         setIsDeployment({
            on: false,
            class: 'button-1 button-off'
         });
      }
   }

   const handleBackItems = (e) => {
      if (!isBackEnd.on) {
         setIsFrontEnd({
            on: false,
            class: 'button-1 button-off'
         });
         setIsBackEnd({
            on: true,
            class: 'button-1 button-on'
         });
         setIsDeployment({
            on: false,
            class: 'button-1 button-off'
         });
      }
   }

   const handleDeployment = (e) => {
      if (!isDeployment.on) {
         setIsFrontEnd({
            on: false,
            class: 'button-1 button-off'
         });
         setIsBackEnd({
            on: false,
            class: 'button-1 button-off'
         });
         setIsDeployment({
            on: true,
            class: 'button-1 button-on'
         });
      }
   }

   return (
      <section className='section section-2'>
         <div className='intro-container'>

            <div className='about-me'>
               {/* <h3>
                  I am a self-taught developer from Toronto, Canada that enjoys creating interactive
                  websites & making complicated information more accessible. I appreciate products
                  that eliminate inconveniences.
               </h3> */}
               <h3>
                  I am a self-taught developer from Toronto, Canada that enjoys building intuitive and
                  interactive websites. I love efficiency, competition, and video games.
               </h3>
            </div>

            <div className='technolgies-container'>
               <div className='technologies-headings'>
                  <button onClick={handleFrontItems} className={isFrontEnd.class}>Front-End</button>
                  <button onClick={handleBackItems} className={isBackEnd.class}>Back-End</button>
                  <button onClick={handleDeployment} className={isDeployment.class}>Deployment</button>
               </div>

               <div className='technology-items-container'>
                  {isFrontEnd.on && 
                     <div className='technology-front-items technology-items'>
                        <div className='technology-item'>
                           <img src="logos/JS_Logo_White.png" alt="javascript logo white"/>
                           <a href="https://www.javascript.com/" className='technology-item-overlay' target='blank'>
                              <img src="logos/JS_Logo.png" alt=""/>
                           </a>
                        </div>
                        <div className='technology-item'>
                           <img src="logos/HTML_Logo_W.png" alt="html logo white"/>
                           <a href="https://html.spec.whatwg.org/multipage/" className='technology-item-overlay' target='blank'>
                              <img src="logos/HTML_Logo.png" alt="html logo"/>
                           </a>
                        </div>
                        <div className='technology-item'>
                           <a href="https://www.w3.org/Style/CSS/Overview.en.html"  target='blank'>
                              <img src="logos/CSS_Logo.png" alt=""/>
                           </a>
                        </div>
                        <div className='technology-item'>
                           <a href="https://sass-lang.com/" target='blank'>
                              <img src="logos/SASS_Logo.png" alt=""/>
                           </a>
                        </div>
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
                     </div>
                  }
                  {isBackEnd.on &&
                     <div className='technology-back-items technology-items'>
                        <div className='technology-item'>
                           <a href="https://nodejs.org/en/" target='blank'>
                              <img src="logos/NodeJS_Logo.png" alt=""/>
                           </a>  
                        </div>
                        <div className='technology-item'>
                           <a href="https://www.mongodb.com/" target='blank'>
                              <img src="logos/MongoDB_Logo2.png" alt=""/>
                           </a>
                        </div>
                        <div className='technology-item'>
                           <a href="https://socket.io/" target='blank'>
                              <img src="logos/SocketIO_Logo.png" alt=""/>
                           </a>    
                        </div>
                     </div>
                  }
                  {isDeployment.on &&
                     <div className='technology-deployment-items technology-items'>
                        <div className='technology-item'>
                           <a href="https://www.heroku.com/" target='blank'>
                              <img src="logos/Heroku_Logo.png" alt=""/>
                           </a>      
                        </div>
                        <div className='technology-item'>
                           <a href="https://github.com/" target='blank'>
                              <img src="logos/Github_Logo.png" alt=""/>
                           </a>
                        </div>
                        <div className='technology-item'>
                           <a href="https://vercel.com/" target='blank'>
                              <img src="logos/Vercel_Logo.png" alt=""/>
                           </a>                           
                        </div>
                     </div>
                  }
               </div>
               
            </div>
         </div>
      </section>
   )
}