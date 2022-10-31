// Circles component for icon circles
// Need to find out a way to return correct icons depending on the parameter passed through obj literal


import { IoIosAmericanFootball, IoMdLaptop, IoMdPaper } from "react-icons/io";
import { HiAnnotation } from "react-icons/hi";

import DisplayArea from "./DisplayArea";

const Circles = ({ id,icon,desc,setState}) => {
    //console.log(icons);

    let iconS = "";
    switch (icon){
        case "IoMdLaptop" : 
            iconS = <IoMdLaptop className="heroIcons"/>;
            break;
        case "HiAnnotation" : 
            iconS = <HiAnnotation className="heroIcons"/>;
            break;
        case "IoIosAmericanFootball" : 
            iconS = <IoIosAmericanFootball className="heroIcons"/>;
            break;
        case "IoMdPaper" : 
            iconS = <IoMdPaper className="heroIcons"/>;
            break;
    }

    return (
        <div className="bigContainer">
            <div className="iconFlex">
                <div id={id}
                    onMouseEnter={() => setState(`${id}`)}   
                >
                {iconS}
                </div>
                <div className="heroDesc">
                    <p className="heroText">
                        {desc}
                    </p>
                    <p><span>Click Here!</span></p>
                </div>
            </div>
        </div>
    );
}

export default Circles;