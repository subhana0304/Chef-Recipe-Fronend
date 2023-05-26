import React, { useContext } from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch((error) => console.log(error))
    }

    return (
        <div className='fixed-top align-items-center'>
            <Navbar collapseOnSelect expand="lg" bg="white" className='mb-5'>
                <Container className='align-items-center'>
                    <Navbar.Brand className='text-success fw-bold'>Chefs & Recipes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-semibold">
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/blog">Blog</ActiveLink>
                        </Nav>
                        <Nav className='fw-semibold align-items-center'>
                            <div className='side-nav me-2'>
                            {user ?
                                <img className='img-fluid rounded-circle' src={user.photoURL} alt="" title={user.displayName}/>
                                :
                                <ActiveLink to="/login">Login</ActiveLink>
                            }
                            </div>
                            {user ?
                                <button onClick={handleLogout} className='btn btn-success'><Link className='text-white' to="/">Log Out</Link></button>
                                :
                                <button className='btn btn-success'><Link className='text-white' to="/signUp">SignUp</Link></button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;