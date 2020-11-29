import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login"
import Register from './Components/Register';
import Dashboard from "./Components/Dashboard";
import UserContext from "./context/userContext";
import axios from 'axios';



function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });
    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenResponse = await axios.post('http://localhost:3001/users/tokenIsValid', null, { headers: { "x-auth-token": token } });
            if (tokenResponse.data) {
                const userRes = await axios.get("http://localhost:3001/users/", {
                    headers: { "x-auth-token": token },
                });
                setUserData({
                    token,
                    user: userRes.data,
                });
            }
        }
        checkLoggedIn();
    }, []);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ userData, setUserData }}>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
export default App;