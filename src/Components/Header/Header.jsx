import React from 'react'
import Navbar from '../Navbar/Navbar'
import {SiHappycow} from 'react-icons/si';

const Header = () => {
  return (
    <header className='bg-white w-full sticky top-0 z-[20] mx-auto flex items-center justify-between p-8 flex-wrap'>
        <div className='flex items-center'>
            <span className='w-16 h-16 text-5xl'><SiHappycow /></span>
            <span className='items-center'>Happy Cow</span>
        </div>
        <Navbar/>
    </header>
  )
}

export default Header