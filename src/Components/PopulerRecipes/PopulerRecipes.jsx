import React, { useEffect, useState } from 'react';
import PopulerRecipe from '../PopulerRecipe/PopulerRecipe';
import { Row } from 'react-bootstrap';

const PopulerRecipes = () => {
    const [foods, setFoods] = useState([]);
    useEffect( ()=>{
        fetch('https://chefs-recipes-server-subhana0304.vercel.app/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return (
        <div className='container my-5'>
            <h1 className='text-success text-center'>Most Popular Recipe</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                foods.map(food => <PopulerRecipe key={food.id} food={food}></PopulerRecipe>)
            }
            </Row>
        </div>
    );
};

export default PopulerRecipes;