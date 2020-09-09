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
