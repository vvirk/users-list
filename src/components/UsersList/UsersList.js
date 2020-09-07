import React from 'react';

import { Btn } from '../commonComponents/Btn';

export const UsersList = ({ usersList, deleteUser, setUserToEdit}) => (
    <ul>
        {usersList.map(user => <li key={user.id}>
            <h3>{`${user.name} ${user.surname}`}</h3>
            <p>{user.desc}</p>
            <div>
                <Btn
                    handleClick={() => setUserToEdit(user)}
                    desc='редагувати'
                />
                <Btn
                    handleClick={() => deleteUser(user.id)}
                    desc='видалити'
                />
            </div>
        </li>)}
    </ul>
);