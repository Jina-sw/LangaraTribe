import React, {useState} from 'react';
import './App.css';
import Home from './Pages/Home/Home';

export const LoginContext = React.createContext('');

export default function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  function toggleLogIn() {
    setLoggedIn(!isLoggedIn);
  }

  return (
    <div className="App">
      <LoginContext.Provider value={[isLoggedIn, setLoggedIn]}>
        <Home></Home>
      </LoginContext.Provider>
    </div>
  );
}
