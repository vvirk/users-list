import * as type from '../actions/actionTypes';

export const initialState = {
  allUsers: null,
  currentPage: 1,
  totalPages: null,
  editedUserState: {
    name: '',
    surname: '',
    desc: '',
    id: ''
  }
};

const countTotalPages = usersArrLength => usersArrLength > 5 ? Math.ceil(usersArrLength / 5) : 1;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_ALL_USERS:
      const { allUsers } = action;
      const totalPages = countTotalPages(allUsers.length);
      return { ...state, allUsers, totalPages, currentPage: totalPages <= 5 ? 1 : state.currentPage };
    case type.ADD_NEW_USER:
      const _allUsers = [...state.allUsers, { ...action.user }];

      return { ...state, allUsers: _allUsers, totalPages: countTotalPages(_allUsers.length) }
    case type.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};