import React, {Component} from 'react';
import UserPage from "../UserPage/UserPage";
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                Users list!
                <UserPage />
            </div>
        )
    }
}

export default App;
