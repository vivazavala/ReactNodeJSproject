import React from 'react';
import { render } from 'react-dom';
<<<<<<< Updated upstream
=======
import Login from "./Components/Login"
import Register from "./Components/Register"

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
>>>>>>> Stashed changes

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentWillMount() {
        this.callAPI();
    }


    render() {
        return (
            <div className="App">
            <h1>Hello World</h1>  
                <p>{this.state.apiResponse}</p>
<<<<<<< Updated upstream
=======
              module.exports = {
                    entry: {
                    pageOne: './src/pageOne/Login.js'
                    pageTwo: './src/pageTwo/Register.js'
                        }
                       };
>>>>>>> Stashed changes
            </div>
        );
    }
}

export default App;
