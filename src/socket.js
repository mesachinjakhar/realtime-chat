import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "https://realtime-chat-backend-bhec.onrender.com";

const socket = io(SOCKET_SERVER_URL);

export default socket;
