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
                           <img src="logos/JS_Logo_W.png" alt="javascript logo white"/>
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
                           <img src="logos/CSS_Logo_W.png" alt="css logo white"/>
                           <a href="https://www.w3.org/Style/CSS/Overview.en.html" className='technology-item-overlay' target='blank'>
                              <img src="logos/CSS_Logo.png" alt="css logo"/>
                           </a>
                        </div>
                        <div className='technology-item'>
                           <img src="logos/SASS_Logo_W.png" alt="sass logo white"/>
                           <a href="https://sass-lang.com/" className='technology-item-overlay' target='blank'>
                              <img src="logos/SASS_Logo.png" alt=""/>
                           </a>
                        </div>
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
                     </div>
                  }
                  {isBackEnd.on &&
                     <div className='technology-back-items technology-items'>
                        <div className='technology-item'>
                           <img src="logos/NodeJS_Logo_W.png" alt="nodejs logo white"/>
                           <a href="https://nodejs.org/en/" className='technology-item-overlay' target='blank'>
                              <img src="logos/NodeJS_Logo.png" alt="nodejs logo"/>
                           </a>  
                        </div>
                        <div className='technology-item'>
                           <img src="logos/MongoDB_Logo_W.png" alt="mongodb logo white"/>
                           <a href="https://www.mongodb.com/" className='technology-item-overlay' target='blank'>
                              <img src="logos/MongoDB_Logo_W.png" alt="mongodb logo"/>
                           </a>
                        </div>
                        <div className='technology-item'>
                           <img src="logos/SocketIO_Logo_W.png" alt="socketIO logo white"/>
                           <a href="https://socket.io/" className='technology-item-overlay' target='blank'>
                              <img src="logos/SocketIO_Logo_W.png" alt="socketIO logo"/>
                           </a>    
                        </div>
                     </div>
                  }
                  {isDeployment.on &&
                     <div className='technology-deployment-items technology-items'>
                        <div className='technology-item'>
                           <img src="logos/Heroku_Logo2_W.png" alt="heroku logo white"/>
                           <a href="https://www.heroku.com/" className='technology-item-overlay' target='blank'>
                              <img src="logos/Heroku_Logo2.png" alt="heroku logo"/>
                           </a>      
                        </div>
                        <div className='technology-item'>
                           <img src="logos/Github_Logo_W.png" alt="github logo"/>
                           <a href="https://github.com/" className='technology-item-overlay' target='blank'>
                              <img src="logos/Github_Logo_W.png" alt=""/>
                           </a>
                        </div>
                        <div className='technology-item'>
                           <img src="logos/Vercel_Logo_W.png" alt="vercel logo white"/>
                           <a href="https://vercel.com/" className='technology-item-overlay' target='blank'>
                              <img src="logos/Vercel_Logo_W.png" alt="vercel logo"/>
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