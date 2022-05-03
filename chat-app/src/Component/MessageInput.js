import { TextField } from "@mui/material";
import e from "cors";
import React, { useEffect, useState } from "react";
import "./MessageInput.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Box } from "@material-ui/core";



const NewMessage = ({ socket }) => {
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(0);

  
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit("message", value);
    setValue("");
    
  };

  return (
    <form onSubmit={submitForm}>

  
      <TextField
        margin="auto"
        fullWidth
        error={e.length < 1}
        id="outlined-basic"
        label={"Write something"}
        variant="outlined"
        autoFocus
        value={value}
        borderRadius={16}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      
    </form>
    
  );
};

export default NewMessage;
