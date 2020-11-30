import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import Header from "./Header"
import { ListGroup, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

    function Dashboard() {
        const { userData } = useContext(UserContext);
        const history = useHistory();

        useEffect(() => {
            if (!userData.user)
                history.push("/");
        });

        useEffect(() => {
            getAllLinks();
        }, []);

            const [links, getLinks] = useState(''); 


            const getAllLinks = () => {
                axios.get('http://localhost:9000/Home/links')
                    .then((response) => {
                        const allLinks = response.data.links.allLinks;
                        getLinks(allLinks);
                    })
                    .catch(error => console.error('Error' ));
            }
        
        const displaylinks = () => {
            if (links.length > 0) {
                return (
                    links.map((link, index) => {
                        console.log(link);
                        return (
                            <p className="Links"> {link.adminId}</p>
                        )
                    })
                )
            } else {
                return(<h3> No </h3>)
            }
        }

        return (<> {displaylinks()} </>)

        return (
            
            <div className="dashboard">
                <Header />
                <br /><br />
                    {userData.user ? (
                        <h1>Welcome {userData.user.email}</h1>
                    ) : (
                            <>
                                <h2>You are not logged in</h2>
                                <Link to="/login">Login</Link>
                            </>
                        )}
                </div>

        );
    
}

export default Dashboard;