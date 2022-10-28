import Circles from "./Circles";
import "./Hero.css";
import DisplayArea from "./DisplayArea";


// Component for Hero section of Home Page. This component will be handling all events and displayment of Hero section
function Hero(props) {

    //object literals used for creating icon circles. Might consider moving this to the backend or database
    const icons = [
        {id: "course", icon: "IoMdLaptop", descArray: "Course"},
        {id: "forum", icon: "HiAnnotation", descArray: "Forum"},
        {id: "clubs", icon: "IoIosAmericanFootball", descArray: "Clubs"},
        {id: "news", icon: "IoMdPaper", descArray: "News"}
    ];
    console.log(icons);

    const iconList = icons.map((icon) => (
        <Circles
            key = {icon.id}
            id = {icon.id}
            icon = {icon.icon}
            desc = {icon.descArray}
            setState = {props.setState}
            heroState = {props.heroState}
        />
    ));

    return (
    <div>    
        <div className="circleContainer">
            {iconList}
        </div>
        <div className="template">
            <DisplayArea heroState={heroState}/>
        </div>
    </div>
            
        
       
    );
};

export default Hero;