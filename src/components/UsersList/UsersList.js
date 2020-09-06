import React from 'react';

export const UsersList = ({ usersList }) => {
    return(<ul>
        {usersList.map(user => <li key={user.id}>
            <h3>{`${user.name} ${user.surname}`}</h3>
            <p>{user.desc}</p>
        </li>)}
    </ul>);
}