import React, { useState } from 'react';
import { connect } from 'react-redux';

import { InputText } from '../commonComponents/InputText';
import { Btn } from '../commonComponents/Btn';
import { createUser, editUser } from '../../actions/index';

const NewUserForm = ({ createUser, userToEdit, editUser }) => {
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

    const handleCreateNewUser = async () => {
        if(name && surname && desc) {
            const isSucces = userToEdit ? await editUser(newUserState) : await createUser(newUserState);
            isSucces && setNewUserState(defaultState)
        }
    }
    return(
        <div>
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
            <Btn desc='Створити' handleClick={handleCreateNewUser} />
        </div>
    )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    createUser,
    editUser
};

const connectedNewUserForm = connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
export { connectedNewUserForm as NewUserForm };