import React, { useState } from 'react';

import { InputText } from '../commonComponents/InputText';

export const UserForm = ({ createUser, userToEdit, editUser, showUserForm }) => {
    const defaultState = {
        name: '',
        surname: '',
        desc: ''
    }
    const [newUserState, setNewUserState] = useState(userToEdit ? userToEdit : defaultState);
    const { name, surname, desc } = newUserState;

    const handleNewUserState = userKey => e => {
        setNewUserState({ ...newUserState, [userKey]: e.target.value});
    };

    const handleUser = async () => {
        if(name && surname && desc) {
            const isSucces = userToEdit ? await editUser(newUserState) : await createUser(newUserState);
            if (isSucces) {
                setNewUserState(defaultState);
                showUserForm(false);
            }
        }
    }

    return(
        <form onSubmit={e => {
            e.preventDefault();
            handleUser();
        }}>
            <InputText
                value={name}
                placeholder={'Введіть ім\'я користувача'}
                handleChange={handleNewUserState('name')}
            />
            <InputText
                value={surname}
                placeholder={'Введіть прізвище користувача'}
                handleChange={handleNewUserState('surname')}
            />

            <InputText
                value={desc}
                placeholder={'Введіть опис користувача'}
                handleChange={handleNewUserState('desc')}
            />
            <input className='btn btnSubmit' type='submit' placeholder='Зберегти'/>
        </form>
    )
}