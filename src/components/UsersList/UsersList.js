import React from 'react';
import { connect } from 'react-redux';

import { deleteUser } from '../../actions/index';

const UsersList = ({ usersList, deleteUser}) => {
    return(<ul>
        {usersList.map(user => <li key={user.id}>
            <h3>{`${user.name} ${user.surname}`}</h3>
            <p>{user.desc}</p>
            <div>
                <button>редагувати</button>
                <button onClick={() => deleteUser(user.id)}>видалити</button>
            </div>
        </li>)}
    </ul>);
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    deleteUser
};

const connectedUsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export { connectedUsersList as UsersList };