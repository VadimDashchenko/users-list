import React, {useState, useEffect} from 'react';
import './styles.scss';

const UsersList = (props) => {
    const {items} = props;
    const [userId, showUserById] = useState(null);

    useEffect(() => {
        let arrayId = items.map(i => Number(i.id));
        const delay = (time) => new Promise(resolve => setTimeout(resolve, time))
        const showUser = async () => {
            for (let i of arrayId) {
                showUserById(i)
                await delay(8000);
            }
        }
        showUser();
    }, [items])
    return (
        <>
            {items.map(user => (
                <div className="user-list" key={user.id}>
                    <span><strong>name: </strong>{user.name}</span>
                    <span><strong>surname: </strong>{user.surname}</span>
                    <p>{user.desc}</p>
                    {Number(user.id) === userId && <span style={{color: 'red'}}>{user.name} {user.surname}</span>}
                </div>
            ))}
        </>
    )
}

export default UsersList;