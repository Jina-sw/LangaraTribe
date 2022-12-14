import React, {useContext, useState} from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import LoginNav from "./LoginNav";
import "./Login.css";
import { RiLockPasswordLine } from "react-icons/ri";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

// Need to implement connecting to the server side later on. 


function SignUp () {
    
    const [value, setValue] = useState({
        email : "",
        username: "",
        password: ""
    });

    const url = "http://localhost:3500/users/signup";
    const navigate = useNavigate();
    
    async function postNewUser(e){
        e.preventDefault();
        if(!(value.email == "" && value.username == "" && value.password == "" )){
            await axios.post(url, {
                email: value.email,
                username: value.username,
                password: value.password
            }).then(res=>{
                console.log(res.data);
                if(res.data == "User registration successful"){
                    alert("Successfully Registered!");
                    navigate("/");
                }else{
                    alert(res.data);
                }
            }).catch(err=> {
                console.log(err);
            });
        }else{
            alert("Please don't leave any of username, email, and password empty!");
        }
    };

    return (
        <div>
            <LoginNav/>
            <form className="loginForm" onSubmit={postNewUser}>
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
                        <input type="text" placeholder="Username123" onChange={(e) => setValue({...value, username: e.target.value})} />
                    </div>
                </section>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Email Address
                    </p>
                    <div className="userNameErrorMessage"></div>
                    <div className="inputPlaceHolder">
                        <RiLockPasswordLine className="inputIcon" />
                        <input type="text" placeholder="email123@gmail.com" onChange={(e) => setValue({...value, email: e.target.value})}/>
                    </div>
                </section>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Password
                    </p>
                    <div className="userNameErrorMessage"></div>
                    <div className="inputPlaceHolder">
                        <RiLockPasswordLine className="inputIcon" />
                        <input type="text" placeholder="Type your password" onChange={(e) => setValue({...value, password: e.target.value})}/>
                    </div>
                </section>
                <section className="loginButton">
                    <button type="submit">Sign Up!</button>
                </section>
            </form>
        </div>
    );
};

export default SignUp;