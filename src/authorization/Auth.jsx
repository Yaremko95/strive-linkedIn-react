// export default {
//   auth: "Basic dXNlcjIwOnRldGlhbmE=",
//   user: "user20",
// };

import { Base64 } from "js-base64";

export const getHeader = () => {
  const username = JSON.parse(localStorage.getItem("user")).username;
  const password = JSON.parse(localStorage.getItem("user")).password;
  const toBase64 = Base64.encode(`${username}:${password}`);
  console.log(toBase64);
  return "Basic " + toBase64;
};

export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")).username;
};
