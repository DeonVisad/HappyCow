import React from 'react'
import {FaYoutube, FaTwitter, FaInstagram, FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full text-white text-sm bg-gradient-to-b from-black to-stone-950'>
      <div className='container mt-4 mx-auto px-20 lg:px-20 flex flex-col md:flex-row justify-between'>
        <div className='flex'>
          <p className='font-bold text-center'>Happy<span className='text-green-300'>Cow</span></p>
        </div>
        
        <div>
          <p>QUICK LINKS</p>
          <div className='flex flex-col text-start mb-4 md:mb-0'>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'>Home</a>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'>About</a>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'>Services</a>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'>Chefs</a>
          </div>
        </div>

        <div>
          <p>LEGAL</p>
          <div className='flex flex-col text-start mb-4 md:mb-0'>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'>Terms & Conditions</a>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'>License Agreement</a>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'>Privacy Policy</a>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'>Copyright information</a>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'>Cookies Policy</a>
          </div>
        </div>

        <div>
          <p>CONNECT WITH US</p>
          <div className='flex flex-col md:flex-row md:gap-4 text-lg text-start mb-4 md:mb-0'>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'><FaYoutube /></a>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'><FaTwitter /></a>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'><FaInstagram /></a>
              <a href='#' className='block md:inline-block py-2 hover:text-gray-500'><FaFacebookSquare /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer