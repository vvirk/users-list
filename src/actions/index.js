import * as type from './actionTypes';

const getUrl = param => {
    const urlApi = 'http://77.120.241.80:8911/api/';
    return urlApi + param;
}

export const setCurrentPage = currentPage => ({
    type: type.SET_CURRENT_PAGE,
    currentPage,
});

const addNewUser = user => ({
    type: type.ADD_NEW_USER,
    user,
});

export const addAllUsers = allUsers => ({
    type: type.ADD_ALL_USERS,
    allUsers,
});

export const getAllUsers = () => async dispatch => {
    try {
      const response = await fetch(getUrl('users'));
      const responseBody = await response.json();
      dispatch(addAllUsers(responseBody));
    } catch (e) {
      console.error(e);
    }
};

export const createUser = userState => async dispatch => {
    try {
      const response = await fetch(getUrl('users'), {
        method: 'POST',
        body: JSON.stringify(userState),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseBody = await response.json();
      dispatch(addNewUser(responseBody));
      return true;
    } catch (e) {
      console.error(e);
    }
};

export const deleteUser = id => async dispatch => {
    try {
      const response = await fetch(getUrl(`user/${id}`), {
        method: 'DELETE',
        body: id,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseBody = await response.json();
      dispatch(addAllUsers(responseBody));
    } catch (e) {
      console.error(e);
    }
};
