import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Chef = ({ chef }) => {
  const { id, name, image, experience, numRecipes, likes } = chef;
  return (
    <Col>
      <div className='d-flex border'>
          <img className='img-fluid w-50 p-3 rounded' src={image} alt="" />
        <div className="text align-items-center p-3 py-4 my-auto">
          <h3 className='text-success'>{name}</h3>
          <p>Chefs Experience: {experience}</p>
          <p>Number of Recipes: {numRecipes}</p>
          <p>People Likes: {likes}</p>
          <button className='btn btn-success text-white'><Link className='text-white' to={`/chefsRecipe/${id}`}>View Recipes</Link></button>
        </div>
      </div>
    </Col>
  );
};

export default Chef;