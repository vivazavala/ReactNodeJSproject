import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';

    class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        }
    
        render() {

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
               
                    <Form style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: '40%',
                        width: '40%',
                        borderRadius: '15px',
                        backgroundColor: '#ffffff',
               
                    }}>     
                        <br/>
                        <h1 align="middle" style={{
                            color: 'grey',
                        }}>Sign In</h1>
                       <br />
                  
                        <Form.Group controlId="formBasicEmail" style={{margin: "10px"}}>
                            <Form.Label style={{color: 'black'}}>Email address</Form.Label>     
                           
                            <Form.Control type="email" placeholder="Enter email" />
                            <br /><br />
                </Form.Group>
                    
                        <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                            <Form.Label style={{ color: 'black' }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <br />

                        <Form.Group controlId="RegisterForgot" style={{ margin: "10px" }}>
                            <Button align="middle" variant="secondary" type="submit" block>
                                Login
                            </Button>
                            <br/>
                            <a href='/Register' style={{ color: 'blue' }}>Register</a>
                            </Form.Group>
            </Form>
            </div>  
        );
    }
}

export default Login;