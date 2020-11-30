import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import { useHistory, Link } from 'react-router-dom';
import Header from "./Header"
import { ListGroup, } from 'react-bootstrap';
import axios from 'axios';
import LinkTime from './LinkTime';

function Dashboard() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user)
            history.push("/");
    }, []);

    useEffect(() => {
        getAllLinks();
    }, []);

    const [mylinks, getLinks] = useState('');

    const getAllLinks = () => {
        let currAdmin = userData.user.adminId;
           return axios.get('http://localhost:9000/Links/all?currAdmin=' + currAdmin)
            .then((response) => {
                const allLinks = response.data;
                getLinks(allLinks);
            })
            .catch(error => console.error('Error'));
    }



    return (
        <div>
            <Header />
            <h1> Admin Links: </h1> 
            < LinkTime  mylinks={mylinks} /> 
            
        </div>
    );

}

export default Dashboard;
