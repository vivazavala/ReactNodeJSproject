import React, { useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, MenuItem, Dropdown, FormControl, DropdownButton } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import axios from 'axios'
import ErrorNotice from './ErrorNotice';

    function Register(){
    const[email, setEmail]= useState();
    const[pass, setPass]= useState();
    const[passCheck, setPassCheck]=useState(); 
    const [adminId, setAdmin] = useState();
    const [error, setError] = useState();
        const { setUserData } = useContext(UserContext);
        const history = useHistory();

        const onSubmit = async (e) => {
            e.preventDefault();
            try {

                const newUser = { email, pass, passCheck, adminId };

                await axios.post('http://localhost:9000/Home/Register', newUser);
                const loginRes = await axios.post('http://localhost:9000/Home/login', {
                    email,
                    pass
                });
                setUserData({
                    user: loginRes.data.user
                });
                localStorage.setItem('user', loginRes.data.user);
                history.push("/");
            } catch (err) {
                err.response.data.msg && setError(err.response.data.msg);
            }

            //window.location = '/';
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


                <Form onSubmit={onSubmit} style={{ 
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: '63',
                    width: '40%',
                    borderRadius: '15px',
                    backgroundColor: '#ffffff'
                    }}>
                    <br/>
                    <h1 align="middle" style={{ color: 'grey' }}>Register</h1>
                    {error && (
                        <ErrorNotice message={error} clearError={() => setError(undefined)}/>
                        )}
                    <br />
                    <br />

                    <Form.Group controlId="formBasicEmail" style={{ margin: "10px" }} >
                        <Form.Label> Enter email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                        <Form.Label>Confrim Password</Form.Label>
                        <Form.Control onChange={(e) => setPassCheck(e.target.value)} type="Confirmpassword" placeholder=" Confirm Password" />
                    </Form.Group>
                    <br />
                    
                    <Form.Group controlId="Role" style={{ margin: "10px" }}>
                        <Form.Label>Select Admin Type</Form.Label>
                        <Form.Control onChange={(e) => setAdmin(e.target.value)} as="select" custom>
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

                    <br/>

                </Form>
            </div>

        );
    
}

export default Register;