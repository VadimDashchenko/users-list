import React from 'react';
import './styles.scss';

const UsersList = (props) => {
    const {items} = props;
    return(
        <>
            {items.map(user => (
                <div className="user-list" key={user.id}>
                    <span><strong>name: </strong>{user.name}</span>
                    <span><strong>surname: </strong>{user.surname}</span>
                    <p>{user.desc}</p>
                </div>
            ))}
        </>
    )
}

export default UsersList;