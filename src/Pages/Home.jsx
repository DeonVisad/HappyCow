import React from 'react';
import Header from '../Components/Header/Header';
import MEAL_1 from '../Assets/MEAL_1.jpg';
import MEAL_2 from '../Assets/MEAL_2.jpg';
import MEAL_3 from '../Assets/MEAL_3.jpg';
import Footer from '../Components/Footer/Footer';
import Recipes from '../Components/Recipes/Recipes';



const homeImages = [
  MEAL_1, MEAL_2, MEAL_3
]

const Home = () => {
  return (
    <div className='w-screen flex flex-col h-screen bg-[#F8F9FB] overflow-y-auto overflow-x-hidden'>
      <Header />
      <div className='relative flex text-center bg-black'>
        <img className='w-full h-auto relative mx-auto opacity-80' src={homeImages[Math.floor(Math.random() * homeImages.length)]} />
        <h1 className='absolute w-full text-3xl text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Discover Dairy-Free Delights: Savor the Flavor, Embrace the Freedom!</h1>
      </div>
      <div className='bg-[#F8F9FB] text-center'>
        <h1 className='text-2xl md:text-4xl font-semibold mt-8'>Popular Food</h1>
        <p className='m-8 text-md font-normal md:text-lg'>We provide a variety of food and beverage recipes that are dairy-free but you'd never know by the taste!</p>
      </div>
      <div className='bg-[#F8F9FB]'>
        <Recipes />
      </div>
      <Footer />
    </div>
  )
}

export default Home;