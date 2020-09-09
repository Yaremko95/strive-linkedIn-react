import C from "./constants";

export const setUser = (data) => ({
  type: C.SET_USER,
  payload: data,
});
