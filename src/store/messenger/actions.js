import C from "./constants";

export const setHistory = (data) => ({
  type: C.SET_HISTORY,
  payload: data,
});
