import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Recipe = ({ recipe }) => {
    const { name, image } = recipe;
    return (
        <div>
            
                <Col>
                    <Card className='border border-0 p-3'>
                        <Card.Img className='rounded img-fluid' variant="top" src={image} />
                        <Card.Body>
                            <Card.Title> <h4>{name}</h4>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            
        </div>
    );
};

export default Recipe;