import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";

import CardContent from "@mui/material/CardContent";

function Home() {
  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center"
      marginBottom={5} paddingTop={10}>
        <Box width='75%'>
          <Typography variant="h2"> Welcome to my chat app</Typography>
          <Typography variant="p">Hi, my name is Gabriel! Welcome to my Chatapp. I created this project because I wanted to test the mern stack. You don't know what the mern stack is ? Here is a quick explanation of each component of the stack</Typography>
        </Box>
        </Box>
      <Box 
      sx={{ border: 3 }}
      width ="200px"
      display="flex" 
      margin="auto"
     
      borderRadius={2}
      justifyContent="center" 
      alignItems="center">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            React
          </Typography>
          
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Box>
      
      
    </div>
  );
}

export default Home;
