import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { BsFillHeartFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';

const ChefRecipe = ({ recipe }) => {
    const { image, name, description } = recipe;
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
        toast("Your like added!");
    };
    return (
        <Col>
            <Card>
                <LazyLoad offset={300}>
                <Card.Img variant="top" src={image} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>
                        <h3 className='text-success'>{name}</h3>
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className='mt-2 d-flex justify-content-between'>
                        <Rating style={{ maxWidth: 100 }} value='5' readOnly />

                        <ToastContainer />
                        <button className='btn' onClick={handleClick}><BsFillHeartFill disabled={isClicked} className={isClicked ? 'text-danger' : 'text-black'} /></button>
                        
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefRecipe;