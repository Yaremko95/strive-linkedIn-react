import C from "./constants";

const initialState = {
  authorizedUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.SET_USER: {
      return {
        ...state,
        authorizedUser: action.payload,
      };
    }
    default:
      return state;
  }
};
