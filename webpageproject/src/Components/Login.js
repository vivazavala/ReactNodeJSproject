import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import UserContext from "../context/userContext";
import ErrorNotice from "../misc/ErrorNotice";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password };
            const loginResponse = await axios.post("http://localhost:3001/users/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg)
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
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}

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
                <br />

                <Form.Group controlId="formBasicEmail" style={{ margin: "10px" }}>
                    <Form.Label style={{ color: 'black' }}>Email address</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <br /><br />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                    <Form.Label style={{ color: 'black' }}>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
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
