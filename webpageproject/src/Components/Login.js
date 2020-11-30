import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, render } from 'react-dom';
import axios from 'axios'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  
        }

        handleSubmit(e) {
            e.preventDefault();

      /*      if (!this.state.email) {
                return this.setState({ error: 'Email is required.' });
            }

            if (!this.state.password) {
                return this.setState({ error: 'Password is required' });
            }   */
            const user = {
                email: this.state.email,
                password: this.state.password     
            }

            axios.post('http://localhost:9000/Register', user)
                .then(res => console.log(res.data));

            window.location='/Dashboard';

            this.setState({
                email: '',
                password: ''
            })
        }

        handleEmailChange(e) {
            this.setState({
                email: e.target.value,
            });
        };

        handlePassChange(e) {
            this.setState({
                password: e.target.value,
            });
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
               
                    <Form onSubmit={this.handleSubmit} style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: '63%',
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
                            <Form.Control value={this.setState.email} onChange={this.handleEmailChange} type="email" placeholder="Enter email" />
                            <br /><br />
                </Form.Group>
                    
                        <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                            <Form.Label style={{ color: 'black' }}>Password</Form.Label>
                            <Form.Control value={this.setState.password} onChange={this.handlePassChange} type="password" placeholder="Password" />
                    </Form.Group>
                        <br/>
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
}

export default Login;