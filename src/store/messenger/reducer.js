import C from "./constants";

const initialState = {
  activeUsers: [],
  listOfChats: [],
  windows: [],
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
    // if (user !== username) {
    chatsList.push({
      username: user,
      history: history
        .filter(
          (msg) =>
            (msg.from === user && msg.to === username) ||
            (msg.from === username && msg.to === user)
        )
        .sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        }),
    });
    // }
  });
  // .sort((a, b) => {
  //   const keyA = Object.keys(a)[0];
  //   const keyB = Object.keys(b)[0];
  //   return (
  //     new Date(a[keyA][a[keyA].length - 1]) -
  //     new Date(b[keyB][b[keyB].length - 1])
  //   );
  // });
  return chatsList;
};
const updateWindows = (window, windows) => {
  const temp = [];
  if (windows.find((w) => w.username === window.username)) {
    const index = windows.findIndex((w) => w.username === window.username);
    windows.splice(index, 1);
  } else {
    return windows.push(window);
  }
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
      if (state.listOfChats.find((chat) => chat.username === targetUser)) {
        const updated = state.listOfChats.map((chat) => {
          if (chat.username === targetUser) {
            if (!chat.history.map((msg) => msg._id).includes(msg._id)) {
              chat.history.push(msg);
            }
          }
          return chat;
        });
        updated.forEach((item, i) => {
          console.log(item);
          if (item.username === targetUser) {
            updated.splice(i, 1);
            updated.unshift(item);
          }
        });
        return {
          ...state,
          listOfChats: updated,
        };
        // objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0));
      } else {
        return {
          ...state,
          listOfChats: [
            {
              username: targetUser,
              history: [msg],
            },
            ...state.listOfChats,
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
    case C.UPDATE_WINDOWS: {
      updateWindows(action.payload, state.windows);
      return {
        ...state,
        windows: state.windows,
      };
    }

    default:
      return state;
  }
};
