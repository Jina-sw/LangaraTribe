import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginNav from "./LoginNav";
import { AiOutlineUserAdd } from "react-icons/ai";
import axios from "axios";
import "./Login.css";

export default function FindUsername() {

    const [errorMessage, setError] = useState("");
    const [values, setValue] = useState("");
    const url = "http://localhost:3500/users/finduser/";
    const navigate = useNavigate();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setError("");
        getUsername();
    };

    async function getUsername() {
        const res = await axios.get(url + values);
        if (res.data.message == "User does not exist") {
            setError(res.data.message);
        }else {
            setError("Your username is " + res.data.message);
        }
    };


    return (
        <div>
            <LoginNav />
            <form className="loginForm" onSubmit={formSubmitHandler}>
                <h1 className="loginHeader">
                    Find Username
                </h1>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Email
                    </p>
                    <div className="inputPlaceHolder">
                        <AiOutlineUserAdd className="inputIcon" />
                        <input type="text" name="email" placeholder="Type your Email" onChange={(e) => setValue(e.target.value)} />
                    </div>
                </section>
                <div className="errorDisplayLarge">{errorMessage}</div>
                <section className="loginButton">
                    <button type="submit">SUBMIT</button>
                </section>
            </form>
        </div>
    );

}