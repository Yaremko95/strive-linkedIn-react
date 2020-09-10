import C from "./constants";

export const setHistory = (data) => ({
  type: C.SET_HISTORY,
  payload: data,
});
export const appendMessage = (data, targetUser) => ({
  type: C.APPEND_MESSAGE,
  payload: data,
  targetUser: targetUser,
});

export const updateActiveUsers = (data) => ({
  type: C.UPDATE_ACTIVE_USERS,
  payload: data,
});

export const updateWindows = (data) => ({
  type: C.UPDATE_WINDOWS,
  payload: data,
});

export const triggerModalOnMesgReceived = (data) => (dispatch, getSate) => {
  console.log("triggerModalOnMesgReceived", getSate());
  const listOfChats = getSate().messenger.listOfChats;
  const windows = getSate().messenger.windows;
  const authorized = getSate().usersReducer.authorizedUser.username;
  let res;
  if (data.from === authorized) {
    res = listOfChats.find((chat) => chat.username === data.to);
  } else {
    res = listOfChats.find((chat) => chat.username === data.from);
  }

  console.log(
    "windows.find((w) => w.username !== data.from",
    windows.filter((w) => w.username !== data.username)
  );
  if (windows.filter((w) => w.username !== data.username).length === 0) {
    dispatch(updateWindows(res));
  }
};
