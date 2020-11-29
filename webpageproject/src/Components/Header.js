import React, { useContext}from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Header() {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();
    const logout = () => {
        setUserData({
            user: undefined,
        });
        localStorage.setItem("user", "");
    };
    return (
        <div className='Header'>
            {/* App Name on far left */}
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>Welcome</Navbar.Brand>  
                {/* Links to different webpages on far right*/}
                <Nav className='ml-auto'>
                    <Link to='/' onClick={logout} style={{ color: 'white' }}>Logout</Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;