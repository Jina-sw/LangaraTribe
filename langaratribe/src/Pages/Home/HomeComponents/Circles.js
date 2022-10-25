// Circles component for icon circles
// Need to find out a way to return correct icons depending on the parameter passed through obj literal
import { SiGoogleclassroom, SiAirtable, SiAlgolia, SiAmazons3, SiAndela } from "react-icons/si";

const Circles = (props) => {

    let icon = "";
    switch (props.icon){
        case "SiGoogleclassroom" : 
            icon = <SiGoogleclassroom className="heroIcons"/>;
            break;
        case "SiAirtable" : 
            icon = <SiAirtable className="heroIcons"/>;
            break;
        case "SiAlgolia" : 
            icon = <SiAlgolia className="heroIcons"/>;
            break;
        case "SiAmazons3" : 
            icon = <SiAmazons3 className="heroIcons"/>;
            break;
        case "SiAndela" : 
            icon = <SiAndela className="heroIcons"/>;
            break;
    }

    return (
        <div className="iconFlex">
            <div id={props.id}
                onMouseEnter={() => props.setState(`${props.id}`)}
                onMouseLeave={() => props.setState("default")}
            >
                {icon}
            </div>
            <div className="heroDesc">
                <p className="heroText">
                    {props.desc}
                </p>
                <p><span>Click Here!</span></p>
            </div>
        </div>
    );
}

export default Circles;