import React from 'react';
import { Card, Col } from 'react-bootstrap';

const PopulerRecipe = ({food}) => {
    const {image, name, chefName, chefImage, description} = food;
    return (
      <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> 
            <h3 className='text-success'>{name}</h3>
          </Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <div className='d-flex align-items-center'>
            <img className='w-25 img-fluid rounded-circle p-2' src={chefImage} alt="" />
            <h6>{chefName}</h6>
          </div>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default PopulerRecipe;