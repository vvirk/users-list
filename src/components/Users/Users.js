import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getAllUsers } from '../../actions/index';
import { UsersList } from '../UsersList/UsersList';
import { Pagination } from '../Pagination/Pagination';
import { Btn } from '../commonComponents/Btn';

const Users = ({ getAllUsers, allUsers, currentPage, totalPages }) => {
    const [currentUsers, setCurrentUsers] = useState();
    const [isShowNewUserForm, setIsShowNewUserForm] = useState(false);

    const getCurrentUsers = () => {
        if (currentPage === 1) {
            setCurrentUsers(allUsers.slice(0, 5));
            return;
        } else {
            const startIndex = getStartIndex();
            setCurrentUsers(allUsers.slice(startIndex, startIndex + 5))
        }
    }

    const getStartIndex = () => 5 * (currentPage - 1);

    const toggleNewUserForm = () => setIsShowNewUserForm(isShowNewUserForm ? false : true);

    useEffect(() => {
        getAllUsers();
    }, []);

    useEffect(() => {
        allUsers && getCurrentUsers(currentPage);
    }, [allUsers, currentPage]);

    return (
        <div className='users'>
            <Btn
                handleClick={toggleNewUserForm}
                desc={'Створити нового користувачва'}
            />
            {isShowNewUserForm && <div>New user</div>}
            {currentUsers && <UsersList usersList={currentUsers} />}
            {totalPages > 1 &&
                <Pagination />}
        </div>
    );
}

const mapStateToProps = state => ({
    allUsers: state.allUsers,
    currentPage: state.currentPage,
    totalPages: state.totalPages
});

const mapDispatchToProps = {
    getAllUsers
};

const connectedUsers = connect(mapStateToProps, mapDispatchToProps)(Users);
export { connectedUsers as Users };