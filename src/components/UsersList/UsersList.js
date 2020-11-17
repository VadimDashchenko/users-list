import React from 'react';

const UsersList = (props) => {
    const {items} = props;
    return(
        <>
            {items.map(user => (
                <div key={user.id}>
                    <span>{user.name}</span>
                    <span> {user.surname}</span>
                    <p>{user.desc}</p>
                </div>
            ))}
        </>
    )
}

export default UsersList;