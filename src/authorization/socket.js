import socketIOClient from "socket.io-client";
import Cookie from "js-cookie";
const socket = socketIOClient(process.env.REACT_APP_BE_URL_API, {
  transports: ["websocket"],
  query: `accessToken=${Cookie.get("accessToken")}`,
  reconnection: true, // whether to reconnect automatically
  reconnectionAttempts: 3,
});
export default socket;
