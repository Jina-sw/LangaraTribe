import { useState } from "react";
import Nav from "../../Components/Nav";
import Hero from "./HomeComponents/Hero";

const Home = () => {
    const [heroState, setState] = useState("default");

    return (
        <div>
            <Nav/>
            <Hero setState={setState}/>
        </div>
    );
};

export default Home;