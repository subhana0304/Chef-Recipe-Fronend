import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../../../firebase.config';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('');

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then((result) =>{
            const signInUser = result.user;
            console.log(signInUser);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch((error) =>{
            setError('Sorry your email or password is not match');
            form.reset();
        })
    }

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <Container className='my-5 pt-5'>
            <Container className='mx-auto mt-5 pt-5 my-5 bg-light p-4 rounded'>
                <h3>Please Login</h3>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Dont have an Account? Please<Link to='/signUp'>SignUp</Link>
                    </Form.Text>
                    <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
                <div className='text-center w-full my-3'>
                        <Button onClick={handleGoogleSignIn} variant="outline-dark" className='text-center my-2 text-black'><FaGoogle /> Login with Google</Button>
                        <Button onClick={handleGithubSignIn} variant="outline-dark" className='text-center text-black'><FaGithub /> Login with Github</Button>
                    </div>
            </Container>
        </Container>
    );
};

export default Login;