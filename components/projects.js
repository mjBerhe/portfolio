import Link from 'next/link';

export default function Projects() {

   return (
      <section className='section section-3'>
         <div className='projects-container'>
            <div className='main-title section-title'>
               <h2>Featured Works</h2>
            </div>

            <section className='project-container project1-container'>
               <div className='project-info-container project1-info-container'>
                  <div className='project-title project1-title'>
                     <Link href='/dps'>
                        <a target='blank'>
                           <h3>DPS Calculator</h3>
                        </a>
                     </Link>
                  </div>
                  <div className='project1-subtitle'>
                     <h5>for Oldschool Runescape</h5>
                  </div>
                  <div className='project-description project1-description'>
                     <h4>A user friendly visual tool to help compare in-game scenarios to optimize performance</h4>
                  </div>
                  <div className='project-tools project1-tools'>
                     <a href="https://reactjs.org/" target='blank'>
                        <h4>React.js</h4>
                     </a>
                     <a href="https://nodejs.org/en/" target='blank'>
                        <h4>Node.js</h4>
                     </a>  
                     <a href="https://www.mongodb.com/" target='blank'>
                        <h4>MongoDB</h4>
                     </a>
                     <div className='footer-logo'>
                        <img src="logos/Github_Logo.png" alt="github logo"/>
                        <a href="https://github.com/mjBerhe/dps-calc" className='footer-logo-overlay' target='blank'>
                           <img src="logos/Github_Logo2.png" alt="github logo blue"/>
                        </a>
                     </div>
                  </div>
               </div>
               <div className='project-preview-container project1-preview-container'>
                  <img src="screenshots/DPS_Calc.png" alt="project1-preview"/>
                  <Link href='/dps'>
                     <a target="_blank" className='project-preview-overlay'>
                        <h3 className='project1-preview-text'>Check Me Out!</h3>
                     </a>
                  </Link>
               </div>
            </section>

            <section className='project-container project2-container'>
               <div className='project-info-container project2-info-container'>
                  <div className='project-title project2-title'>
                     <Link href='/2slow'>
                        <a target='blank'>
                           <h3>2Slow</h3>
                           <h5>BETA</h5>
                        </a>
                     </Link>
                  </div>
                  <div className='project2-subtitle'>
                     <h5>Competitive Math Game</h5>
                  </div>
                  <div className='project-description project2-description'>
                     <h4>Fast-paced competitive math game where speed and accuracy decide the victor</h4>
                  </div>
                  <div className='project-tools project2-tools'>
                     <div className='footer-logo'>
                        <img src="logos/Github_Logo.png" alt="github logo"/>
                        <a href="https://github.com/mjBerhe/2S" className='footer-logo-overlay' target='blank'>
                           <img src="logos/Github_Logo2.png" alt="github logo blue"/>
                        </a>
                     </div>
                     <a href="https://socket.io/" target='blank'>
                        <h4>Socket.io</h4>
                     </a> 
                     <a href="https://reactjs.org/" target='blank'>
                        <h4>React.js</h4>
                     </a>
                     <a href="https://nodejs.org/en/" target='blank'>
                        <h4>Node.js</h4>
                     </a>  
                  </div>
               </div>
               <div className='project-preview-container project2-preview-container'>
                  <img src="screenshots/2Slow_Screenshot.png" alt="project2-preview"/>
                  <Link href='/2slow'>
                     <a target="_blank" className='project-preview-overlay'>
                        <h3 className='project2-preview-text'>Click Me Please</h3>
                     </a>
                  </Link>
               </div>
            </section>

            <section className='project-container project3-container'>
               <div className='project-info-container project3-info-container'>
                  <div className='project-title project3-title'>
                     <Link href='/portfolio'>
                        <a target='blank'>
                           <h3>Portfolio</h3>
                        </a>
                     </Link>
                  </div>
                  <div className='project3-subtitle'>
                     <h5>Personal Website</h5>
                  </div>
                  <div className='project-description project3-description'>
                     <h4>Web-based portfolio to showcase featured projects and skills</h4>
                  </div>
                  <div className='project-tools project3-tools'>
                     <a href="https://reactjs.org/" target='blank'>
                        <h4>React.js</h4>
                     </a>
                     <a href="https://nextjs.org/" target='blank'>
                        <h4>Next.js</h4>
                     </a>
                     <a href="https://sass-lang.com/" target='blank'>
                        <h4>SASS</h4>
                     </a>
                     <div className='footer-logo'>
                        <img src="logos/Github_Logo.png" alt="github logo"/>
                        <a href="https://github.com/mjBerhe/portfolio" className='footer-logo-overlay' target='blank'>
                           <img src="logos/Github_Logo2.png" alt="github logo blue"/>
                        </a>
                     </div>
                  </div>
               </div>
               <div className='project-preview-container project3-preview-container'>
                  <img src="screenshots/Portfolio_1.png" alt="project3-preview"/>
                  <Link href='/portfolio'>
                     <a target="_blank" className='project-preview-overlay'>
                        <h3 className='project3-preview-text'>This Looks Familiar</h3>
                     </a>
                  </Link>
               </div>
            </section>
         </div>
      </section>
   )
}