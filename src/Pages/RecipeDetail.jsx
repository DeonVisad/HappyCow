import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { fetchRecipe, fetchRecipes } from '../utils';
import Loading from '../Components/Loading/Loading';
import Header from '../Components/Header/Header';
import RecipeCard from '../Components/RecipeCard/RecipeCard';

const RecipeDetail = () => {

    const [recipe, setRecipe] = useState(null);
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(false);

    const {id} = useParams();

    const getRecipe = async (id) => {
        try {
            setLoading(true);

            const data = await fetchRecipe(id);

            setRecipe(data);

            const recommend = await fetchRecipes({query: recipe?.label, limit: 2})

            setRecipes(recommend);

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    useEffect(()=> {
        getRecipe(id)
    },[id])

    if(loading) {
        return (
            <div className='w-full h-[100vh] flex items-center justify-center'>
                <Loading />
            </div>
        );
    }

  return (
    <div className='w-full'>
        <Header />
        <div className='w-full px-4 lg:px-20 pt-5'>
            {/* image container */}
            <div className='flex justify-center mb-5'>
                <h3>{recipe?.title}</h3>
                <img src={recipe?.image} />
            </div>
            <div className='flex gap-10 items-center justify-center px-4'>
                <div className='flex flex-col justify-between'>
                    <span className='text-black text-center border border-gray-500 py-1 px-2 rounded-full mb-2'>{recipe?.calories.toFixed(2)}</span>
                    <p className='text-black text-[12px] md:text-md'>CALORIES</p>
                </div>

                <div className='flex flex-col justify-between'>
                    <span className='text-black text-center border border-gray-500 py-1 px-2 rounded-full mb-2'>{recipe?.yield}</span>
                    <p className='text-black text-[12px] md:text-md'>SERVINGS</p>
                </div>

                <div className='flex flex-col justify-between'>
                    <span className='text-black text-center border border-gray-500 py-1 px-2 rounded-full mb-2'>{recipe?.totalTime}</span>
                    <p className='text-black text-[12px] md:text-md'>TOTAL TIME</p>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row gap-8 py-20 px-4 md:px-10'>
                {/* LEFT */}
                <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-black font-bold text-2xl underline'>Ingredients</p>
                        {recipe?.ingredientLines?.map((ingredient, index) => {
                            return (
                                <p key={index} className='text-black flex gap-2'>
                                    {ingredient}
                                </p>
                            )
                        })}
                    </div>
                    <div className='flex flex-col gap-3 mt-20'>
                        <p>Health Labels</p>
                        <div className='flex flex-wrap gap-4'>
                            {recipe?.healthLabels.map((item, index) => {
                                return (
                                    <p className='text-white flex gap-2 bg-black px-4 py-1 rounded-full' key={index}>
                                        {item}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='w-full md:w-2/4 pr-1'>
                    <div className='display flex flex-col gap-3'>
                        <p className='text-2xl font-bold'>Instructions</p>
                        <p className='italic'>Visit the link below for more information and instructions on this recipe:</p>
                        <p className='font-semibold'><a href={recipe?.url} target='_blank'>{recipe?.url}</a></p>
                        <div className='flex flex-wrap gap-3'>
                        {
                                    recipes?.map((item, index) => {
                                        if(item.recipe.healthLabels.includes('Dairy-Free')){
                                          return  <RecipeCard 
                                            key={index}
                                            recipe={item}
                                            className=''
                                        />
                                        }})
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecipeDetail