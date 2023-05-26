import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-light text-center p-5'>
            <div className='container row'>
                <div className="col-12 col-md-4 text-center">
                    <h3 className='mb-3 text-success fw-bold'>Chefs & Recipes</h3>
                    <p><Link to="#">PRIVACY POLICY</Link></p>
                    <p><Link to="#">DISCLOSURE</Link></p>
                    <p><Link to="#">TERMS OF USE</Link></p>
                    <p><Link to="#">ACCESSIBILITY STATEMENT</Link></p>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <h3 className='mb-3'>About</h3>
                    <p><Link to="#">NEWSLETTER</Link></p>
                    <p><Link to="/">HOME</Link></p>
                    <p><Link to="/blog">BLOG</Link></p>
                    <p><Link to="/login">SIGN IN</Link></p>
                </div><div className="col-12 col-md-4 text-center">
                    <h3 className='mb-3'>Contact</h3>
                    <p><Link to="#">FACEBOOK</Link></p>
                    <p><Link to="#">INSTAGRAM</Link></p>
                    <p><Link to="#">LINKEDIN</Link></p>
                    <p><Link to="#">TWITTER</Link></p>
                </div>
            </div>
            <p className='mt-3'><small>© 2023 Chefs & Recipes Privacy Policy Design by MB Subhana</small></p>
        </div>
    );
};

export default Footer;