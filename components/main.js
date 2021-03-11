export default function Main() {

   return (
      <section className='section section-2'>
         <div className='main-container'>
            <div className='main-title section-title'>
               <h2><strong>//&nbsp;&nbsp;</strong>Featured Works</h2>
            </div>

            <section className='project-container project1-container'>
               <div className='project-info-container project1-info-container'>
                  <div className='project1-title'>
                     <h3>DPS Calculator</h3>
                  </div>
                  <div className='project1-subtitle'>
                     <h5>for Oldschool Runescape</h5>
                  </div>
                  <div className='project1-description'>
                     <h4>A user friendly visual tool to help compare in-game scenarios to optimize performance</h4>
                  </div>
                  <div className='project1-tools'>
                     <h4>React.js</h4>
                     <h4>Node.js</h4>
                     <h4>MongoDB</h4>
                  </div>
               </div>
               <div className='project1-preview-container'>
                  <img src="DPS_Calc.png" alt="project1-preview"/>
                  <a href="https://osrsdps.com/" target="_blank" className='project1-preview-overlay'>
                     <h3 className='project1-preview-text'>Click Me</h3>
                  </a>
               </div>
            </section>

            <section className='project-container project2-container'>
               <div className='project-info-container project2-info-container'>
                  <div className='project2-title'>
                     <h3>2Slow</h3>
                  </div>
                  <div className='project2-subtitle'>
                     <h5>Competitive Math Game</h5>
                  </div>
                  <div className='project2-description'>
                     <h4>A user friendly visual tool to help compare in-game scenarios to optimize performance</h4>
                  </div>
                  <div className='project2-tools'>
                     <h4>Socket.io</h4>
                     <h4>React.js</h4>
                     <h4>Node.js</h4>
                  </div>
               </div>
               <div className='project2-preview-container'>
                  <img src="2Slow_Screenshot.png" alt="project2-preview"/>
                  <a href="https://osrsdps.com/" target="_blank" className='project2-preview-overlay'>
                     <h3 className='project2-preview-text'>Click Me</h3>
                  </a>
               </div>
            </section>
         </div>
      </section>
   )
}