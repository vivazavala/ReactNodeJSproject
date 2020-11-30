import React, { Component } from 'react';
import Header from "./Header"
import { ListGroup, } from 'react-bootstrap';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
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
}

export default Dashboard;