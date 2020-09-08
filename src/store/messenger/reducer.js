import C from "./constants";

const initialState = {
  activeUsers: [],
  listOfChats: [],
};

const getListOfChats = (history, username) => {
  const list = [
    ...new Set(
      history.map((msg) => msg.from).concat(history.map((msg) => msg.to))
    ),
  ];
  console.log(list);
  const chatsList = [];
  list.map((user) => {
    if (user !== username) {
      chatsList.push({
        [user]: history
          .filter(
            (msg) =>
              (msg.from === user && msg.to === username) ||
              (msg.from === username && msg.to === user)
          )
          .sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          }),
      });
    }
  });
  return chatsList;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.SET_HISTORY: {
      const listOfChats = getListOfChats(
        action.payload.history,
        action.payload.username
      );
      return {
        ...state,
        listOfChats: state.listOfChats.concat(listOfChats),
      };
    }
    default:
      return state;
  }
};
