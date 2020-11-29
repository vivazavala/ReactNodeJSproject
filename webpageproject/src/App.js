import React, { Component, useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, render} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login"
import Register from './Components/Register';
import Dashboard from "./Components/Dashboard";
import UserContext from "./context/UserContext";
import Axios from 'axios';


function App() {
    const [userData, setUserData] = useState({
        user: undefined,
    });

    useEffect(() => {
        const checkLoggedIn = async () => {
            const email = localStorage.getItem("email");
            const emailRep = { email };
       /*     if (email === null) {
                localStorage.setItem("email", "");                ///Fixes needed for UserContext
                email = "";
                emailRep = { email };
            }
            */
            const userRes = await Axios.get('http://localhost:9000/Home/', emailRep);
        //    console.log(userRes);
                if (userRes) {
                    setUserData({
                        user: userRes.data,  //userRes.data
                    });
            }   ///check if UserData is what was set here?
        }
        checkLoggedIn();
       
        
    }, []);

    return (
        
            <Router>
                <UserContext.Provider value={{ userData, setUserData }}>
                    <div className="App">
                    <Route exact path="/" exact component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Dashboard" component={Dashboard}/>            
                </div>
                </UserContext.Provider>
                </Router>
        );
    
}

export default App;
