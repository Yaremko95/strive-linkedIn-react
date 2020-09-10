import C from "./constants";
import authAxios from "../../authorization/authAxios";
import axios from "axios";

export const setUser = (data) => ({
  type: C.SET_USER,
  payload: data,
});
export const setUsersList = (data) => ({
  type: C.SET_USERS_LIST,
  payload: data,
});

export const authorize = () => async (dispatch) => {
  const res = await authAxios.get(`/profile/me`, {
    withCredentials: true,
  });

  if (!res) {
    const secondRes = await axios.get(`/profile/me`, {
      withCredentials: true,
    });

    if (secondRes.status !== 200) {
    } else {
      setUser(secondRes.data);
    }
  } else {
    if (res.status !== 200) {
    } else {
      setUser(res.data);
    }
  }
};

export const fetchUsers = (param) => async (dispatch) => {
  const res = await authAxios.get(param, {
    withCredentials: true,
  });

  if (!res) {
    const secondRes = await axios.get(param, {
      withCredentials: true,
    });

    if (secondRes.status !== 200) {
    } else {
      dispatch(setUsersList(secondRes.data.data));
    }
  } else {
    if (res.status !== 200) {
    } else {
      dispatch(setUsersList(res.data.data));
    }
  }
};
