import React, {useContext} from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { LoginContext } from "../../Components/LoginContext";
import LoginNav from "./LoginNav";
import "./Login.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// Need to implement connecting to the server side later on. 
function SignUp () {
    return (
        <div>
            <LoginNav/>
            <form className="loginForm">
                <h1 className="loginHeader">
                    Sign Up
                </h1>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Username
                    </p>
                    <div className="userNameErrorMessage"></div>
                    <div className="inputPlaceHolder">
                        <AiOutlineUserAdd className="inputIcon" />
                        <input type="text" placeholder="Username123" />
                    </div>
                </section>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Email Address
                    </p>
                    <div className="userNameErrorMessage"></div>
                    <div className="inputPlaceHolder">
                        <RiLockPasswordLine className="inputIcon" />
                        <input type="text" placeholder="email123@gmail.com" />
                    </div>
                </section>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Password
                    </p>
                    <div className="userNameErrorMessage"></div>
                    <div className="inputPlaceHolder">
                        <RiLockPasswordLine className="inputIcon" />
                        <input type="text" placeholder="Type your password" />
                    </div>
                </section>
                <section className="loginButton">
                    <button><Link to ="/">Sign Up!</Link></button>
                </section>
            </form>
        </div>
    );
};

export default SignUp;