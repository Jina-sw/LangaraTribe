import { useState } from "react";
import Nav from "../../Components/Nav";
import Hero from "./HomeComponents/Hero";
import DisplayArea from "./HomeComponents/DisplayArea";

const Home = () => {
    const [heroState, setState] = useState("default");

    return (
        <div>
            <Nav />
            <Hero setState={setState} />
            <DisplayArea heroState={heroState} />
        </div>
    );
};

export default Home;