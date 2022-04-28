import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Chat.css";


function Chat() {

const [message, setMessage] = useState([]);

const socket = io('ws://localhost:8080');

useEffect(
  () => {
    
    socket.connect();
    socket.on("message", setMessage);
     
    return () => {
      socket.disconnect();
    }
  },
  []
)

const push = () =>{
  const text = document.querySelector('input').value;
  socket.emit('message', text[0])
  console.log(message)
}


const listMessage = Object.keys(message).map((key) =>
  <li key ={key}>{message[key]}</li>
);


  return (
    <div className="Chat">
  
      <ul>{listMessage}</ul>

      <input placeholder="message"/>
      <button onClick={push}>click</button>
      
      
    </div>
  );
  }



export default Chat;
