import React, { useContext, useState } from "react";
import axios from "axios";
import { LoginContext } from "../../Components/LoginContext";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import LoginNav from "./LoginNav";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";

export default function LogIn() {

    const { isLoggedIn, setLoggedIn } = useContext(LoginContext);
    const [errorMessage, setError] = useState("");
    const [values, setValue] = useState({
        username: "",
        password: ""
    });
    const url = "http://localhost:3500/users/login";


    function loginHandler() {
        setLoggedIn(!isLoggedIn);
        localStorage.setItem('login', 'true');
    }

    async function fetchLoginData() {

        await axios.get(url, {
            username: values.username,
            password: values.password
        }).then(res => {
            if (res.message == "login succesful") {
                loginHandler();
                Navigate("/");
            }
            setError(res.message);
        }).catch(err => { console.log(err) });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setError("");
        if (values.username != "" && values.password != "") {
            fetchLoginData();
        } else {
            setError("Please check if the username or password field is left empty");
        };
    };



    return (
        <div>
            <LoginNav />
            <form className="loginForm" onSubmit={formSubmitHandler}>
                <h1 className="loginHeader">
                    Login
                </h1>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Username
                    </p>
                    <div className="inputPlaceHolder">
                        <AiOutlineUserAdd className="inputIcon" />
                        <input type="text" name="username" placeholder="Type your username" onChange={(e) => setValue({ ...values, username: e.target.value })} />
                    </div>
                </section>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Password
                    </p>
                    <div className="inputPlaceHolder second">
                        <RiLockPasswordLine className="inputIcon" />
                        <input type="text" name="password" placeholder="Type your password" onChange={(e) => setValue({ ...values, password: e.target.value })} />
                    </div>
                </section>
                <div className="findPassword">
                    <p>Forgot password?</p>
                </div>
                <div id="errorDisplay">{errorMessage}</div>
                <section className="loginButton">
                    {/* <button type="submit">LOGIN</button> */}
                    <button onClick={() => setLoggedIn(!isLoggedIn)} ><Link to="/">LOGIN</Link></button>
                </section>
                <section className="loginPageSignUp">
                    <p><Link to="/signup"> Or Sign Up!</Link></p>
                </section>
            </form>
        </div>
    );

}