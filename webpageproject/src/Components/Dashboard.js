import React, { useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import Header from "./Header"
import { ListGroup, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
    function Dashboard() {
        const { userData } = useContext(UserContext);
        const history = useHistory();

        useEffect(() => {
            if (!userData.user)
                history.push("/");
            });
   
        return (
            
            <div className="dashboard">
                <Header />
                <br /><br />

                <h3>Admin Type:</h3>
                <ListGroup className="linkList">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                
                </div>

        );
    
}

export default Dashboard;