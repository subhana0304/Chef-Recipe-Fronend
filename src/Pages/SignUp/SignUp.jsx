import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../../../firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';



const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const SignUp = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        if (password < 6) {
            setError('Please include minimum 6 length');
        }

        createUser(email, password, photo, name)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                navigate('/');
                updateUserData(result.user, name, photo)
            })
            .catch((error) => {
                setError('invalid email or password');
                form.reset()
            })

        const updateUserData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log('user name photo updated');
                })
                .catch(error => {
                    setError(error.message)
                })
        }
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                navigate('/');
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleGithubSignUp = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                navigate('/');
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='my-5 pt-2'>
            <Container className='mx-auto  my-5 pt-5 bg-light p-4 rounded'>
                <h3>Please Register</h3>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' required placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' required placeholder="photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleAccepted}
                            type="checkbox"
                            name="accept"
                            label={<>Accept <Link to="/terms">Terms & Condition</Link></>} />
                    </Form.Group>
                    <Button variant="primary" disabled={!accepted} type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Already have an Account? Please <Link to='/login'>Login</Link>
                    </Form.Text>
                    <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
                <div className='text-center w-full my-3'>
                    <Button onClick={handleGoogleSignUp} variant="outline-dark" className='text-center my-2 text-black'><FaGoogle /> Login with Google</Button>
                    <Button onClick={handleGithubSignUp} variant="outline-dark" className='text-center text-black'><FaGithub /> Login with Github</Button>

                </div>
            </Container>
        </div>
    );
};

export default SignUp;