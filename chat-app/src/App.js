

import './App.css';
import SignUp from "./Component/SignUp";
import SignInForm from "./Component/SignInForm";
import Chat from "./Component/Chat";
import Nav from "./Component/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import React, {useState} from 'react';

function App() {
/*
the signUp page will only show up if the user is logged in
*/
  const [token, setToken] = useState();
  if (!token){
    return <SignInForm setToken = {setToken} />
  }
  return (

      <BrowserRouter>
      <Nav />
      <Routes>
       <Route path = '/' element = {<Home/>} />
        <Route path = '/login' element = {<SignInForm/>} />
        <Route path = '/signup' element = {<SignUp/>} />
        <Route path ='/chat' element = {<Chat/>} />
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
