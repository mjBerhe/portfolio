import Link from 'next/link';

export default function Nav() {
   return (
      <div className='nav'>
         <Link href='/'>
            <a>
               <img src="logos/Berhe_Logo2.png" alt=""/>
            </a>
         </Link>
         <Link href='/#section3'>
            <a className='contact-link' target='_blank'>
               <h4>Contact Me</h4>
            </a>
         </Link>
      </div>
   )
}