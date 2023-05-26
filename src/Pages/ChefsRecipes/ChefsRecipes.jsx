import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefRecipe from '../../Components/ChefRecipe/ChefRecipe';

const ChefsRecipes = () => {
    const chef = useLoaderData();
    // console.log(chef);
    const {id, name, image, experience, numRecipes, likes, recipes, description} = chef;
    // console.log(recipes);
    return (
        <div className='my-5 pt-5 container'>
            <div className='d-flex border'>
            <img className='img-fluid w-25 p-3 rounded' src={image} alt="" />
            <div className="text align-items-center p-3 py-4 my-auto">
                <h3 className='text-success'>{name}</h3>
                <p className='mt-2'>{description}</p>
                <p>Chefs Experience: {experience}</p>
                <p>Number of Recipes: {numRecipes}</p>
                <p>People Likes: {likes}</p>
            </div>
          </div>
          <div className='container my-5'>
            <h1 className='text-success text-center mb-3'>{name} Recipe</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                recipes.map(recipe => <ChefRecipe key={recipe._id}  recipe={recipe}></ChefRecipe>)
            }
            </Row>
        </div>
        </div>
    );
};

export default ChefsRecipes;