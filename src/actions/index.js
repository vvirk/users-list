import * as type from './actionTypes';

const getUrl = param => {
    const urlApi = 'http://77.120.241.80:8911/api/';
    return urlApi + param;
}

export const setCurrentPage = currentPage => ({
    type: type.SET_CURRENT_PAGE,
    currentPage,
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