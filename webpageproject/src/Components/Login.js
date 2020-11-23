import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

    class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        }
       
    render() {
        return ( 
            <div style={{
                position: 'absolute', left: '50%', top: '40%',
                transform: 'translate(-50%, -50%)',
             //   backgroundImage: 'url(' + require('/img/webpageBG.jpg') + ')'
            }}>
             
               
                <Form>
                 
                    <h1 align="middle">Sign In</h1>
                    <br />
                    <br />
                <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>             
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                    <br />
                <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <br />
                    
                <Button align="middle" variant="primary" type="submit" block>
                        Login
  </Button>
                    <a href='#SignUp'>Forgot Password?</a>
                       &nbsp;&nbsp;&nbsp;&nbsp; <a href='#Register'>Register</a>
            </Form>
            </div>  
        );
    }
}

export default Login;