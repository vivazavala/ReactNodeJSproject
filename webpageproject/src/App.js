import React from 'react';
import {BrowserRouter as Router, Route, render} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login"
import Register from './Components/Register';
import Dashboard from "./Components/Dashboard";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
         <Router>
            <div className="App">
                    <Route path="/" exact component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Dashboard" component={Dashboard}/>      
                          
                </div>

                </Router>
        );
    }
}

export default App;
