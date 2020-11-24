import React, { Component } from 'react';
import { Form, Button, MenuItem, Dropdown, FormControl, DropdownButton } from 'react-bootstrap';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
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


                <Form style={{ 
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: '63',
                    width: '40%',
                    borderRadius: '15px',
                    backgroundColor: '#ffffff'
                    }}>
                    <br/>
                    <h1 align="middle" style={{color: 'grey' }}>Register</h1>
                    <br />
                    <br />

                    <Form.Group controlId="formBasicEmail" style={{ margin: "10px" }} >
                        <Form.Label> Enter email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                        <Form.Label>Confrim Password</Form.Label>
                        <Form.Control type="Confirmpassword" placeholder=" Confirm Password" />
                    </Form.Group>
                    <br />
                    
                    <Form.Group controlId="Role" style={{ margin: "10px" }}>
                        <Form.Label>Select Admin Type</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Admin</option>
                            <option>Finance</option>
                            <option>Sales</option>
                            <option>HR</option>
                            <option>Technology</option>
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
}

export default Register;