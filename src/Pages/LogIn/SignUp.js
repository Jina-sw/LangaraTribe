import React, {useContext} from "react";
import { LoginContext } from "../../Components/LoginContext";
import LoginNav from "./LoginNav";

// Need to implement connecting to the server side later on. 
function SignUp () {
    return (
        <div>
            <LoginNav/>
            <form className="loginForm">
                <h1 className="LoginHeader">
                    Sign Up
                </h1>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Username
                    </p>
                    <div className="userNameErrorMessage"></div>
                    <div className="inputPlaceHolder">
                        
                    </div>
                </section>
            </form>
        </div>
    );
};

export default SignUp;