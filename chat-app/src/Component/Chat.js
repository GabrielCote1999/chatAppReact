import React, { useEffect, useState, makeStyles, Theme } from "react";
import { io } from "socket.io-client";
import "./Chat.css";
import SideBar from "./SideBar";
import { Box, Typography } from "@material-ui/core";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { createStyles } from "@mui/material";

function Chat() {
  const [socket, setSocket] = useState(null);

  //chat styling

  useEffect(() => {
    const newSocket = io(`http://localhost:3000`);

    setSocket(newSocket);

    console.log(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="main">
      <div className="background">
        <Box
         
          fontSize={24}
          color="white"
         marginTop={10}>
        <h1 className="title">This is the chatRoom</h1>
        </Box>
        <Box
          marginTop={10}
          bgcolor="white"
          border={2}
          borderRadius={16}
          margin="auto"
          borderColor="white"
          justifyContent="center"
          width={500}
          alignItems="center"
          fontSize={24}
        >
          {/*
      <SideBar className="side" />
    */}

          {socket ? (
            <div className="chat-container">
              <Messages socket={socket} />
              <MessageInput socket={socket} />
            </div>
          ) : (
            <div>Not Connected</div>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Chat;
