import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { Row } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(()=>{
        fetch('https://chefs-recipes-server-subhana0304.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[])

    return (
        <div className='container my-5'>
        <h1 className='text-success text-center'>Our Japanese Chefs</h1>
        <Row xs={1} md={2} className="g-4">
        {
            chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
        }
        </Row>
    </div>
    );
};

export default Chefs;