import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Chat.css";
import SideBar from "./SideBar";

function Chat() {
  const [message, setMessage] = useState([]);

  const socket = io("ws://localhost:8080");

  useEffect(() => {
    socket.connect();
    socket.on("message", setMessage);

    return () => {
      socket.disconnect();
    };
  }, []);

  const push = () => {
    const text = document.querySelector("input").value;
    socket.emit("message", text);
    console.log("this is text", text);

    console.log(typeof text);
  };

  console.log("this is type", typeof Array.from(message));

  const listMessage = Array.from(message).map((messages) => (
    <li>{messages}</li>
  ));

  return (
    <div className="Chat">
      <SideBar className = "side" />

      <section className="chat">
        <h1>This is the chatRoom</h1>

        <ul>{listMessage}</ul>

        <input placeholder="message" />
        <button onClick={push}>click</button>
      </section>
    </div>
  );
}

export default Chat;
