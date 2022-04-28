import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Chat.css";


function Chat() {

  const [message, setMessage] = useState([]);

  const socket = io('ws://localhost:8080')

  console.log(socket)  
  socket.on('message', text => {
  setMessage([...message, text]);
 

});

const listMessage = message.map((message) =>
<li>{message}</li>
)

const emmitMessage = () => {

  const text = document.querySelector('input').value;
  socket.emit('message', text)  
  
}

  return (
    <div className="Chat">
  
      <ul>{listMessage}</ul>

      <input placeholder="message"/>
      <button onClick={emmitMessage}>send</button>
      
    </div>
  );
  }



export default Chat;
