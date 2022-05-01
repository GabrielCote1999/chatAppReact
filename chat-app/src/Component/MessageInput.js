import { TextField } from "@mui/material";
import e from "cors";
import React, { useEffect, useState } from "react";
import "./MessageInput.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const NewMessage = ({ socket }) => {
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(0);

  
  const submitForm = (e) => {
    
    if ((value = "")) {
      
      e.preventDefault();
      socket.emit("message", value);
      setValue("");
    }
  };

  return (
    <form onSubmit={submitForm}>

      
      <TextField
        error={e.length < 1}
        id="outlined-basic"
        label={"Write something"}
        variant="outlined"
        autoFocus
        value={value}
     
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default NewMessage;
