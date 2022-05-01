import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./Chat.css";
import SideBar from "./SideBar";
import Messages from "./Messages"
import MessageInput from './MessageInput';

function Chat() {
  
  const [socket, setSocket] = useState(null);

  useEffect(() => {
 

    const newSocket = io(`http://localhost:3000`);

    setSocket(newSocket);

    console.log(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  
  return (
    <div className="Chat">
     
      <SideBar className="side" />
  
      <section className="chat">
        <h1>This is the chatRoom</h1>

        { socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
          
        </div>
      ) : (
        <div>Not Connected</div>
      )}

      </section>
    </div>
  );
}

export default Chat;
