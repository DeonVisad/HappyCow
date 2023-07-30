import React, {useEffect, useState} from 'react';
import Loading from '../Loading/Loading';
import Searchbar from '../Searchbar/Searchbar';
import RecipeCard from '../RecipeCard/RecipeCard';
import { fetchRecipes } from '../../utils';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [limit, setLimit] = useState(30);
    const [query, setQuery] = useState('alfredo');
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const fetchRecipe = async () => {
        try {
            const data = await fetchRecipes({query, limit});
            setRecipes(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        fetchRecipe();
    }

    const showMore = () => {
        setLimit(prev => prev + 10);
        fetchRecipe();
    }

    const showLess = () => {
        if(limit <= 10) {
            setLimit(limit);
        } else {
            setLimit(prev => prev - 10);
        }
        fetchRecipe();
    }

    useEffect(() => {
        setLoading(true);

        fetchRecipe();
    }, [])

    if(loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <div className='w-full'>
                <div className='w-full flex items-center justify-center m-4  md:mx-10'>
                    <form className='w-3/4 md:w-2/4' onSubmit={handleSearch}>
                        <Searchbar 
                        placeholder='eg. Dairy-free, Vegan, Ice Cream, Not a cow...' 
                        handleInputChange={handleChange}
                        />
                    </form>
                </div>

                { 
                    recipes?.length > 0 ? (
                        <>
                            <div className='w-full flex flex-wrap justify-center gap-10 lg:px-10 py-10'>
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
                            <div className='flex w-full items-center justify-center py-10'>
                            <button className='bg-black text-gray-300 p-5 rounded-md hover:text-black hover:bg-[#F8F9FB]' onClick={showMore}>Show More</button>
                            </div>
                        </>
                    ) : <div className='text-center'><p>Sorry, no recipes were found!</p></div>
                }
                
            </div>
        )
    }

}

export default Recipes