import React from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
//import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='Header'>
            {/* App Name on far left */}
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>Welcome!</Navbar.Brand>

                {/* Links to different webpages on far right*/}
                <Nav className='ml-auto'>
                    <Nav.Link to='#Login'>Logout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;