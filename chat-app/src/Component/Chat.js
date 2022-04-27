import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Chat.css";
function Chat() {
  
  const [socket, setSocket] = useState(null);

  /*establish a connection to the given url*/
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    console.log(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="Chat">
      <header className="app-header">Chat</header>
      {/*If someone is connected*/}
      {socket ? (
        
        <div className="chat-container">
          
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default Chat;
