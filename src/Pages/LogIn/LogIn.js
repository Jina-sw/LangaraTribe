import React, { useContext } from "react";
import { LoginContext } from "../../App";

export default function LogIn() {
    const [isLoggedIn, setLoggedIn] = useContext(Context);

    return (
        <div>
            <button onClick={()=> setLoggedIn(!isLoggedIn)}>Log In</button>
        </div>
    );

}