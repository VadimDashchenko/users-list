import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../store/actions/users';
import UsersList from "../../components/UsersList/UsersList";
import './App.css';

class App extends Component {

    componentDidMount() {
        this.loadingUsers()
    }

    loadingUsers = () => {
        const {loadingUsers} = this.props;
        fetch('http://localhost:4224/users')
            .then(res => res.json())
            .then(result => {
                loadingUsers(result.users)
            })
            .catch(error => console.log(error))
    }

    render() {
        const {users} = this.props;
        return (
            <div className="App">
                Users list!
                <UsersList users={users} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.user.users
})

export default connect(
    mapStateToProps,
    userActions
)(App);
