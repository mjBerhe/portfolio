export default function Footer({ className }) {

   const classState = 'footer-container ' + className;

   return (
      <div className={classState}>
         <div className='footer-logo-container'>
            <div className='footer-logo'>
               <img src="logos/GitHub_Logo.png" alt="github logo"/>
               <a href="https://github.com/mjBerhe" className='footer-logo-overlay' target='blank'>
                  <img src="logos/Github_Logo2.png" alt="github logo blue"/>
               </a>
            </div>
            <div className='footer-logo'>
               <img src="logos/LinkedIn_Logo.png" alt="linkedin logo"/>
               <a href="https://www.linkedin.com/in/matthew-berhe-a632b017a/?originalSubdomain=ca" className='footer-logo-overlay' target='blank'>
                  <img src="logos/LinkedIn_Logo2.png" alt="linkedin logo blue"/>
               </a>
            </div>
         </div>
         <h4>Created by Matthew Berhe &copy; 2021</h4>
      </div>
   )
}