import React, { Component } from 'react';
import { Form, Button, MenuItem, Dropdown, FormControl, DropdownButton } from 'react-bootstrap';
import axios from 'axios'

class Register extends Component {
    constructor(props) {
        super(props);

        this.onAdminChange = this.onAdminChange.bind(this);
        this.onConPasswordChange = this.onConPasswordChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            confirmPass: '',
            adminId: ''
        }
    }
    componentDidMount() {
        this.setState({
        email: 'testEmail'
        })
    }

    onConPasswordChange(e) {
        this.setState({
            confirmPass: e.target.value
        });

    }
    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }
    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    onAdminChange(e) {
        this.setState({
        adminId:e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
            confirmPass: this.state.confirmPass,
            adminId: this.state.adminId
        }
        console.log(user)

        axios.post('http://localhost:9000/Register', user)
            .then(res => console.log(res.data));

        window.location = '/Dashboard';
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


                <Form onSubmit={this.onSubmit} style={{ 
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
                        <Form.Control value={this.state.email} onChange={this.onEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control value={this.state.password} onChange={this.onPasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword" style={{ margin: "10px" }}>
                        <Form.Label>Confrim Password</Form.Label>
                        <Form.Control value={this.state.confirmPass} onChange={this.onConPasswordChange} type="Confirmpassword" placeholder=" Confirm Password" />
                    </Form.Group>
                    <br />
                    
                    <Form.Group controlId="Role" style={{ margin: "10px" }}>
                        <Form.Label>Select Admin Type</Form.Label>
                        <Form.Control value={this.state.adminId} onChange={this.onAdminChange} as="select" custom>
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
}

export default Register;