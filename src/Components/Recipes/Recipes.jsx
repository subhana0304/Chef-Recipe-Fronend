import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://chefs-recipes-server-subhana0304.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    return (
        <div className='container my-5'>
            <h1 className='text-success text-center'>All Recipes</h1>
            <Row  className="g-4 d-">
                <Slider {...settings}>
                    {
                        recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe}></Recipe>)
                    }
                </Slider>
            </Row>
        </div>
    );
};

export default Recipes;