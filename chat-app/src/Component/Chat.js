import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Chat.css";


function Chat() {

  const [message, setMessage] = useState([]);

  const socket = io('ws://localhost:8080')
  console.log(socket)



  
  socket.on('message', text => {
    console.log(text)
    

});

const emmitMessage = (messages) => {

  const text = document.querySelector('input').value;
 

  setMessage([...message, text])
  console.log(messages)
  
}

const showMessage = (message) => {

  {message.map(() => (
    <li>message</li>
  ))}
}

  return (
    <div className="Chat">

      <ul {...showMessage}>
        <li></li>

      </ul>

      <input placeholder="message"/>
      <button onClick={emmitMessage}>send</button>
     
    </div>
  );
  }



export default Chat;
