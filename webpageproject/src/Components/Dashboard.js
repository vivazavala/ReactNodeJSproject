import React, { useState ,useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import Header from "./Header"
import { ListGroup, } from 'react-bootstrap';
import Axios from 'axios';

function Dashboard() {
    const { userData } = useContext(UserContext);
    const history = useHistory();
    const [links, setLinks] = useState([]);
  
    useEffect( () => {
       if (!userData.user)
            history.push("/");

      
        
        const checkAdmin = async () => {    //let ||const currAdmin
              let currAdmin = userData.user.adminId; //problem here// curr Id is here but need to pass userData.user.adminId
           
            const adminRes = await Axios.get('http://localhost:9000/Links/all?currAdmin='+currAdmin);   //{currentAdmin}
            console.log(adminRes.data);   //.data
          //  setLinks(adminRes.data);   /////this is what needs to be fixed///////
          
        };
        checkAdmin();
    }, []);
    
    
   
        return (   
            <div className="dashboard">
                <Header />
                <br /><br />

                <h3>Admin Type:</h3>
                <ListGroup className="linkList">
                    {links.map(e => (    //(e)  ////may need fixing !! array of objects
                        <ListGroup.item key={e.adminId}>                          
                            {e.links} 
                        </ListGroup.item>
                    ))}
                </ListGroup>
                
                </div>

        );
    
}

export default Dashboard;