import * as type from '../actions/actionTypes';

export const initialState = {
  allUsers: null,
  currentPage: 1,
  totalPages: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_ALL_USERS:
      const { allUsers } = action;
      const allUsersLength = allUsers.length
      const totalPages = allUsersLength > 5 ? Math.round(allUsers.length / 5) : 1;

      return { ...state, allUsers, totalPages };
    case type.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};