import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

const NavLinks = () => {
    return (
        <>
            <Link to='/'><span>Home</span></Link>
            <Link to='/'><span>Favorites <span className='text-xs italic'>(coming soon)</span></span></Link>
            <Link to='/'><span>Travel <span className='text-xs italic'>(coming soon)</span></span></Link>
            <Link to='/'><span>Account <span className='text-xs italic'>(coming soon)</span></span></Link>
        </>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpenHandler = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }


  return (
    <>
        <nav className='w-1/3 flex justify-end font-semibold text-black'>
        {/* DESKTOP NAVIGATION MD: BREAKPOINT > */}
            <div className='hidden w-full justify-between md:flex'>
                <NavLinks />
            </div>
            <div className='md:hidden'>
                <button onClick={toggleOpenHandler}>{isOpen ? "X" : <GiHamburgerMenu />}</button>
            </div>
        </nav>
        {isOpen && (
            <div className='flex basis-full flex-col items-center font-semibold text-black '>
                <NavLinks />
            </div>
        )}
    </>
  )
}

export default Navbar