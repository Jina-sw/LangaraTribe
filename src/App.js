import React, { useState } from 'react';
import { LoginContext } from './Components/LoginContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Course from './Pages/Course/Course'


export default function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path='login' element={<LogIn />}/>
            <Route path='Course' element={<Course/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
  );
}
