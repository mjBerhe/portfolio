import { useState } from 'react';

export default function Skills() {

   const [isFrontEnd, setIsFrontEnd] = useState(true);
   const [isBackEnd, setIsBackEnd] = useState(false);
   const [isDeployment, setIsDeployment] = useState(false);

   const handleFrontItems = (e) => {
      if (!isFrontEnd) {
         setIsFrontEnd(true);
         setIsBackEnd(false);
         setIsDeployment(false);
      }
   }

   const handleBackItems = (e) => {
      if (!isBackEnd) {
         setIsFrontEnd(false);
         setIsBackEnd(true);
         setIsDeployment(false);
      }
   }

   const handleDeployment = (e) => {
      if (!isDeployment) {
         setIsFrontEnd(false);
         setIsBackEnd(false);
         setIsDeployment(true);
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
                  <button onClick={handleFrontItems}>Front-End</button>
                  <button onClick={handleBackItems}>Back-End</button>
                  <button onClick={handleDeployment}>Deployment</button>
               </div>

               <div className='technology-items'>
                  {isFrontEnd && 
                     <div className='technology-front-items technology-items'>
                        <div className='technology-item'>
                           <img src="/JS_Logo.png" alt=""/>
                           <h4>JavaScript</h4>
                        </div>
                        <div className='technology-item'>
                           <img src="/HTML_Logo.png" alt=""/>
                           {/* <h4>HTML</h4> */}
                        </div>
                        <div className='technology-item'>
                           <img src="/CSS_Logo.png" alt=""/>
                           {/* <h4>CSS</h4> */}
                        </div>
                        <div className='technology-item'>
                           <img src="/SASS_Logo.png" alt=""/>
                           {/* <h4>SASS</h4> */}
                        </div>
                        <div className='technology-item'>
                           <img src="/ReactJS_Logo.png" alt=""/>
                           <h4>React.js</h4>
                        </div>
                        <div className='technology-item'>
                           <img src="/NextJS_Logo.png" alt=""/>
                           {/* <h4>Next.js</h4> */}
                        </div>
                     </div>
                  }
                  {isBackEnd &&
                     <div className='technology-back-items technology-items'>
                        <div className='technology-item'>
                           <img src="/NodeJS_Logo.png" alt=""/>
                           <h4>Node.js</h4>
                        </div>
                        <div className='technology-item'>
                           <img src="/MongoDB_Logo2.png" alt=""/>
                           {/* <h4>MongoDB</h4> */}
                        </div>
                        <div className='technology-item'>
                           <img src="/SocketIO_Logo.png" alt=""/>
                           <h4>Socket.io</h4>
                        </div>
                     </div>
                  }
                  {isDeployment &&
                     <div className='technology-deployment-items technology-items'>
                        <div className='technology-item'>
                           <img src="/Heroku_Logo.png" alt=""/>
                           <h4>Heroku</h4>
                        </div>
                        <div className='technology-item'>
                           <img src="/Github_Logo.png" alt=""/>
                           <h4>Github</h4>
                        </div>
                        <div className='technology-item'>
                           <img src="/Vercel_Logo.png" alt=""/>
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