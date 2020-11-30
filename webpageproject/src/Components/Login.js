import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, render } from 'react-dom';
import axios from 'axios'
import ErrorNotice from './ErrorNotice';

function Login() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, pass };
            //    localStorage.setItem('email', email);
            const loginRes = await axios.post('http://localhost:9000/Home/login', loginUser);

            setUserData({
                user: loginRes.data.user,  //loginRes.data,      
            });
            //  console.log(loginRes.data.user);
            localStorage.setItem('user', loginRes.data.user);
            history.push("/Dashboard");

        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (

        <div className="login" style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${'/img/webpageBG.jpg'})`,
            backgroundSize: 'cover',
            height: '100%',
            width: '100%'
        }}>

            <Form onSubmit={submit} style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                height: '63%',
                width: '40%',
                borderRadius: '15px',
                backgroundColor: '#ffffff',

            }}>
                <br />
                <h1 align="middle" style={{
                    color: 'grey',
                }}>Sign In</h1>

                {error && (
                    <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}

                <br />

                <Form.Group controlId="formBasicEmail" style={{ margin: "10px" }}>
                    <Form.Label style={{ color: 'black' }}>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <br /><br />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                    <Form.Label style={{ color: 'black' }}>Password</Form.Label>
                    <Form.Control onChange={(e) => setPass(e.target.value)} type="pass" placeholder="Password" />
                </Form.Group>
                <br />
                <Form.Group controlId="RegisterForgot" style={{ margin: "10px" }}>
                    <Button align="middle" variant="secondary" type="submit" block>
                        Login
                            </Button>
                    <a href='/Register' style={{ color: 'blue' }}>Register</a>
                </Form.Group>
            </Form>
        </div>

    );
}

export default Login;