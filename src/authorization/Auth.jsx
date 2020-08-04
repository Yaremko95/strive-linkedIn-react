// export default {
//   auth: "Basic dXNlcjIwOnRldGlhbmE=",
//   user: "user20",
// };

import { Base64 } from "js-base64";

export const getHeader = () => {
  if (localStorage.getItem("user") !== null) {
    const username = JSON.parse(localStorage.getItem("user")).username;
    const password = JSON.parse(localStorage.getItem("user")).password;
    const toBase64 = Base64.encode(`${username}:${password}`);
    console.log(toBase64);
    return "Basic " + toBase64;
  }
  return null;
};

export const getUserFromLocalStorage = () => {
  if (localStorage.getItem("user") === null) {
    return null;
  }
  return JSON.parse(localStorage.getItem("user")).username;
};

export const getImageLocalStorage = () => {
  if (localStorage.getItem("user") === null) {
    return null;
  }
  return JSON.parse(localStorage.getItem("user")).image;
};
