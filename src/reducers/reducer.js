import * as type from '../actions/actionTypes';

export const initialState = {
  allUsers: [],
  currentPage: 1,
  totalPages: 0,
  userToEdit: null
};

const countTotalPages = usersArrLength => usersArrLength > 5 ? Math.ceil(usersArrLength / 5) : 1;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_ALL_USERS:
      const { allUsers } = action;
      const totalPages = countTotalPages(allUsers.length);

      return {
        ...state,
          allUsers,
          totalPages,
          currentPage: totalPages <= 5 ? 1 : state.currentPage,
          userToEdit: null
      };
    case type.ADD_NEW_USER:
      const _allUsers = [...state.allUsers, { ...action.user }];

      return { 
        ...state, 
          allUsers: _allUsers, 
          totalPages: countTotalPages(_allUsers.length)
      }
    case type.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case type.SET_USER_TO_EDIT:
      return { ...state, userToEdit: action.user };
    case type.ADD_EDITED_STATE:
      const usersCopy = state.allUsers.map(user => {
        if(user.id === action.editedState.id) {
          return { ...action.editedState}
        } 
        return user;
      });
      return { ...state, allUsers: usersCopy, userToEdit: null };
    default:
      return state;
  }
};