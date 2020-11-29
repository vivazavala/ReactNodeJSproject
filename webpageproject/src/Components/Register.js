import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Button, MenuItem, Dropdown, FormControl, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import UserContext from "../context/userContext";
import ErrorNotice from "../misc/ErrorNotice";

function Register() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [error, setError] = useState();
    const [ adminID, setAdminChange ] = useState(); 

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const newUser = { email, password, passwordCheck, adminID };
            await axios.post("http://localhost:3001/users/Register", newUser);
            const loginResponse = await axios.post("http://localhost:3001/users/login", {
                email, password
            });
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

            <div style={{
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
                    height: '63',
                    width: '40%',
                    borderRadius: '15px',
                    backgroundColor: '#ffffff'
                }}>
                    <br />
                    <h1 align="middle" style={{ color: 'grey' }}>Register</h1>
                    <br />
                    <br />

                    <Form.Group controlId="formBasicEmail" style={{ margin: "10px" }} >
                        <Form.Label> Enter email address</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                        <Form.Label>Confrim Password</Form.Label>
                        <Form.Control onChange={e => setPasswordCheck(e.target.value)} type="Confirmpassword" placeholder=" Confirm Password" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="Role" style={{ margin: "10px" }}>
                        <Form.Label>Select Admin Type</Form.Label>
                        <Form.Control onChange={e => setAdminChange(e.target.value)} as="select" custom>
                            <option value="1">Admin</option>
                            <option value="2">Finance</option>
                            <option value="3">Sales</option>
                            <option value="4">HR</option>
                            <option value="5">Technology</option>
                        </Form.Control>
                    </Form.Group>

                    <br />
                    <Form.Group controlId="Register" style={{ margin: "10px", backgroundColor: 'grey', borderRadius: '15px', }}>
                        <Button align="middle" variant="secondary" type="submit" block >
                            Register
                        </Button>
                    </Form.Group >

                    <br />

                </Form>
            </div>

        );
    
}

export default Register;