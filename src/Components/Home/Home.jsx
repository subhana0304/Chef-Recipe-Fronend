import React from 'react';
import Slider from '../Slider/Slider';
import PopulerRecipes from '../PopulerRecipes/PopulerRecipes';
import Recipes from '../Recipes/Recipes';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Chefs></Chefs>
            <PopulerRecipes></PopulerRecipes>
            <Recipes></Recipes>
        </div>
    );
};

export default Home;