import React, {useState} from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [toggleMenu, setToggleMenu ] = useState(false);

  return (
    <nav className='flex items-center justify-between p-5'>
        <div>
            Logo
        </div>

        <div className='list-none'>
                <GiHamburgerMenu onClick={()=>setToggleMenu(true)} className='md:hidden' />
            <div className= {`${toggleMenu?'block':'hidden'} md:block`}>
                        <li className='md:inline px-3'>
                            <a href='#About'>About</a>
                        </li>
                        <li className='md:inline px-3'>
                            <a href='#skills'>Skills</a>
                        </li>
                        <li className='md:inline px-3'>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li className='md:inline px-3'>
                            <a href='#contact'>Contact</a>
                        </li>   
                </div>
              
        </div>
    </nav>
  )
}

export default Navbar