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
            return new Date(a.date) - new Date(b.date);
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
    case C.APPEND_MESSAGE: {
      const msg = action.payload;
      const targetUser = action.targetUser;
      if (
        state.listOfChats.find((chat) => Object.keys(chat)[0] === targetUser)
      ) {
        return {
          ...state,
          listOfChats: state.listOfChats.map((chat) => {
            if (Object.keys(chat)[0] === targetUser) {
              if (!chat[targetUser].map((msg) => msg._id).includes(msg._id)) {
                chat[targetUser].push(msg);
              }
            }
            return chat;
          }),
        };
      } else {
        return {
          ...state,
          listOfChats: [
            ...state.listOfChats,
            {
              [targetUser]: [msg],
            },
          ],
        };
      }
    }
    case C.UPDATE_ACTIVE_USERS: {
      return {
        ...state,
        activeUsers: [...new Set(action.payload.map((user) => user.username))],
      };
    }
    default:
      return state;
  }
};
