import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = (setToken) => {
  const token = setToken;

  const handleLogout = (token) => {
    if (token) {
      console.log("dans console.log", token);
    }
  };

  return (
    <div className="nav">
      <Box sx={{ flexGrow: 1, zIndex: -2 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MyChatApp
            </Typography>

            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            {token ? (
              <></>
            ) : (
              <Button component={Link} to="/signup" color="inherit">
                Register
              </Button>
            )}
            {console.log("this is the toekn", token)}

            {token ? (
              <Button
                onClick={handleLogout(token)}
                component={Link}
                to="/login"
                color="inherit"
              >
                Logout
              </Button>
            ) : (
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            )}

            <Button component={Link} to="/chat" color="inherit">
              Chat
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
