import React from 'react';

import { Btn } from '../commonComponents/Btn';

export const UsersList = ({ usersList, deleteUser, setUserToEdit}) => (
    <ul className='users-list'>
        {usersList.map(user => <li  className='user' key={user.id}>
            <h3 className='user-title'>{`${user.name} ${user.surname}`}</h3>
            <p className='user-desc'>{user.desc}</p>
            <div>
                <Btn
                    handleClick={() => {
                        window.scrollTo(0, 0);
                        setUserToEdit(user)
                    }}
                    desc='редагувати'
                    extraClass='editBtn'
                />
                <Btn
                    handleClick={() => deleteUser(user.id)}
                    desc='видалити'
                    extraClass='editBtn'
                />
            </div>
        </li>)}
    </ul>
);