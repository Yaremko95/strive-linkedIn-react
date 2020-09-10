import C from "./constants";

const initialState = {
  authorizedUser: null,
  usersList: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.SET_USER: {
      return {
        ...state,
        authorizedUser: action.payload,
      };
    }
    case C.SET_USERS_LIST: {
      return {
        ...state,
        usersList: action.payload,
      };
    }
    default:
      return state;
  }
};
