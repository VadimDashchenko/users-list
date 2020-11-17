import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../store/actions/users';
import UsersList from "../../components/UsersList/UsersList";
import Pagination from "../../components/Pagination/Pagination";

class UserPage extends Component {

    state = {
        currentPage: 1,
        itemsOnPage: 5
    }

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
    
    changePage = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        });
    }

    render() {
        const {users} = this.props;
        const {currentPage, itemsOnPage} = this.state;

        // Logic for displaying current users
        const indexOfLastTodo = currentPage * itemsOnPage;
        const indexOfFirstTodo = indexOfLastTodo - itemsOnPage;
        const currentUsers = users.slice(indexOfFirstTodo, indexOfLastTodo);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(users.length / itemsOnPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <>
                <UsersList items={currentUsers}/>
                <Pagination click={this.changePage} pages={pageNumbers}/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    users: state.user.users
})

export default connect(
    mapStateToProps,
    userActions
)(UserPage);

