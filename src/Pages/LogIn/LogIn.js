import React, { useContext } from "react";
import { LoginContext } from "../../Components/LoginContext";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import LoginNav from "./LoginNav";
import "./Login.css";
import { Link } from "react-router-dom";

export default function LogIn() {
    const { isLoggedIn, setLoggedIn } = useContext(LoginContext);

    return (
        <div>
            <LoginNav />
            <form className="loginForm">
                <h1 className="loginHeader">
                    Login
                </h1>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Username
                    </p>
                    <div className="inputPlaceHolder">
                        <AiOutlineUserAdd className="inputIcon" />
                        <input type="text" placeholder="Type your username" />
                    </div>
                </section>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Password
                    </p>
                    <div className="inputPlaceHolder second">
                        <RiLockPasswordLine className="inputIcon" />
                        <input type="text" placeholder="Type your password" />
                    </div>
                </section>
                <div className="findPassword">
                    <p>Forgot password?</p>
                </div>
                <section className="loginButton">
                    <button onClick={() => setLoggedIn(!isLoggedIn)}><Link to="/" exact="true">LOGIN</Link></button>
                </section>
                <section className="loginPageSignUp">
                    <p>Or Sign Up!</p>
                </section>
            </form>
        </div>
    );

}