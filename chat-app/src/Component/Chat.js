import React from "react";

const Chat = () => {
  return (
    <div>
      <body>
        <script src="/socket.io/socket.io.js"></script>
        <script>var socket = io();</script>
      </body>
      <h1>This is the chat page</h1>
    </div>
  );
};

export default Chat;
