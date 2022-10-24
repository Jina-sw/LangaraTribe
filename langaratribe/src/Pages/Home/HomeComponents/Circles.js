// Circles component for icon circles
// Need to find out a way to return correct icons depending on the parameter passed through obj literal
import { SiGoogleclassroom, SiAirtable, SiAlgolia, SiAmazons3, SiAndela } from "react-icons/si";

const Circles = (props) => {

    return (
        <div className="iconFlex">
            <div id={props.id}
                onMouseEnter={() => props.setState(`${props.id}`)}
                onMouseLeave={() => props.setState("default")}
            >
                <SiGoogleclassroom className="heroIcons" />
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