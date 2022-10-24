import { useState } from "react";
import Nav from "../../Components/Nav";

const Home = () => {
    const [heroState, setState] = useState("default");
    return (
        <div>
            <Nav/>
        </div>
    );
};

export default Home;