import Link from 'next/link';

export default function Nav() {
   return (
      <div className='nav'>
         <Link href='/'>
            <a>
               <img src="logos/Berhe_Logo2.png" alt=""/>
            </a>
         </Link>
         <Link href='/contactPage'>
            <a className='contact-link'>
               <h4>Contact Me</h4>
            </a>
         </Link>
      </div>
   )
}