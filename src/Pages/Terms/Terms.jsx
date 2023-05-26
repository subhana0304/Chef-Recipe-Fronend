import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Terms = () => {
    return (
        <div className='container py-5 mt-5'>
            <h1>terms</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit aspernatur maiores ipsam vitae minima doloremque velit ex ab voluptate sapiente, quae explicabo, minus dolore modi, praesentium deleniti doloribus perspiciatis?</p>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odio?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odio?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odio?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odio?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odio?</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit aspernatur maiores ipsam vitae minima doloremque velit ex ab voluptate sapiente, quae explicabo, minus dolore modi, praesentium deleniti doloribus perspiciatis?</p>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odio?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odio?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odio?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odio?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odio?</li>
            </ul>
            <button className='btn btn-success'><Link className='text-white align-items-center' to='/signUp'><FaArrowLeft/> Go Back SignUp</Link></button>
        </div>
    );
};

export default Terms;