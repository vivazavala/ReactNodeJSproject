import React from 'react';
import { render } from 'react-dom';
import Register from "./Components/Register"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";

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
                <p>{this.state.apiResponse}</p>
                 
                <Register /> 
            </div>
        );
    }
}

export default App;
