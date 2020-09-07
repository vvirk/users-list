import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getAllUsers, setUserToEdit, createUser, editUser, deleteUser } from '../../actions/index';
import { UsersList } from '../UsersList/UsersList';
import { Pagination } from '../Pagination/Pagination';
import { Btn } from '../commonComponents/Btn';
import { UserForm } from '../UserForm/UserForm';

const Users = ({ getAllUsers, allUsers, currentPage, totalPages, userToEdit, setUserToEdit, createUser, editUser, deleteUser }) => {
    const [currentUsers, setCurrentUsers] = useState();
    const [isShowUserForm, setIsShowUserForm] = useState(false);

    const toggleNewUserForm = () => setIsShowUserForm(isShowUserForm ? false : true);

    const handleClick = () => {
        setUserToEdit(null);
        toggleNewUserForm();
    };

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    useEffect(() => {
        setIsShowUserForm(userToEdit ? true : false);
    }, [userToEdit]);

    useEffect(() => {
        const getStartIndex = () => 5 * (currentPage - 1);
        const getCurrentUsers = () => {
            if (currentPage === 1) {
                setCurrentUsers(allUsers.slice(0, 5));
                return;
            } else {
                const startIndex = getStartIndex();
                setCurrentUsers(allUsers.slice(startIndex, startIndex + 5))
            }
        }

        allUsers && getCurrentUsers(currentPage);
    }, [allUsers, totalPages, currentPage]);

    return (
        <div className='users'>
            <Btn
                handleClick={handleClick}
                desc={'Створити нового користувачва'}
            />
            {isShowUserForm &&
                <UserForm
                    userToEdit={userToEdit}
                    showUserForm={setIsShowUserForm}
                    createUser={createUser}
                    editUser={editUser}
                />}
            {currentUsers &&
                <UsersList
                    usersList={currentUsers}
                    deleteUser={deleteUser}
                    setUserToEdit={setUserToEdit}
                />}
            {totalPages > 1 && <Pagination />}
        </div>
    );
}

const mapStateToProps = state => ({
    allUsers: state.allUsers,
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    userToEdit: state.userToEdit
});

const mapDispatchToProps = {
    getAllUsers,
    setUserToEdit,
    createUser,
    editUser,
    deleteUser
};

const connectedUsers = connect(mapStateToProps, mapDispatchToProps)(Users);
export { connectedUsers as Users };