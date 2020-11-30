import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import { useHistory, Link } from 'react-router-dom';
import Header from "./Header"
import { ListGroup, } from 'react-bootstrap';
import axios from 'axios';

function Dashboard() {
    const { userData } = useContext(UserContext);
    const history = useHistory();
    const [links, setLinks] = useState([]);



    useEffect(() => {
        if (!userData.user)
            history.push("/");
        const checkAdmin = async () => {
            let currAdmin = userData.user.adminId;   

            const adminRes = await axios.get('http://localhost:9000/Links/all?currAdmin=' +currAdmin );
            setLinks(adminRes.linked);
        };
    }, []);

    return (

        <div className="dashboard">
            <Header />
            <br />
            <br />
            <h3> Admin Type: </h3>
            <ListGroup className="linklist" >
                {links && links.map(e => (
                    <ListGroup.item key={e.adminId}>
                        {e.links}
                    </ListGroup.item>
                ))}
            </ListGroup>

        </div>

    );


}

export default Dashboard;
