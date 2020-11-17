import React from 'react';

const UsersList = (props) => {
    const {users} = props;
    return(
        <>
            {users.map(item => (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.surname}</span>
                    <p>{item.desc}</p>
                </div>
            ))}
        </>
    )
}

export default UsersList;