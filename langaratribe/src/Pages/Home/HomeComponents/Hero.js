import { SiGoogleclassroom, SiAirtable, SiAlgolia, SiAmazons3, SiAndela } from "react-icons/si";

import "./Hero.css";
function Hero(props) {
    // const array = ["course","chat","encyclopedia","clubs","news"];
    
    return (
        <div className="circleContainer">
            <div className="iconFlex">
                <div id="course"
                    onMouseEnter={() => props.setState("course")}
                    onMouseLeave={() => props.setState("default")}
                >
                    <SiGoogleclassroom className="heroIcons" />
                </div>
                <div className="heroDesc">
                    <p className="heroText">
                        Course Information
                    </p>
                    <p><span>Click Here!</span></p>
                </div>
            </div>
            <div className="iconFlex">
                <div id="chat"
                    onMouseEnter={() => props.setState("chat")}
                    onMouseLeave={() => props.setState("default")}
                >
                    <SiAirtable className="heroIcons" />
                </div>
                <div className="heroDesc">
                    <p className="heroText">
                        Course Information
                    </p>
                    <p><span>Click Here!</span></p>
                </div>
            </div>
            <div className="iconFlex">
                <div id="encyclopedia"
                    onMouseEnter={() => props.setState("encyclopedia")}
                    onMouseLeave={() => props.setState("default")}
                >
                    <SiAlgolia className="heroIcons" />
                </div>
                <div className="heroDesc">
                    <p className="heroText">
                        Course Information
                    </p>
                    <p><span>Click Here!</span></p>
                </div>
            </div>
            <div className="iconFlex">
                <div id="clubs"
                    onMouseEnter={() => props.setState("clubs")}
                    onMouseLeave={() => props.setState("default")}
                >
                    <SiGoogleclassroom className="heroIcons" />
                </div>
                <div className="heroDesc">
                    <p className="heroText">
                        Course Information
                    </p>
                    <p><span>Click Here!</span></p>
                </div>
            </div>
            <div className="iconFlex">
                <div id="news"
                    onMouseEnter={() => props.setState("news")}
                    onMouseLeave={() => props.setState("default")}
                >
                    <SiAmazons3 className="heroIcons" />
                </div>
                <div className="heroDesc">
                    <p className="heroText">
                        Course Information
                    </p>
                    <p><span>Click Here!</span></p>
                </div>
            </div>

        </div>
    );
};

export default Hero;