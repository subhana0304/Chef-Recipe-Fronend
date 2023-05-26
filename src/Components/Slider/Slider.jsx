import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block img-fluid w-100"
                    src="https://i.ibb.co/28B56gV/img1.webp"
                    alt="First slide"
                />
                <Carousel.Caption className='text-white fw-medium bg-dark bg-gradient bg-opacity-25 mt-5'>
                    <h3 className='fs-1 fw-bold text-success'>Welcome to Chefs & Recipes</h3>
                    <p>Join over 300,000 others and receive our weekly new recipe newsletter.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/28B56gV/img1.webp"
                    alt="Second slide"
                />

                <Carousel.Caption className='text-white fw-medium bg-dark bg-gradient bg-opacity-25 mt-5'>
                    <h3 className='fs-1 fw-bold text-success'>Welcome to Chefs & Recipes</h3>
                    <p>Join over 300,000 others and receive our weekly new recipe newsletter.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/28B56gV/img1.webp"
                    alt="Third slide"
                />

                <Carousel.Caption className='text-white fw-medium bg-dark bg-gradient bg-opacity-25 mt-5'>
                    <h3 className='fs-1 fw-bold text-success'>Welcome to Chefs & Recipes</h3>
                    <p>Join over 300,000 others and receive our weekly new recipe newsletter.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;