import { useState } from 'react';

export default function Skills() {

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
      <section className='section section-3'>
         <div className='skills-container'>
            <div className='skills-title section-title'>
               <h2><strong>//&nbsp;&nbsp;</strong>Technologies</h2>
            </div>

            <div className='technolgies-container'>

               <div className='technologies-headings'>
                  <button onClick={handleFrontItems} className={isFrontEnd.class} >Front-End</button>
                  <button onClick={handleBackItems} className={isBackEnd.class}>Back-End</button>
                  <button onClick={handleDeployment} className={isDeployment.class}>Deployment</button>
               </div>

               <div className='technology-items-container'>
                  {isFrontEnd.on && 
                     <div className='technology-front-items technology-items'>
                        <div className='technology-item'>
                           <img src="logos/JS_Logo.png" alt=""/>
                           <h4>JavaScript</h4>
                        </div>
                        <div className='technology-item'>
                           <img src="logos/HTML_Logo.png" alt=""/>
                           {/* <h4>HTML</h4> */}
                        </div>
                        <div className='technology-item'>
                           <img src="logos/CSS_Logo.png" alt=""/>
                           {/* <h4>CSS</h4> */}
                        </div>
                        <div className='technology-item'>
                           <img src="logos/SASS_Logo.png" alt=""/>
                           {/* <h4>SASS</h4> */}
                        </div>
                        <div className='technology-item'>
                           <img src="logos/ReactJS_Logo.png" alt=""/>
                           <h4>React.js</h4>
                        </div>
                        <div className='technology-item'>
                           <img src="logos/NextJS_Logo.png" alt=""/>
                           {/* <h4>Next.js</h4> */}
                        </div>
                     </div>
                  }
                  {isBackEnd.on &&
                     <div className='technology-back-items technology-items'>
                        <div className='technology-item'>
                           <img src="logos/NodeJS_Logo.png" alt=""/>
                           <h4>Node.js</h4>
                        </div>
                        <div className='technology-item'>
                           <img src="logos/MongoDB_Logo2.png" alt=""/>
                           {/* <h4>MongoDB</h4> */}
                        </div>
                        <div className='technology-item'>
                           <img src="logos/SocketIO_Logo.png" alt=""/>
                           <h4>Socket.io</h4>
                        </div>
                     </div>
                  }
                  {isDeployment.on &&
                     <div className='technology-deployment-items technology-items'>
                        <div className='technology-item'>
                           <img src="logos/Heroku_Logo.png" alt=""/>
                           <h4>Heroku</h4>
                        </div>
                        <div className='technology-item'>
                           <img src="logos/Github_Logo.png" alt=""/>
                           <h4>Github</h4>
                        </div>
                        <div className='technology-item'>
                           <img src="logos/Vercel_Logo.png" alt=""/>
                           {/* <h4>Heroku</h4> */}
                        </div>
                     </div>
                  }
               </div>
            </div>
         </div>
      </section>
   )
}