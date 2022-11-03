import { useState } from "react";
import Nav from "../../Components/Nav";
import { useContext } from "react";
import { LoginContext } from "../../Components/LoginContext";
import Hero from "./HomeComponents/Hero";
import DisplayArea from "./HomeComponents/DisplayArea";
import Menu from "../../Components/Menu/Menu";

const Home = () => {
    const [heroState, setState] = useState("default");
    const { isLoggedIn, setLoggedIn } = useContext(LoginContext);

    function exitButtonHandler() {
        console.log("buttonClicked");
    };

    function logOut() {
        exitButtonHandler();
        setLoggedIn(!isLoggedIn);
    };

    return (
        <div>
        <div>
            <Nav />
            <Hero setState={setState} />
            <DisplayArea heroState={heroState} />
        </div>
            <Menu exitButtonHandler={exitButtonHandler} logOut={logOut}/>
        </div>
    );
};

export default Home;