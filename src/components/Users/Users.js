import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getAllUsers } from '../../actions/index';
import { UsersList } from '../UsersList/UsersList';
import { Pagination } from '../Pagination/Pagination';
import { Btn } from '../commonComponents/Btn';
import { NewUserForm } from '../NewUserForm/NewUserForm';

const Users = ({ getAllUsers, allUsers, currentPage, totalPages, userToEdit }) => {
    const [currentUsers, setCurrentUsers] = useState();
    const [isShowNewUserForm, setIsShowNewUserForm] = useState(false);

    const toggleNewUserForm = () => setIsShowNewUserForm(isShowNewUserForm ? false : true);
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

    useEffect(() => {
        getAllUsers();
    }, []);
    useEffect(() => {
        userToEdit && setIsShowNewUserForm(true);
    }, [userToEdit])
    useEffect(() => {
        allUsers && getCurrentUsers(currentPage);
    }, [allUsers, totalPages, currentPage]);
    return (
        <div className='users'>
            <Btn
                handleClick={toggleNewUserForm}
                desc={'Створити нового користувачва'}
            />
            {isShowNewUserForm && <NewUserForm userToEdit={userToEdit} />}
            {currentUsers && <UsersList usersList={currentUsers} />}
            {totalPages > 1 &&
                <Pagination />}
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
    getAllUsers
};

const connectedUsers = connect(mapStateToProps, mapDispatchToProps)(Users);
export { connectedUsers as Users };