import Circles from "./Circles";
import "./Hero.css";

// Component for Hero section of Home Page. This component will be handling all events and displayment of Hero section
function Hero(props) {

    //object literals used for creating icon circles. Might consider moving this to the backend or database
    const icons = [
        {id: "course", icon: "SiGoogleclassroom", descArray: "Course Information"},
        {id: "chat", icon: "SiAirtable", descArray: "Chat Information"},
        {id: "encyclopedia", icon: "SiAlgolia", descArray: "Encyclopedia Information"},
        {id: "clubs", icon: "SiAmazons3", descArray: "Clubs Information"},
        {id: "news", icon: "SiAndela", descArray: "News Information"}
    ];
    
    const iconList = icons.map((icon) => (
        <Circles
            key = {icon.id}
            id = {icon.id}
            icon = {icon.icon}
            desc = {icon.desc}
            setState = {props.setState}
        />
    ));
    
    return (
        <div className="circleContainer">
            {iconList}
        </div>
    );
};

export default Hero;