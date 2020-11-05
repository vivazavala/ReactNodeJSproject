import React from 'react';
import { render } from 'react-dom';

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
            </div>
        );
    }
}

export default App;
