import { course, defaultState, Forum, Clubs } from './assetsComponent/displayTemplate';
import "./DisplayArea.css";


function DisplayArea (props) {    
    
    let displayed = "";

    switch(props.heroState){
        case "default":
            displayed = defaultState;
            break;
        case "course":
            displayed = course;
            break;
        case "forum":
            displayed = Forum;
            break;
        case "clubs":
            displayed = Clubs;
            break;
        default:
            displayed = defaultState;
            break;
    };

    return (
        <div className='displayTemplate'>
            {displayed}
        </div>
    );
}

export default DisplayArea;