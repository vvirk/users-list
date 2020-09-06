import * as type from '../actions/actionTypes';

export const initialState = {
  allUsers: null,
  currentPage: 1,
  totalPages: null,
};
const countTotalPage = usersArrLength => usersArrLength > 5 ? Math.round(usersArrLength / 5) : 1;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_ALL_USERS:
      const { allUsers } = action;

      return { ...state, allUsers, totalPages: countTotalPage(allUsers.length) };
    case type.ADD_NEW_USER:
      const _allUsers = [...state.allUsers, { ...action.user }];

      return { ...state, allUsers: _allUsers, totalPages: countTotalPage(_allUsers.length) }
    case type.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};