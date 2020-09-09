// export default {
//   auth: "Basic dXNlcjIwOnRldGlhbmE=",
//   user: "user20",
// };

import { Base64 } from "js-base64";

export const getHeader = () => {
  if (localStorage.getItem("user") !== null) {
    const username = JSON.parse(localStorage.getItem("user")).email;
    const password = JSON.parse(localStorage.getItem("user")).password;
    const toBase64 = Base64.encode(`${username}:${password}`);
    console.log(toBase64);
    return `Bearer ${localStorage.getItem("accessToken")}`;
  }
  return null;
};

export const getUserFromLocalStorage = () => {
  if (localStorage.getItem("user") === null) {
    return null;
  }
  return JSON.parse(localStorage.getItem("user")).email;
};

export const getImageLocalStorage = () => {
  if (localStorage.getItem("user") === null) {
    return null;
  }
  return JSON.parse(localStorage.getItem("user")).image;
};
