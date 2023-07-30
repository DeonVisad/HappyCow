import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
    const {image, label, url, healthLabels, cuisineType, mealType, uri} = recipe?.recipe;

    const id = uri?.split('#')[1];
    
  return (
    <Link to={`./recipes/${id}`} className='w-[300px] md:w-[200px]'>
        <div className='bg-_gradient shadow w-full rounded-lg'>
            <img className='rounded-lg h-[200px] md:h-[150px] w-full' src={image} alt={label} />
            <div className='p-3'>
                <p className='font-semibold'>{label}</p>
                <div className='mt-2'>
                    <span className='px-2 py-1 text-[12px] capitalize bg-[] shadow-xl rounded-full mr-3 text-green-500'> {cuisineType}</span>
                    <span className='px-2 py-1 text-[12px] capitalize bg-[] shadow-xl rounded-full text-green-500'> {mealType}</span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default RecipeCard