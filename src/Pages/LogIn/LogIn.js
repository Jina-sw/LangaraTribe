import React, { useContext, useState } from "react";
import axios from "axios";
import { LoginContext } from "../../Components/LoginContext";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import LoginNav from "./LoginNav";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function LogIn() {

    const { isLoggedIn, setLoggedIn } = useContext(LoginContext);
    const [errorMessage, setError] = useState("");
    const [values, setValue] = useState({
        username: "",
        password: ""
    });
    const url = "http://localhost:3500/users/login";
    const navigate = useNavigate();


    function loginHandler() {
        setLoggedIn(true);
        localStorage.setItem('login', 'true');
    }

    async function fetchLoginData() {

        const username = values.username;
        const pw = values.password;

        await axios.post(url, {
            username: username
        }).then(res => {
            if (res.data.message != "User does not exist") {
                if (res.data.message == pw) {
                    loginHandler();
                    navigate("/");
                    setError(res.data.message);
                }else{
                    setError("Wrong Password!");
                }
            } else {
                setError(res.data);
            }
        }).catch(err => { setError(err.response.data) });
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
                    <div className="inputPlaceHolder second">
                        <AiOutlineUserAdd className="inputIcon" />
                        <input type="text" name="username" placeholder="Type your username" onChange={(e) => setValue({ ...values, username: e.target.value })} />
                    </div>
                </section>
                <div className="findPassword">
                    <p><Link to="/findusername">Forgot username?</Link></p>
                </div>
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
                    <p><Link to="/findpw">Forgot password?</Link></p>
                </div>
                <div id="errorDisplay">{errorMessage}</div>
                <section className="loginButton">
                    <button type="submit">LOGIN</button>
                </section>
                <section className="loginPageSignUp">
                    <p><Link to="/signup"> Or Sign Up!</Link></p>
                </section>
            </form>
        </div>
    );

}