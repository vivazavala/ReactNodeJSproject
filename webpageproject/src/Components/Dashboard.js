import React, { useState ,useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import Header from "./Header"
import { ListGroup, } from 'react-bootstrap';
import Axios from 'axios';

function Dashboard() {
    const { userData } = useContext(UserContext);
    const history = useHistory();
    const [links, setLinks] = useState();

    useEffect(() => {
        if (!userData.user)
            history.push("/");
        let currAdmin = userData.user.adminId;   //problem here fix here
        const checkAdmin = async () => {
            const adminRes = await Axios.get('http://localhost:9000/Links/all', { currAdmin });
            setLinks(adminRes.data);
        };
        checkAdmin();
    });
            
   
        return (
            
            <div className="dashboard">
                <Header />
                <br /><br />

                <h3>Admin Type:</h3>
                <ListGroup className="linkList" value>
                    <ListGroup.Item>{links}</ListGroup.Item>  
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                
                </div>

        );
    
}

export default Dashboard;